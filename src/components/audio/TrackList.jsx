import { HStack, Image, List, ListItem, Text, VStack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import useIcons from "../../assets/icons";

const TrackList = ({
  trackList,
  toggleTrack,
  isPlaying,
  selectedMusic
}) => {
  const { colorMode } = useColorMode()
  const icons = useIcons()

  return (
    <List w="100%" mb="6.5rem">
      {trackList.map((track, index) => (
        <>
        <ListItem key={track.id} my="4">
          <HStack
            alignItems="center"
            px="4"
            py="2"
            borderRadius="12px"
            bg={useColorModeValue('mutedBase.light', 'mutedBase.dark')}
            sx={{ boxShadow: colorMode === 'light' ? '0px 8px 20px -4px #e5e5e5' : 'none' }}
          >
            <Image
              alt="icon player"
              src={
                selectedMusic && selectedMusic.id === track.id && isPlaying
                  ? icons.pauseCircle
                  : icons.playCircle
              }
              onClick={() => toggleTrack(track, index)}
              w="1.3em"
              h="1.3em"
              mr="2"
            />
            <Image
              src={track.imageUrl}
              alt={`${track.title} artwork`}
              boxSize="16"
              borderRadius="10"
            />
            <VStack px="2" align="start" gap="0">
              <Text
                textStyle="semi"
                fontSize="14px"
                color={
                  selectedMusic && selectedMusic.id === track.id && isPlaying
                    ? useColorModeValue('primary.light', 'primary.dark')
                    : useColorModeValue('main.light', 'main.dark')
                }
              >
                {track.title}
              </Text>
              <Text textStyle="light" fontSize="13px" color="main">
                {track.artist}
              </Text>
            </VStack>
            <Text
              textStyle="light"
              fontSize="13px"
              textAlign="right"
              ml="auto"
            >
              {track.duration}
            </Text>
          </HStack>
        </ListItem>
        </>
      ))}
    </List>
  );
}

export default TrackList 
