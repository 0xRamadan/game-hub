import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres';
import { Box, Button, Center, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (isLoading) return <Spinner />
    if (error) return <Center h='25%'><Text>Something went wrong.</Text></Center>

    return (
        <Box marginTop={10} marginLeft={2}>
            <Heading fontSize='2xl' marginBottom={5}>Genres</Heading>
            <List>
                {data?.results.map((genre) =>
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image
                                boxSize='32px'
                                borderRadius={8}
                                objectFit='cover'
                                src={getCroppedImageUrl(genre.image_background)}
                                alt={genre.name} />
                            <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} variant='link' fontSize='lg '>{genre.name}</Button>
                        </HStack>
                    </ListItem>)}
            </List>
        </Box>
    )
}

export default GenreList