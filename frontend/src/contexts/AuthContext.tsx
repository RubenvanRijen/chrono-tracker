"use client";

import React, { createContext, useEffect, useState } from "react";

type User = { name: string } | null;

type AuthContextShape = {
    user: User;
    login: (name: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextShape>({
    user: null,
    login: () => {
    },
    logout: () => {
    },
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>(null);

    useEffect(() => {
        try {
            const raw = localStorage.getItem("ct_user");
            if (raw) { setUser(JSON.parse(raw)); }
        } catch (e) {
            // ignore
        }
    }, []);

    const login = (name: string) => {
        const u = { name };
        setUser(u);
        try {
            localStorage.setItem("ct_user", JSON.stringify(u));
        } catch (e) {
            console.error("Failed to save user to localStorage", e);
        }
    };

    const logout = () => {
        setUser(null);
        try {
            localStorage.removeItem("ct_user");
        } catch (e) {
            console.error("Failed to remove user from localStorage", e);
        }
    };

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
