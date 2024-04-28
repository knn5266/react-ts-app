
import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { User } from '../../types/api/User'
import { useHistory } from 'react-router-dom'
import { useMessage } from './UseMessage'

export const useAuth = () => {
  const history = useHistory()
  const showMessage = useMessage()
  const [loading, setLoading] = useState(false)
  const login = useCallback((id:string) => {
    setLoading(true)
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>{
      if(res.data){
        showMessage({title:'ログインしました',status:'success'})
        history.push('/home')
      }else{
        alert('ユーザーが見つかりません')
      }
    }).catch(() => alert('ログインできません')).finally(()=>setLoading(false))
  },[history])
  return {login,loading}
}
