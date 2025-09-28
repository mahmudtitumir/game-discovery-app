import { SimpleGrid, Text } from '@chakra-ui/react';
import useUsers from '../hooks/useUsers';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
    const { games, error, isLoading } = useUsers();
    const skeletors = [1, 2, 3, 4, 5, 6];
    if (error) return <Text>{error}</Text>;
    return (
        <>
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                padding="10px"
                gap={6}
            >
                {isLoading &&
                    skeletors.map(skeletor => (
                        <GameCardContainer>
                            <GameCardSkeleton key={skeletor} />
                        </GameCardContainer>
                    ))}
                {games.map(game => (
                    <GameCardContainer>
                        <GameCard key={game.id} game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
