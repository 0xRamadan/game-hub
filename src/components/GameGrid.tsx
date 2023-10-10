import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {

    /* 
        created a custom hook to fetch the games, now
        the GameGrid component is only responsible for rendering the markup and
        doesn't know anything about the data fetching.
    */
    const { data, error, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    if (error) return <Text>{error.message}</Text>

    const fetchedGamesCount = data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

    return (
        <InfiniteScroll 
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner marginY={5}/>}
        >
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
        </InfiniteScroll>
    )
};

export default GameGrid;
