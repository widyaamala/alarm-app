import { useState, useEffect } from "react"
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  useToast
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { Field, Formik, Form } from "formik"
import * as yup from "yup"
import { getUser } from "../../utils/User"
import { Visibility, VisibilityOff } from "../../assets/icons"
import useServiceMutate from "../../services/mutations"
import Toast from "../../components/commons/Toast"

const Login = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const [show, setShow] = useState(false)
  
  const handleClick = () => setShow(!show)

  useEffect(() => {
    if (getUser()) {
      navigate(`/alarm`)
    }
  }, [])

  const validationSchema = yup.object({
    email: yup
      .string("Input email")
      .required("Email cannot be empty")
      .email("Invalid email format")
      .matches(/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/, "Invalid email format"),
    password: yup.string("Input password").required("Password cannot be empty"),
  })

  const { mutate, isLoading } = useServiceMutate.login()

  return (
    <>
      <VStack justify='center' alignItems='center' w='100vw' h='100vh' bg='layout' px="10">
        <Box mt='2rem' w="100%">
          <Heading textStyle="bold">
            Login
          </Heading>
          <Text align='left' mt='0.2rem' textStyle="light" color="darkgray" fontSize="14px">
            Input your email and password
          </Text>
        </Box>
        <Box w="100%">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              let convertData = {
                email: values?.email,
              }
              localStorage.setItem("usdm", JSON.stringify(convertData ?? ""))

              setTimeout(() => {
                toast({
                  position: 'top-right',
                  isClosable: true,
                  render: () => <Toast title="Successfully Login!" status="success" />,
                })
                navigate('/alarm')
              }, 3000)
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Box m='2.5rem 0 3rem 0'>
                  <FormControl my='1.5rem' isInvalid={!!errors.email && touched.email}>
                    <FormLabel color="primary" fontSize="13px">
                      Email
                    </FormLabel>
                    <Field
                      as={Input}
                      name='email'
                      type='string'
                      placeholder='Input Email'
                      _placeholder={{ color: "darkgray", fontSize: "12px" }}
                    />
                    <FormErrorMessage fontSize="13px">{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl my='1.5rem' isInvalid={!!errors.password && touched.password}>
                    <FormLabel color="primary" fontSize="13px">
                      Password
                    </FormLabel>
                    <InputGroup size='md'>
                      <Field
                        as={Input}
                        name='password'
                        type={show ? "text" : "password"}
                        placeholder='Input Password'
                        _placeholder={{ color: "darkgray", fontSize: "12px" }}
                        pr='4.5rem'
                      />
                      <InputRightElement width='4.5rem'>
                        <IconButton
                          border='none'
                          bg='transparent'
                          _hover={{ bg: "transparent" }}
                          _focus={{ outline: 0 }}
                          icon={<Image src={show ? VisibilityOff : Visibility} />}
                          onClick={handleClick}
                        />
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage fontSize="13px">{errors.password}</FormErrorMessage>
                  </FormControl>
                </Box>
                <Button
                  type='submit'
                  w='100%'
                  mt='1rem'
                  mb='3rem'
                  variant="primary"
                  isDisabled={isLoading}
                >
                  <Text>Login</Text>
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </VStack>
    </>
  )
}

export default Login