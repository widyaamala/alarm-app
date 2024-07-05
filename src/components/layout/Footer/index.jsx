import { Tabs, TabList, Tab, Box, VStack, Text, Image } from "@chakra-ui/react"
import { useNavigate, useLocation } from "react-router-dom"
import { footerTab } from "../../../utils/Constants"

const Footer = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const activeTab = footerTab?.findIndex((footer) => footer.url === pathname)

  return (
    <Box mt='auto' w='100%' bg='white' pt='2' boxShadow='2px -10px 20px -15px #ecedf78f'>
      <Tabs variant='unstyled' defaultIndex={activeTab}>
        <TabList w='100%'>
          {footerTab?.map((item, index) => (
            <Tab w='100%' p='1' onClick={() => navigate(item.url)} key={index}>
              <VStack alignItems='center' gap="0.2rem">
                <Image
                  src={pathname?.includes(item.url) ? item?.iconActive : item?.icon }
                  h="1.3em"
                  w="1.3em"
                />
                <Text
                  color={pathname?.includes(item.url) ? 'primary' : 'muted'}
                  fontSize="12px"
                >
                  {item.tab}
                </Text>
              </VStack>
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Box>
  )
}

export default Footer