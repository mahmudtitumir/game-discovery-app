import { SimpleGrid, Text } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';

import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import type { GameQuery } from '../App';

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading, fetchNextPage, hasNextPage } =
        useGames(gameQuery);
    const skeletors = [1, 2, 3, 4, 5, 6, 7, 8];

    if (error) return <Text>{error.message}</Text>;

    const fetchedGamesCount =
        data?.pages.reduce((total, page) => total + page.results.length, 0) ||
        0;

    return (
        <InfiniteScroll
            dataLength={fetchedGamesCount}
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={<GameCardSkeleton />}
        >
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                gap={6}
                padding="10px"
            >
                {isLoading &&
                    !data &&
                    skeletors.map(skeletor => (
                        <GameCardContainer key={skeletor}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                {data?.pages.map(page =>
                    page.results.map(game => (
                        <GameCardContainer key={game.id}>
                            <GameCard game={game} />
                        </GameCardContainer>
                    ))
                )}
            </SimpleGrid>
        </InfiniteScroll>
    );
};

export default GameGrid;
