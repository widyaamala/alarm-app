import { useState, useRef } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  useToast,
  useColorModeValue,
  Link as ChakraLink,
  HStack,
} from "@chakra-ui/react";
import { useNavigate, Link as ReactRouterLink } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import useIcons from "../../assets/icons";
import useServiceMutate from "../../services/mutations";
import Toast from "../../components/commons/Toast";

const ChangePassword = () => {
  const icons = useIcons();
  const navigate = useNavigate();
  const formikRef = useRef();
  const toast = useToast();
  const [showPass, setShowPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const validationSchema = yup.object({
    password: yup.string("Input password").required("Password cannot be empty"),
    new_password: yup
      .string("Input new password")
      .required("New Password cannot be empty"),
    confirm_password: yup
      .string("Input confirmation password")
      .required("Confirmation Password cannot be empty")
      .oneOf(
        [yup.ref("new_password"), null],
        "Confirmation Password must match New Password"
      ),
  });

  const logout = useMutation({
    mutationFn: () => {
      useServiceMutate.logout(() => navigate("/"));
    },
  });

  return (
    <>
      <VStack
        justify="center"
        alignItems="center"
        w="100vw"
        h="100vh"
        bg={useColorModeValue("layout.light", "layout.dark")}
        p="10"
      >
        <Box mt="2rem" w="100%">
          <Text textStyle="bold" fontSize="24px">
            Change Password
          </Text>
        </Box>
        <Box w="100%">
          <Formik
            innerRef={formikRef}
            initialValues={{
              password: "",
              new_password: "",
              confirm_password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              logout.mutate();
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Box m="2.5rem 0 3rem 0">
                  <FormControl
                    my="1rem"
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel
                      color={useColorModeValue("tertiary.light", "tertiary.dark")}
                      fontSize="13px"
                    >
                      Password
                    </FormLabel>
                    <InputGroup size="md">
                      <Field
                        as={Input}
                        name="password"
                        type={showPass ? "text" : "password"}
                        placeholder="Input Password"
                        _placeholder={{ color: "darkgray", fontSize: "12px" }}
                        pr="4.5rem"
                      />
                      <InputRightElement width="4.5rem">
                        <IconButton
                          border="none"
                          bg="transparent"
                          _hover={{ bg: "transparent" }}
                          _focus={{ outline: 0 }}
                          icon={
                            <Image
                              src={
                                showPass
                                  ? icons.visibilityOff
                                  : icons.visibility
                              }
                            />
                          }
                          onClick={() => setShowPass(!showPass)}
                        />
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage fontSize="13px">
                      {errors.password}
                    </FormErrorMessage>
                  </FormControl>
                  <Divider />
                  <FormControl
                    my="1rem"
                    isInvalid={!!errors.new_password && touched.new_password}
                  >
                    <FormLabel
                      color={useColorModeValue("tertiary.light", "tertiary.dark")}
                      fontSize="13px"
                    >
                      New Password
                    </FormLabel>
                    <InputGroup size="md">
                      <Field
                        as={Input}
                        name="new_password"
                        type={showNewPass ? "text" : "password"}
                        placeholder="Input New Password"
                        _placeholder={{ color: "darkgray", fontSize: "12px" }}
                        pr="4.5rem"
                      />
                      <InputRightElement width="4.5rem">
                        <IconButton
                          border="none"
                          bg="transparent"
                          _hover={{ bg: "transparent" }}
                          _focus={{ outline: 0 }}
                          icon={
                            <Image
                              src={
                                showPass
                                  ? icons.visibilityOff
                                  : icons.visibility
                              }
                            />
                          }
                          onClick={() => setShowNewPass(!showNewPass)}
                        />
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage fontSize="13px">
                      {errors.new_password}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    my="1rem"
                    isInvalid={
                      !!errors.confirm_password && touched.confirm_password
                    }
                  >
                    <FormLabel
                      color={useColorModeValue("tertiary.light", "tertiary.dark")}
                      fontSize="13px"
                    >
                      Confirmation Password
                    </FormLabel>
                    <InputGroup size="md">
                      <Field
                        as={Input}
                        name="confirm_password"
                        type={showConfirmPass ? "text" : "password"}
                        placeholder="Input Confirmation Password"
                        _placeholder={{ color: "darkgray", fontSize: "12px" }}
                        pr="4.5rem"
                      />
                      <InputRightElement width="4.5rem">
                        <IconButton
                          border="none"
                          bg="transparent"
                          _hover={{ bg: "transparent" }}
                          _focus={{ outline: 0 }}
                          icon={
                            <Image
                              src={
                                showPass
                                  ? icons.visibilityOff
                                  : icons.visibility
                              }
                            />
                          }
                          onClick={() => setShowConfirmPass(showConfirmPass)}
                        />
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage fontSize="13px">
                      {errors.confirm_password}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
                <Button
                  type="submit"
                  w="100%"
                  mt="3rem"
                  variant="primary"
                  // isDisabled={isLoading}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
          <HStack justify="center" mt="1rem" mb="3rem">
            <ChakraLink as={ReactRouterLink} to='/'>
              Back to App
            </ChakraLink>
          </HStack>
        </Box>
      </VStack>
    </>
  );
};

export default ChangePassword;
