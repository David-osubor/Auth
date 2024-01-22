import { useState,createContext } from 'react'

export const AuthContext = createContext()

export function AuthProvider(props) {
    const [User,setUser] = useState(null)

    return (
        <AuthContext.Provider value={[User,setUser]}>
            {props.children}
        </AuthContext.Provider>
    );
}
