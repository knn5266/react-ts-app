import React, { ChangeEvent, useState } from "react";
import { Box, Flex, Heading, Divider, Input , Stack } from "@chakra-ui/react";
import { VFC, memo } from "react";
import { PrimaryButton } from "../atmos/button/PrimaryButton";
import { useAuth } from "../hooks/useAuth";

export const Login: VFC = memo(() => {
  const {login, loading} = useAuth()
  const [userId, setUserId] = useState('')
const onclickLogin = () => login(userId)

  const onchangeUserId = (e:ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)
  return (
    <Flex align='center' justify='center' height='100vh' >
    <Box bg='white' w='sm' p={4} borderRadius='md' shadow='md' >
      <Heading as='h1' size='lg' textAlign='center' >ユーザー管理アプリ</Heading>
      <Divider my={4} />
      <Stack spacing={6} py={4} px={10} >
        <Input placeholder='ユーザーID' value={userId} onChange={onchangeUserId}/>
        <PrimaryButton onClick={onclickLogin} loading={loading} disabled={userId === ''} >ログイン</PrimaryButton>
      </Stack>
    </Box>
  </Flex>
  )
})