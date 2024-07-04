import React from "react"
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Image,
  HStack,
  Text,
} from "@chakra-ui/react"
import { ErrorIcon } from "../../../assets/icons";

function ConfirmationModal({ 
  isOpen, 
  toggle, 
  confirm, 
  message, 
  messageData,  
  titleConfirm, 
  titleCancel,
  isDisabled,
  customIcon,
  confirmationTitle,
}) {
  
  return (
    <>
      <Modal isOpen={isOpen} onClose={toggle} size="xs" m="5" isCentered autoFocus={false}>
        <ModalOverlay />
        <ModalContent p="5" borderRadius='20px'>
          <ModalHeader p='0'>
            <HStack>
              <Text textStyle='primary'>
                { confirmationTitle ? confirmationTitle : "Confirmation"}
              </Text>
            </HStack>
          </ModalHeader>
          <ModalBody p='0' my='4'>
            <HStack spacing='20px'>
              <Image src={ErrorIcon} w="1.5em" h='1.5em' />
              <Text fontSize='14px'>
                {message}
                {messageData && (
                  <span>
                    {" "}{messageData}{"?"}
                  </span>
                )}
              </Text>
            </HStack>
          </ModalBody>
          <ModalFooter p='0'>
            <HStack justifyContent="end">
              <Button onClick={toggle} textStyle="light" fontSize="14px" _focus={{ bg: "white" }}>
                Cancel
              </Button>
              <Button onClick={confirm} textStyle="light" fontSize="14px" variant="primary">
                {titleConfirm ?? 'Delete'}
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ConfirmationModal
