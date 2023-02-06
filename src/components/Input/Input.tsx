import { InputGroup, Input } from "@chakra-ui/react";


export const InputContainer = ({children, inputId, inputType, inputHolder}: any) => {
  return (
     <InputGroup m='20px 0'>
      {children}
      <Input id={inputId} variant='flushed' type={inputType} placeholder={inputHolder} />
  </InputGroup>
  )
}