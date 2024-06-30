import { Tabs, TabList, Tab, Box, HStack, Text } from "@chakra-ui/react"
import { useNavigate, useLocation } from "react-router-dom"
import { footerTab } from "../../../utils/Constants"

const Footer = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const activeTab = footerTab?.findIndex((footer) => footer.url === pathname)

  return (
    <Box mt='auto' w='100%' px='5'>
      <Tabs variant='line' defaultIndex={activeTab}>
        <TabList w='100%'>
          {footerTab?.map((item) => {
            const IconComponent = item.icon
            return (
              <Tab w='100%' p='1' onClick={() => navigate(item.url)}>
                <HStack alignItems='center'>
                  <IconComponent fontSize='small' />
                  <Text>{item.tab}</Text>
                </HStack>
              </Tab>
            )
          })}
        </TabList>
      </Tabs>
    </Box>
  )
}

export default Footer