import { Box, Text } from "@chakra-ui/react"

const Toast = ({ title, status }) => {
  return (
    <Box
      color="white"
      bg={status ==="success" ? "success" : "danger"}
      borderRadius="md"
      shadow="md"
      p={3}
    >
      <Text fontSize="14px">
        {title}
      </Text>
    </Box>
  )
}

export default Toast