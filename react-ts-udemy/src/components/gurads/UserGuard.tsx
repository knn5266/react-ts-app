import React, { ReactNode } from 'react'
import { useHistory } from 'react-router-dom'
import { useAllUsers } from '../hooks/useAllUsers'

type UserGuardProps ={
  children: ReactNode
}

const UserGuard = ({children}:UserGuardProps) => {
  const users  = useAllUsers()
  const history = useHistory()

  //リダイレクト
  if(users === null && history.location.pathname !== '/' ){
    history.push('/')
  }

  return <>{children}</>
}

export default UserGuard