import React, { useState, useEffect, createContext, useContext } from "react"

const AuthContext = createContext<any>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        try {
            const stored = sessionStorage.getItem('user');
            if (stored) {
                setUser(JSON.parse(stored));
            }
        } catch {}
    }, [])

    const login = (user: any) => {
        setUser(user)
        try {
            sessionStorage.setItem('user', JSON.stringify(user));
        } catch {}
    }

    const logout = () => {
        setUser(null)
        try {
            sessionStorage.removeItem('user');
        } catch {}
    }

    return <AuthContext.Provider value={{ user, login, logout }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}