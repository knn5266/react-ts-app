

import React, { useCallback, useEffect } from "react";
import { VFC, memo } from "react";
import {  Center,  Spinner, Wrap, WrapItem, useDisclosure } from "@chakra-ui/react";
import { UserCard } from "../organisms/User/UserCard";
import { useAllUsers } from "../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/User/UserDetailModal";
import { useSelectUSer } from "../hooks/useSelectUSer";

export const UserManagement: VFC = memo(() => {
 const {isOpen, onOpen, onClose} = useDisclosure()
  const { getUsers, users, loading } = useAllUsers();
  const {onSelectUser, selectedUser} = useSelectUSer
  console.log(selectedUser)
 
  useEffect(() => getUsers(), []);

  const onClickUser =useCallback(
    (id:number) => {
      onSelectUser({id, users, onOpen})},[users, onSelectUser])

  return (
    <>
    {loading ? (
      <Center h="100vh">
        <Spinner />
      </Center>
    ) : (
      <Wrap p={{ base: 4, md: 10 }}>
        {users.map((user) => (
          <WrapItem key={user.id} mx="auto">
            <UserCard
              imageUrl="https://picsum.photos/800"
              userName={user.username}
              fullName={user.name}
              onClick={onClickUser}
              id={user.id}
            />
          </WrapItem>
        ))}
      </Wrap>
    )}
    <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
  </>

  )
})