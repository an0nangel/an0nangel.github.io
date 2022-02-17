import { Flex, Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import Navbar from '../components/navbar.jsx'

export default function Signup() {
  return(
    <>
    <Navbar />
    <br/><br/>
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Sign Up</Heading>
        </Box>
        <Box my={4} textAlign="left" mt={100}>
        <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
          <form>

            <FormControl mt={6}>
              <FormLabel>First Name</FormLabel>
              <Input type="name" placeholder="John" />
            </FormControl>

            <FormControl mt={6}>
              <FormLabel>Last Name</FormLabel>
              <Input type="name" placeholder="Doe" />
            </FormControl>

            <FormControl mt={6}>
              <FormLabel>Username</FormLabel>
              <Input type="username" placeholder="Doe" />
            </FormControl>

            <FormControl mt={6}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="johndoe@mail.com" />
            </FormControl>

            <FormControl mt={6}>
              <FormLabel>Confirm Email</FormLabel>
              <Input type="email" placeholder="johndoe@mail.com" />
            </FormControl>

            <FormControl mt={6}>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="*******" />
            </FormControl>

            <FormControl mt={6}>
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" placeholder="*******" />
            </FormControl>

            <Button width="full" mt={4} type="button">
              Connect Metamask
            </Button>
            <Button width="full" mt={4} type="submit">
              Log In
            </Button>
          </form>
          </Box>
        </Box>
      </Box>
    </Flex>
    </>
  )
}
