import React from 'react'
import useScreenShots from '../hooks/useScreenshots'
import { Heading, Image, SimpleGrid } from '@chakra-ui/react'

interface Props {
    gameId: number;
}

const GameScreenshots = ({gameId}: Props) => {
    const {data, isLoading, error} = useScreenShots(gameId)

    if(isLoading) return null

    if(error) throw error

    return (
        <>
        <Heading fontSize="2xl" paddingBottom={4} color="gray.600">Screenshots</Heading>
        <SimpleGrid columns={{base: 1, md: 2}} spacing={4}>
            {data?.results.map(file => <Image key={file.id} src={file.image} borderRadius={4}/>)}
        </SimpleGrid>
        </>
    )
}

export default GameScreenshots