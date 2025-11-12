import { createContext, useContext } from "react";

export const AuthContext = createContext<{
    token: string | null;
    setToken: (token: string | null) => void;
    logout: () => void;
    name: string | null;
    setName: (name: string) => void;
}>({
    token: null,
    setToken: () => { },
    logout: () => {},
    name: null,
    setName: () => {},
});

export const useAuth = () => {

    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return authContext;
}
