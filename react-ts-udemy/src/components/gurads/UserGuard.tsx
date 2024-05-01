import React, { ReactNode } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useHistory } from 'react-router-dom'

type UserGuardProps ={
  children: ReactNode
}

const UserGuard = ({children}:UserGuardProps) => {
  const user = useAuth()
  const router = useHistory()

  //リダイレクト
  if(user === null && router.location.pathname !== '/' ){
    router.push('/')
    return null
  }

  return <>{children}</>
}

export default UserGuard