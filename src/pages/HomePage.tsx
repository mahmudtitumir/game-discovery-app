import {
    ChakraProvider,
    Grid,
    GridItem,
    Show,
    Box,
    Flex,
    useBreakpointValue,
} from '@chakra-ui/react';
import { system } from '@chakra-ui/react/preset';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
    const showAside = useBreakpointValue({ base: false, lg: true });

    return (
        <ChakraProvider value={system}>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`,
                }}
                templateColumns={{
                    base: '1fr',
                    lg: '250px 1fr',
                }}
            >
                <Show when={showAside}>
                    <GridItem area="aside" paddingX={5}>
                        <GenreList />
                    </GridItem>
                </Show>
                <GridItem area="main">
                    <Box paddingLeft={2}>
                        <GameHeading />
                        <Flex marginBottom={5}>
                            <Box marginRight={5}>
                                <PlatformSelector />
                            </Box>
                            <SortSelector />
                        </Flex>
                    </Box>
                    <GameGrid />
                </GridItem>
            </Grid>
        </ChakraProvider>
    );
};

export default HomePage;
