import type { ReactNode } from 'react';
import { Box, Heading } from '@chakra-ui/react';

interface Props {
    term: string;
    children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
    return (
        <Box marginY={5}>
            <Heading as="dt" fontSize="md" color="gray.500">
                {term}
            </Heading>
            <Box as="dd">{children}</Box>
        </Box>
    );
};

export default DefinitionItem;
