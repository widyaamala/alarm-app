import {
  Button,
  Divider,
  HStack,
  Text,
  VStack,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Setting = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack w="100%" h="100%" my="5" align="start">
      <Text textStyle="bold" fontSize="14px">
        General
      </Text>
      <VStack
        mb="3"
        w="100%"
        align="start"
        p="5"
        bg={useColorModeValue("mutedBase.light", "mutedBase.dark")}
        borderRadius="13px"
      >
        <Text fontSize="14px">Profile</Text>
        <Divider />
        <Text fontSize="14px" mt="3">
          Sound
        </Text>
        <Divider />
        <HStack justifyContent="space-between" mt="3" w="100%">
          <Text fontSize="14px">Dark Mode</Text>
          <Switch
            id="theme-mode"
            ml="auto"
            defaultChecked={colorMode === "light"}
            isChecked={colorMode === "dark"}
            onChange={toggleColorMode}
          />
        </HStack>
        <Divider />
      </VStack>
      <Text textStyle="bold" fontSize="14px">
        Support
      </Text>
      <VStack
        mb="3"
        w="100%"
        align="start"
        p="5"
        bg={useColorModeValue("mutedBase.light", "mutedBase.dark")}
        borderRadius="13px"
      >
        <Text fontSize="14px">Privacy & Security</Text>
        <Divider />
        <Text fontSize="14px" mt="3">
          Help & FAQ
        </Text>
        <Divider />
        <Text fontSize="14px" mt="3">
          About
        </Text>
        <Divider />
      </VStack>
      <Button
        textStyle="semi"
        fontSize="14px"
        border="1px"
        borderColor="danger"
        color="danger"
        bg="white"
        w="100%"
        mt="auto"
        onClick={() => logout.mutate()}
      >
        Delete Account
      </Button>
    </VStack>
  );
};

export default Setting;
