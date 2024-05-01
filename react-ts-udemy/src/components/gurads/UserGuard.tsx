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

  //認証確認中
  if(!user){
    return null
  }

  if(typeof children === 'function'){
    //ユーザー情報を渡して実行
  return <>{children}</>
 }
}

export default UserGuard