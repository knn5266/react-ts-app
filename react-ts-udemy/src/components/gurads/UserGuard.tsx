import React, { ReactNode } from 'react'
import { useAuth } from '../hooks/useAuth'
import { User } from '../../types/api/User'
import { useRouter } from 'next/router'

type Props ={
  children:((user:User) => ReactNode) | ReactNode 
}

const UserGuard = ({children}:Props) => {
  const user = useAuth()
  const router = useRouter()

  //リダイレクト
  if(user === null && router.pathname !== '/' ){
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
}else{
  //そのまま表示
  return <>{children}</>
}
}

export default UserGuard