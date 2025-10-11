import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const GameCardContainer = (props: Props) => {
    return (
        <Box
            width="100%"
            overflow="hidden"
            borderRadius={10}
            _hover={{
                transform: 'scale(1.04)',
                transition: 'transform 0.16s ease-in',
            }}
        >
            {props.children}
        </Box>
    );
};

export default GameCardContainer;
