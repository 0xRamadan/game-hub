import { Box } from '@chakra-ui/react'
import { Children } from 'react'

interface Props {
    children: React.ReactNode
}

const GameCardContainer = ({ children }: Props) => {
    return (
        <Box
            _hover={{
                transform: 'scale(1.03)',
                transition: 'transform .15s ease-in'
            }}
            borderRadius={10}
            // border="2px solid #777"
        >
            {children}
        </Box>
    )
}

export default GameCardContainer