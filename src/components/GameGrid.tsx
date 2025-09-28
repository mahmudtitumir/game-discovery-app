import { SimpleGrid, Text } from '@chakra-ui/react';
import useUsers from '../hooks/useUsers';
import GameCard from './GameCard';

const GameGrid = () => {
    const { games, error } = useUsers();
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                padding="10px"
                gap={6}
            >
                {games.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
