import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const ContactPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Box className="w-[100%] h-[60px] bg-teal-800 mt-[-660px]  ">
        <Heading color="white" textAlign="center" >
          Contact Page
        </Heading>
      </Box>
<br />
<br />
      {/* form */}
      <Box >
        <Button ml="50%" bg="lightblue" onClick={onOpen}>Create Contact</Button>

        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>       
          <ModalOverlay />
          <ModalContent>
          
            <ModalHeader>Create your Contact</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input placeholder="First name" />
              </FormControl>
              <br />
              <FormControl isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Last Name" />
              </FormControl>
              <br />     <br />   
              
              <RadioGroup defaultValue='Itachi'>
                    
              <HStack spacing='26px'>
              <FormLabel ml="20px">Status :</FormLabel>  
                <Radio value='Active'>Active</Radio>
                <Radio value='Inactive'>Inactive</Radio>
              </HStack>
            </RadioGroup>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} colorScheme="blue" m={"auto"}>
                Save Contact
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
};

export default ContactPage;
