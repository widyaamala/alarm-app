import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Avatar, Box, Button, Divider, HStack, Image, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import useIcons from "../../assets/icons";
import useServiceMutate from "../../services/mutations";

const Index = () => {
  const icons = useIcons()
  const navigate = useNavigate();

  const logout = useMutation({
    mutationFn: () => {
      useServiceMutate.logout(() => navigate("/"));
    },
  });

  return (
    <VStack w="100%" h="100%" my="5" px="5">
      <Avatar bg={useColorModeValue('primary.light', 'primary.dark')} size="lg" mb="5" />
      <HStack my="2" w="100%" justifyContent="start">
        <Box
          rounded="full"
          w="36px"
          h="36px"
          bg={useColorModeValue('base.light', 'base.dark')}
          p="8px"
        >
          <Image w="100%" h="100%" src={icons.badge} />
        </Box>
        <VStack align="start">
          <Text color="grey" textStyle="light" fontSize="14px">
            Name
          </Text>
          <Text textStyle="bold" fontSize="14px">Mega Chan</Text>
        </VStack>
      </HStack>
      <Divider />
      <HStack my="2" w="100%" justifyContent="start">
        <Box
          rounded="full"
          w="36px"
          h="36px"
          bg={useColorModeValue('base.light', 'base.dark')}
          p="8px"
        >
          <Image w="100%" h="100%" src={icons.email} />
        </Box>
        <VStack align="start">
          <Text color="grey" textStyle="light" fontSize="14px">
            Email
          </Text>
          <Text textStyle="bold" fontSize="14px">mega@gmail.co</Text>
        </VStack>
      </HStack>
      <Divider />
      <HStack my="2" w="100%" justifyContent="start">
         <Box
          rounded="full"
          w="36px"
          h="36px"
          bg={useColorModeValue('base.light', 'base.dark')}
          p="8px"
        >
          <Image w="100%" h="100%" src={icons.contactPhone} />
        </Box>
        <VStack align="start">
          <Text color="grey" textStyle="light" fontSize="14px">
            Phone
          </Text>
          <Text textStyle="bold" fontSize="14px">+6123456178</Text>
        </VStack>
      </HStack>
      <Divider />
      <HStack mt="auto" w="100%" justifyContent="center">
        <Button
          textStyle="semi"
          fontSize="14px"
          border="1px"
          borderColor='danger'
          color='danger'
          bg="white"
          w="50%"
          onClick={() => logout.mutate()}
        >
          Logout
        </Button>
        <Button
          onClick={() => navigate("/change-password")}
          textStyle="semi"
          fontSize="14px"
          w="50%"
          variant="primary"
        >
          Change Password
        </Button>
      </HStack>
    </VStack>
  );
};

export default Index;
