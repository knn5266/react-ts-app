import { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import { User } from "../../../types/api/User";
import {Modal,ModalOverlay,ModalHeader,ModalContent,ModalCloseButton,ModalBody,Stack,FormControl,FormLabel,Input, ModalFooter,} from '@chakra-ui/react'
import { PrimaryButton } from "../../atmos/button/PrimaryButton";


type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?:boolean
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, isAdmin = false ,user } = props;

  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    setUsername(user?.username ?? '')
    setName(user?.name ?? '')
    setEmail(user?.email ?? '')
    setPhone(user?.phone ?? '')
  },[user])

  const onchangeUsername = (e:ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
  const onchangeName = (e:ChangeEvent<HTMLInputElement>) => setName(e.target.value)
  const onChangeEmail = (e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const onChangePhone = (e:ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)

  const onClickUpdate = () => alert()

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      autoFocus={false}
    >
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={6}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input
                value={username}
                onChange={onchangeUsername}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input
                value={name}
                onChange={onchangeName}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input
                value={email}
                onChange={onChangeEmail}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input
                value={phone}
                onChange={onChangePhone}
                isReadOnly={!isAdmin}
              />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
          <PrimaryButton onClick={onClickUpdate} >更新</PrimaryButton>
          </ModalFooter>
       )}
      </ModalContent>
    </Modal>
  );
});