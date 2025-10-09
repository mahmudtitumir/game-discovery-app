import {
    Box,
    ChakraProvider,
    Flex,
    Grid,
    GridItem,
    Show,
    useBreakpointValue,
} from '@chakra-ui/react';

import './App.css';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import Navbar from './components/Navbar';
import system from './theme';
import GameHeading from './components/GameHeading';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';

function App() {
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
                <GridItem area="nav">
                    <Navbar />
                </GridItem>
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
}

export default App;
