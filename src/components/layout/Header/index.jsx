import {
  HStack,
  Text,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { MoreVertIcon } from "../../../assets/icons";
import capitalizeFirstLetter from "../../../utils/Helper";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const title = capitalizeFirstLetter(pathname.split("/")[1]);

  return (
    <HStack
      px="5"
      pt="3"
      w="100%"
      h="8vh"
      position="sticky"
      top="0"
      justifyContent="space-between"
      zIndex="999"
      // sx={{ boxShadow: '0px 8px 20px -4px #1C37BE1A' }}
    >
      <Text textStyle="bold" fontSize="large">
        {title}
      </Text>
      <Menu isLazy>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<Image src={MoreVertIcon} h="1.3em" />}
          variant="unstyled"
          w="auto"
          minW="0"
        />
        <MenuList>
          <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
          <MenuItem>Setting</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default Header;
