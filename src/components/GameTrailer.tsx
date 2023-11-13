import { Box, Heading, Skeleton, Spinner, Text } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
    gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {

    const { data, isLoading, error } = useTrailers(gameId)

    if (isLoading) return null

    if (error) throw error

    const first = data?.results[0]

    return (
        <Box marginBottom={4}>
            <Heading fontSize="2xl" marginY={2} color="gray.600">Trailer</Heading>
            {first ?
                <Skeleton borderRadius={5} isLoaded={!isLoading}>
                    <video src={first.data[480]} poster={first.preview} controls />
                </Skeleton>
                : <Text>There is no trailer for this game By this API.</Text>}
        </Box>
    )
}

export default GameTrailer