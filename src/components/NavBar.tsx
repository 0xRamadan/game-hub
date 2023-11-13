import { HStack, Image, Box } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import { ColorModeSwitch } from './ColorModeSwitch'
import { SearchInput } from './SearchInput'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <HStack paddingX={{ base: 2, md: 5 }} paddingY={5}>
      <Link to="/">
        <Box w="60px">
          <Image src={logo} alt="logo" boxSize="60px" objectFit="cover" />
        </Box>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar