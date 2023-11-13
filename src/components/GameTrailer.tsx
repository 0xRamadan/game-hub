import { Heading, Skeleton, Spinner, Text } from "@chakra-ui/react";
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
        <>
            <Heading fontSize="md" marginY={2} >Trailer</Heading>
            {first ?
                <Skeleton borderRadius={5} isLoaded={!isLoading}>
                    <video src={first.data[480]} poster={first.preview} controls />
                </Skeleton>
                : <Text>There is no trailer for this game By this API.</Text>}
        </>
    )
}

export default GameTrailer