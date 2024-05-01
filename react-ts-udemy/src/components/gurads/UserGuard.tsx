import React, { ReactNode } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useHistory } from 'react-router-dom'

type UserGuardProps ={
  children: ReactNode
}

const UserGuard = ({children}:UserGuardProps) => {
  const userId = useAuth()
  const history = useHistory()

  //リダイレクト
  if(userId === null && history.location.pathname !== '/' ){
    history.push('/')
  }

  return <>{children}</>
}

export default UserGuard