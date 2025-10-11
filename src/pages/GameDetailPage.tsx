import { Box, Heading, Spinner, Text } from '@chakra-ui/react';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';

import useGame from '../hooks/useGame';

const GameDetailPage = () => {
    const { slug } = useParams();
    const { data: game, isLoading, error } = useGame(slug!);
    if (isLoading) return <Spinner />;
    if (error || !game) throw error;
    return (
        <Box>
            <Heading>{game.name}</Heading>
            <Text>{parse(game.description)}</Text>
        </Box>
    );
};

export default GameDetailPage;
