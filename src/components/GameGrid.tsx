import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";


const GameGrid = () => {

    /* 
        we created a custom hook to fetch the games, now
        the GameGrid component is only responsible for rendering the markup and
        doesn't know anything about the data fetching.
    */
    const { games, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding='10px' spacing={10}>
                {isLoading && skeletons.map(skeleton =>
                    <GameCardContainer>
                        <GameCardSkeleton key={skeleton} />
                    </GameCardContainer>
                )}
                {games.map(game => (
                    <GameCardContainer>
                        <GameCard key={game.id} game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    )
};

export default GameGrid;
