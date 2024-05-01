import React, { VFC, memo } from 'react'
import{Button, Drawer, DrawerOverlay, DrawerContent ,DrawerBody} from '@chakra-ui/react'

type Props = {
  onClose:() => void
  isOpen:boolean 
  onClickHome:() => void
  onClickUserManagement:()=>void
  onClickSetting:()=>void
  onClickLogout:() => void
}

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {isOpen,onClose,onClickHome,onClickSetting,onClickUserManagement,onClickLogout} = props
  return (
    <Drawer placement='left' size='xs' onClose={onClose} isOpen={isOpen}  >
    <DrawerOverlay>
      <DrawerContent>
        <DrawerBody p={0} bg='gray.100' >
          <Button w='100%' onClick={onClickHome}>TOP</Button>
          <Button w='100%' onClick={onClickUserManagement}>ユーザー一覧</Button>
          <Button w='100%' onClick={onClickSetting}>設定</Button>
          <Button w='100%' onClick={onClickLogout}>ログアウト</Button>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
  )
})
