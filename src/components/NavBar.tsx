import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import { ColorModeSwitch } from './ColorModeSwitch'
import { SearchInput } from './SearchInput'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <HStack paddingX={{ md: '15px', lg: '20px' }} paddingTop={{md: '15px', lg: '20px'}} marginY={{ base: 2, md: 0 }} marginX={{ base: 2, md: 0 }}>
      <Link to="/">
        <Image src={logo} alt="logo" boxSize='60px' objectFit='cover' />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar