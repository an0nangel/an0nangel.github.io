import { Flex, Box, Button } from '@chakra-ui/react'

export default function Contentbar() {
  return (
    <Flex w="100%" align="center" justify="center">
      <Box w="70%" bg="rgb(240, 240, 251)" __css={{ borderRadius: '1rem' }}>
        <Flex justify="space-around" align="center" h="4rem">
          <Button size='sm'><a href="#">Work</a></Button>
          <Button size='sm'><a href="#">Grind</a></Button>
          <Button size='sm'><a href="#">Secure</a></Button>
          <Button size='sm'><a href="#">Collaborate</a></Button>
          <Button size='sm'><a href="#">Hire</a></Button>
        </Flex>
      </Box>
    </Flex>


  )
}
