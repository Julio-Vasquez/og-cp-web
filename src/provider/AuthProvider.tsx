import { createContext, useState, useContext } from 'react'

const AuthContext = createContext({
  isAuthenticated: false,
  userType: null,
  token: null,
  setAuth: () => {},
  setAuthenticated: () => {},
  setUserType: () => {},
  setToken: () => {},
})

export const AuthProvider = ({ children, isAuthenticated, userType }) => {
  const [auth, setAuth] = useState({
    isAuthenticated,
    userType,
    token: null,
  })

  const setAuthenticated = value => setAuth({ ...auth, isAuthenticated: value })
  const setUserType = value => setAuth({ ...auth, userType: value })
  const setToken = value => setAuth({ ...auth, token: value })

  return (
    <AuthContext.Provider
      value={{
        ...auth,
        setAuth,
        setAuthenticated,
        setUserType,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined)
    throw new Error('useAuth must be used within an AuthProvider')

  return context
}
