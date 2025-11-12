import React, { useEffect, useLayoutEffect, useState, useCallback } from "react";
import { AuthContext } from "./authContext";
import { api } from "../../api/client";
import { authService } from "../../api/auth";

const STORAGE_KEY = "accessToken";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [token, setTokenState] = useState<string | null>(() => {

        try {

            return localStorage.getItem(STORAGE_KEY);
        } catch {

            return null;
        }
    });

    const setToken = useCallback((t: string | null) => {

        setTokenState(t);
        try {

            if (t) localStorage.setItem(STORAGE_KEY, t);
            else localStorage.removeItem(STORAGE_KEY);
            
        } catch {
            // ignore
        }
    }, []);

    useEffect(() => {

        const run = async () => {

            if (!token) return;

            try {

                await authService.fetchMe();

            } catch {

                setToken(null);
            }
        };
        run();
    }, [token, setToken]);

    useLayoutEffect(() => {

        const reqInter = api.interceptors.request.use((config) => {

            try {

                const t = localStorage.getItem(STORAGE_KEY);

                if (t) {
                    config.headers = config.headers ?? {};
                    config.headers.Authorization = `Bearer ${t}`;
                }

            } catch {
                // ignore
            }
            return config;
        });

        return () => {
            api.interceptors.request.eject(reqInter);
        };
    }, []);

    const logout = useCallback(() => {
        setToken(null);
    }, [setToken]);

    return (
        <AuthContext.Provider value={{ token, setToken, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
