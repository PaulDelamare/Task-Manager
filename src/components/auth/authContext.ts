import { createContext, useContext } from "react";

export const AuthContext = createContext<{
    token: string | null;
    setToken: (token: string | null) => void;
    logout: () => void;
}>({
    token: null,
    setToken: () => { },
    logout: () => {},
});

export const useAuth = () => {

    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return authContext;
}
