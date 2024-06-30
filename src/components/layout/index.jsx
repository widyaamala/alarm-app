import { Outlet } from "react-router-dom"
import { VStack } from "@chakra-ui/react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
  return (
    <VStack w='100vw' h='100vh' bg='#fafafa' overflowY='hidden'>
      <Header />
      <VStack id='wrapper-content' w="100%" h='80vh' px="5" overflowY='auto'>
        <Outlet />
      </VStack>
      <Footer />
    </VStack>
  )
}

export default Layout