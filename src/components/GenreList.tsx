import { Box, Button, Center, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

const GenreList = () => {
    const { data, isLoading, error } = useGenres();
    const selectedGenreId = useGameQueryStore(s=>s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore(s=>s.setGenreId);

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
                            <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'} onClick={() => setSelectedGenreId(genre.id)} variant='link' fontSize='lg '>{genre.name}</Button>
                        </HStack>
                    </ListItem>)}
            </List>
        </Box>
    )
}

export default GenreList