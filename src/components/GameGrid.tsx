import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";


const GameGrid = () => {

    /* 
        we created a custom hook to fetch the games, now
        the GameGrid component is only responsible for rendering the markup and
        doesn't know anything about the data fetching.
    */
    const { games, error } = useGames();

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' spacing={10}>
                {games.map(game => (
                    <GameCard key={game.id} game={game}/>
                ))}
            </SimpleGrid>
        </>
    )
};

export default GameGrid;
