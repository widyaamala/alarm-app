import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { VStack, useColorModeValue } from "@chakra-ui/react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
  const location = useLocation()

  useEffect(() => {
    
  }, [location])

  return (
    <VStack w='100vw' h='100vh' gap='0' bg={useColorModeValue('background.light', 'background.dark')} overflowY='hidden'>
      <Header />
      <VStack id='wrapper-content' w="100%" h='90vh' py="2" px="5" overflowY='auto'>
        <Outlet />
      </VStack>
      <Footer />
    </VStack>
  )
}

export default Layout