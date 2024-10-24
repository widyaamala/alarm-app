import { Tabs, TabList, Tab, Box, VStack, Text, Image, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { useNavigate, useLocation } from "react-router-dom"
import { footerTab } from "../../../utils/Constants"
import useIcons from "../../../assets/icons"

const Footer = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { colorMode } = useColorMode()
  const activeTab = footerTab?.findIndex((footer) => footer.url === pathname)

  return (
    <Box mt='auto' w='100%' bg={useColorModeValue('background.light', 'background.dark')} pt='2'>
      <Tabs variant='unstyled' defaultIndex={activeTab}>
        <TabList w='100%'>
          {footerTab?.map((item, index) => {
            const icons = useIcons()

            return (
              <Tab w='100%' p='1' onClick={() => navigate(item.url)} key={index}>
                <VStack alignItems='center' gap="0.2rem">
                  <Image
                    src={footerTab[activeTab]?.url === item.url ? icons[item?.iconActive] : icons[item?.icon] }
                    h="1.3em"
                    w="1.3em"
                  />
                  <Text
                    color={
                      footerTab[activeTab]?.url === item.url
                        ? colorMode === 'dark' ? 'white' : 'primary.light'
                        : useColorModeValue('muted.light', 'muted.dark')}
                    fontSize="12px"
                  >
                    {item.tab}
                  </Text>
                </VStack>
              </Tab>
            )
          })}
        </TabList>
      </Tabs>
    </Box>
  )
}

export default Footer