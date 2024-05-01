import React, { VFC, memo, useCallback } from 'react'
import {Flex,Heading,Link,Box,} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { MenuiconButton } from '../../atmos/button/MenuiconButton'
import { MenuDrawer } from '../../molecules/MenuDrawer'
import { useHistory } from 'react-router-dom'

export const Header:VFC = memo(() => {
  const { isOpen,onOpen, onClose } = useDisclosure()
  const history = useHistory()

  const onClickHome = useCallback(() => history.push('/home'),[])
  const onClickUserManagement = useCallback(() => history.push('/home/user_management'),[])
  const onClickSetting = useCallback(() => history.push('/home/setting'),[])
  const onClickLogout = useCallback(() => history.push('/'),[])

  return (
    <>
    <Flex as='nav' bg='teal.500' color='gray.50'align='center' justify='space-between' >
      <Flex align='center' as='a' mr={8} _hover={{cursor:'pointer'}} onClick={onClickHome} >
      <Heading as='h1' fontSize={{base:'md', md:'lg'}} padding={{base:3, md:5}} >ユーザー管理画面アプリ</Heading>
      </Flex>
      <Flex 
      align='center' fontSize='sm' flexGrow={2} display={{base:'none',md:'flex'}} >
        <Box pr={4}>
        <Link onClick={onClickUserManagement} >ユーザー一覧</Link>
        </Box>
        <Box pr={4}>
        <Link onClick={onClickSetting}>設定</Link>
        </Box>
        <Link onClick={onClickLogout}>ログアウト</Link>
      </Flex>
      <MenuiconButton onOpen={onOpen} />
    </Flex>
    <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHome={onClickHome} onClickUserManagement={onClickUserManagement} onClickSetting={onClickSetting} onClickLogout={onClickLogout} />
  </>
  )
})
