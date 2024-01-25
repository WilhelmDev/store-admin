import React, { createContext, useState } from "react";
import clientInstance from "../config/axios";
import { toast } from "react-toastify";

const AuthContext = createContext({})

const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [token, setToken] = useState('')

  const saveToken = (token:string) => {
    localStorage.setItem('token', token)
    setToken(token)
  }

  const getToken = () => {
    let token = localStorage.getItem('token')
    if (!token) {
      token = ''
      setToken(token)
      return token
    }
    setToken(token)
    return token
  }

  const getData = async () => {
    const token = getToken()
    if (token === '') {
      toast.error('Su sesión ha expirado, inicie sesion de nuevo')
      return
    }
    const data = await clientInstance.get('/users/data', { headers: { Authorization: 'Bearer ' + token }})
    return data
  }
    return (
      <AuthContext.Provider value={{
        saveToken, getToken, getData, token
      }}>
        {children}
      </AuthContext.Provider>
    )
}
export {
  AuthProvider
}

export default AuthContext