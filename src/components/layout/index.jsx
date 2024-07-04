import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { VStack } from "@chakra-ui/react"
import { Howler } from "howler"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
  const location = useLocation()

  useEffect(() => {
    return () => {
      Howler.stop()
    };
  }, [location])

  return (
    <VStack w='100vw' h='100vh' bg='#ecedf78f' overflowY='hidden'>
      <Header />
      <VStack id='wrapper-content' w="100%" h='80vh' px="5" overflowY='auto'>
        <Outlet />
      </VStack>
      <Footer />
    </VStack>
  )
}

export default Layout