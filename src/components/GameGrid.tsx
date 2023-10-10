import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import { Fragment } from "react";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {

    /* 
        we created a custom hook to fetch the games, now
        the GameGrid component is only responsible for rendering the markup and
        doesn't know anything about the data fetching.
    */
    const { data, error, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    if (error) return <Text>{error.message}</Text>

    return (
        <Box padding='10px'>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
                {isLoading && skeletons.map(skeleton =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                )}
                {data?.pages.map((page, index) => (
                    <Fragment key={index}>
                        {page?.results.map(game => (
                            <GameCardContainer key={game.id}>
                                <GameCard game={game} />
                            </GameCardContainer>
                        ))}
                    </Fragment>
                ))}
            </SimpleGrid>
            {
                hasNextPage && <Button onClick={() => fetchNextPage()} marginY={5}>
                    {isFetchingNextPage ? 'Loading more...' : 'Load more'}
                </Button>
            }
        </Box>
    )
};

export default GameGrid;
