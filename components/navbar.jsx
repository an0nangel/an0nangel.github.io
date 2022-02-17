import { Flex, Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Link from './navbar/link.jsx'
import NextLink from 'next/link'

export default function Home() {
  return (
      <header>
        <Flex justify="space-around" bg="rgb(44, 42, 47)" color="white" position="sticky" minHeight="3.2rem" align="center">

          <Link href="/" title="Missions" />
          <Link href="/" title="About" />
          <Link href="/login" title="Log In" />

          <Button size="md" colorScheme="red" h={9} rightIcon={<ArrowForwardIcon />}>
            <NextLink href="/signup">
              <em style={{textAlign: 'center', fontSize: '1.5rem'}}>Get Started</em>
            </NextLink>
          </Button>
        </Flex>
      </header>
  )
}
