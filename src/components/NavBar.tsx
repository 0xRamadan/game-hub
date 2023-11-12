import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import { ColorModeSwitch } from './ColorModeSwitch'
import { SearchInput } from './SearchInput'

const NavBar = () => {
  return (
    <HStack padding={{ sm: '12px', md: '15px', lg: '20px' }}>
      <Image src={logo} alt="logo" boxSize='60px' />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar