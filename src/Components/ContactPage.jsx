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
  useDisclosure,
  GridItem,
  Text,
  VStack,
  Select,
} from "@chakra-ui/react";
import React, {  useState } from "react";
import { addContact } from "../Redux/App/action";
import { useDispatch, useSelector } from "react-redux";

const ContactPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const initialRef = React.useRef(null);
  // const finalRef = React.useRef(null);

  const dispatch = useDispatch();
  const { contacts } = useSelector((store) => store);
  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    status: "",
  });
  console.log(contacts);

  const handleAdd = () => {
    if (contact.firstname && contact.lastname &&contact.status ) {
      dispatch(addContact(contact, contacts));
    } else {
      alert("add something");
    }
  };
  // useEffect(()=>{
  //   handleAdd()
  // },[])
  return (
    <>
      <Box className="w-[100%] h-[60px] bg-teal mt-[-660px]  ">
        <Heading color="white" textAlign="center">
          Contact Page
        </Heading>
      </Box>
      <br />
      <br />
      {/* form Creation Data */}
      <Box>
        <Button ml="50%" bg="lightblue" onClick={onOpen}>
          Create Contact
        </Button>

        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your Contact</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input
                  value={contact.firstname} onChange={(e)=>setContact({...contact,firstname:e.target.value})}
                placeholder="First name" />
              </FormControl>
              <br />
              <FormControl isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input 
                  value={contact.lastname} onChange={(e)=>setContact({...contact,lastname:e.target.value})}
                
                placeholder="Last Name" />
              </FormControl>
              <br /> <br />
              {/* <FormLabel ml="20px">Status :</FormLabel> */}
              <Select value={contact.status} onChange={(e)=>setContact({...contact,status:e.target.value})}  >
                  <option  value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
               
              </Select>
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleAdd}   colorScheme="blue" m={"auto"}>
                Save Contact
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      {/* Append Data */}
      <Box ml="25%" mt="10%">
        <GridItem>
          <Box
            border="1px solid black"
            borderRadius="10px"
            w="40%"
            h="140px"
            padding="20px"
          >
            <Text fontWeight="bold" fontSize="20px">
              FirstName:
            </Text>
            <Text fontWeight="bold" fontSize="20px">
              LastName:
            </Text>
            <Text fontWeight="bold" fontSize="20px">
              Status:
            </Text>
          </Box>
          <br />
          <VStack w="40%">
            <Button bgColor="teal" color="white" onClick={onOpen}>
              {" "}
              Edit Data
            </Button>
            <Button bgColor="red" color="white">
              Delete
            </Button>
          </VStack>
        </GridItem>
      </Box>
    </>
  );
};

export default ContactPage;
