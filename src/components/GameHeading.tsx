import { Heading } from '@chakra-ui/react';
import type { GameQuery } from '../App';
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    const platform = usePlatform(gameQuery.platformId);
    const genre = useGenre(gameQuery.genreId);
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
    return (
        <Heading as="h1" marginY={5} size="3xl">
            {heading}
        </Heading>
    );
};

export default GameHeading;
