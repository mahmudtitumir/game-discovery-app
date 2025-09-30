import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import type { Genre } from '../hooks/useGenres';

interface Props {
    selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
    const { data, error, isLoading } = useGames(selectedGenre);
    const skeletors = [1, 2, 3, 4, 5, 6, 7, 8];
    if (error) return <Text>{error}</Text>;
    return (
        <>
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                padding="10px"
                gap={3}
            >
                {isLoading &&
                    skeletors.map(skeletor => (
                        <GameCardContainer key={skeletor}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                {data.map(game => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
