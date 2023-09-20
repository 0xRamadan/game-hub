import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres';
import { Button, Center, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
interface Props{
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre}: Props) => {
    const { data, isLoading, error } = useGenres();

    if (isLoading) return <Spinner/>
    if (error) return <Center h='25%'><Text>Something went wrong.</Text></Center>

    return (
        <List>
            {data.map((genre) =>
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image
                            boxSize='32px'
                            borderRadius={8}
                            src={getCroppedImageUrl(genre.image_background)}
                            alt={genre.name} />
                        <Button fontWeight={genre.id === selectedGenre?.id? 'bold': 'normal'} onClick={()=> onSelectGenre(genre)}  variant='link' fontSize='lg '>{genre.name}</Button>
                    </HStack>
                </ListItem>)}
        </List>
    )
}

export default GenreList