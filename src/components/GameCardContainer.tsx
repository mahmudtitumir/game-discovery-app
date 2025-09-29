import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const GameCardContainer = (props: Props) => {
    return (
        <Box width="100%" overflow="hidden" borderRadius={10}>
            {props.children}
        </Box>
    );
};

export default GameCardContainer;
