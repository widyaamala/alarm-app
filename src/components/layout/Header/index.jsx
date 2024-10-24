import {
  HStack,
  Text,
  IconButton,
  Image,
  useColorModeValue
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import useIcons from "../../../assets/icons";
import capitalizeFirstLetter from "../../../utils/Helper";

const Header = () => {
  const icons = useIcons()
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const title = capitalizeFirstLetter(pathname.split("/")[1] || 'Alarm');

  return (
    <HStack
      px="5"
      w="100%"
      h="8vh"
      position="sticky"
      top="0"
      justifyContent="space-between"
      zIndex="999"
      // sx={{ boxShadow: '0px 8px 20px -4px #1C37BE1A' }}
    >
      <Text textStyle="bold" fontSize="large" color={useColorModeValue('main.light', 'main.dark')}>
        {title}
      </Text>
      <Image src={useColorModeValue('logo.png', 'logo-dark.png')} h="2.5em" />
      <IconButton
        size="sm"
        variant="ghost"
        colorScheme={useColorModeValue('main.light', 'main.dark')}
        icon={<Image src={icons.moreVert} h="1.3em" />} 
        onClick={() => navigate('/setting')}
      />
    </HStack>
  );
};

export default Header;
