import logo from '../../assets/dio.png';
import { Box } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box bg='#151515' p='8px 16px' m='0 0 200px 0'>
      <Box w='97px' h='37px'>
        <img src={logo} alt="logo DIO" />
      </Box>      
    </Box>
  )
}