import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { VStack, useColorModeValue } from "@chakra-ui/react"
import { Howler } from "howler"
import Header from "./Header"
import Footer from "./Footer"
import { App } from '@capacitor/app';
import { LocalNotifications } from '@capacitor/local-notifications';


const Layout = () => {
  const location = useLocation()

  useEffect(() => {
    App.addListener('appStateChange', async ({ isActive }) => {
      console.log('App state changed. Is active?', isActive);
      if(isActive) {
        const permissions = await LocalNotifications.requestPermissions();
        if (permissions.display !== 'granted') return
      }
    });
    
    return () => {
      Howler.stop()
    };
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