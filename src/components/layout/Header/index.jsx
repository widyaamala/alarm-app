import { HStack, Text, IconButton , Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import capitalizeFirstLetter from "../../../utils/Helper"

const Header = () => {
  const { pathname } = useLocation()
  const title = capitalizeFirstLetter(pathname.split('/')[1])

  return (
    <HStack px='5' w='100%' h='10vh' position='sticky' top='0' justifyContent='space-between' zIndex='999'>
      <Text textStyle='bold' fontSize='large'>
        {title}
      </Text>
      <Menu isLazy>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<MoreVertIcon />}
          variant='unstyled'
          w='auto'
          minW='0'
        />
        <MenuList>
          <MenuItem>
            Profile
          </MenuItem>
          <MenuItem>
            Setting
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  )
}

export default Header