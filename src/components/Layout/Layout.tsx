import {
  Box,
  Center,
  Flex,
  Spacer,
  Text
} from "@chakra-ui/react";
import { Header } from "../Header/Header";
import { Card } from "../Card/Card";
import { login } from "../../services/login";

export const Layout = ({children}: any) => {
  return (
    <Box minHeight='100vh' backgroundColor='#1e192c' color='white'>
      <Header/>
      {children}
      <Flex>
        <Spacer />
        <Center flex='1'>
          <Text fontSize='4xl' as='b' m='20px 0'>The platform for you to learn from experts, master the main technologies and enter the most desired companies faster.</Text>
        </Center>
        <Spacer />
        <Box w='380px'>
          <Card biggerText='Are you registered yet?' smallText='Log in and make the change._' eventClick={login}/>    
        </Box>
        <Spacer />
      </Flex>
    </Box>
  )
}