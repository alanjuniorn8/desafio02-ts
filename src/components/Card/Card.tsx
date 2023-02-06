import { 
  AtSignIcon,
  LockIcon
} from "@chakra-ui/icons";

import { Button, Center, InputLeftElement, Text } from "@chakra-ui/react";

import { InputContainer } from "../Input/Input";


interface ICard {
  biggerText: string,
  smallText: string,
  eventClick: () => {}
}

export const Card = ({biggerText, smallText, eventClick}: ICard) => {
  return(
    <div>
      <Text fontSize='4xl' as='b'>{biggerText}</Text>
      <Text fontSize='md' m='40px 0'>{smallText}</Text>
      <InputContainer inputId='email' inputType='email' inputHolder='E-mail'>
        <InputLeftElement
          pointerEvents='none'
          children={<AtSignIcon color='#8647ad.300' />}
        />
      </InputContainer>
      <InputContainer inputId='senha' inputType='password' inputHolder='Password'>
        <InputLeftElement
          pointerEvents='none'
          children={<LockIcon color='#8647ad.300' />}
        />
      </InputContainer>
      <Center 
        minWidth='100%'
        minHeight='100%'
        borderRadius='50px'
        border='2px'
        borderColor='#8647ad'
        marginTop='40px'>
        <Button onClick={eventClick}
          minWidth='98%'
          margin= '5px'
          backgroundColor='#8647ad'
          borderRadius= '1.5em'
        >
          LOG IN
        </Button>
      </Center>
    </div>
  )
}