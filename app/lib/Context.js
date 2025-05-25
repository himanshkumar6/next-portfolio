"use client"


import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "./firebase"

const AuthContext = createContext()

const Context = ({ children }) => {

  const [user, setUser] = useState("")
  const [isLoading, setisLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setisLoading(true)
    const discard = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      setisLoading(false)
    })
    return () => discard()
  }, [])


  const handleSignInwithGoogle = async () => {
    setisLoading(true)
    try {
      await signInWithPopup(auth, new GoogleAuthProvider())
    } catch (error) {
      setError(error?.message)
    }
    setisLoading(false)
  }
  const handleLogout = async () => {
    setisLoading(true)
    try {
      await signOut(auth)
    } catch (error) {
      setError(error?.message)
    }
    setisLoading(false)
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        handleSignInwithGoogle,
        handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)


export default Context