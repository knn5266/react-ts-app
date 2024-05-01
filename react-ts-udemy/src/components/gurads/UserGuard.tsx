import React, { ReactNode } from 'react'
import { useAuth } from '../hooks/useAuth'
import { User } from '../../types/api/User'
import { useHistory } from 'react-router-dom'

type UserGuardProps ={
  children:((user:User) => ReactNode) | ReactNode
}

const UserGuard = ({children}:UserGuardProps) => {
  const user = useAuth()
  const router = useHistory()

  //リダイレクト
  if(user === null && router.location.pathname !== '/' ){
    router.push('/')
    return null
  }

  return children
}

export default UserGuard