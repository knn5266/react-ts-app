import React, { ReactNode } from 'react'
import { useHistory } from 'react-router-dom'
import { useLoginUser } from '../hooks/useLoginUser'

type UserGuardProps ={
  children: ReactNode
}

const UserGuard = ({children}:UserGuardProps) => {
  const loginUser  = useLoginUser()
  const history = useHistory()

  //リダイレクト
  if(loginUser === null && history.location.pathname !== '/' ){
    history.push('/')
  }

  return <>{children}</>
}

export default UserGuard