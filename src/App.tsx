import { Grid, GridItem } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import system from './theme';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';

function App() {
    return (
        <ChakraProvider value={system}>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`,
                }}
                templateColumns={{
                    lg: '250px 1fr',
                }}
            >
                <GridItem area="nav">
                    <Navbar />
                </GridItem>
                <GridItem area="aside" paddingX={5}>
                    <GenreList />
                </GridItem>
                <GridItem area="main">
                    <GameGrid />
                </GridItem>
            </Grid>
        </ChakraProvider>
    );
}

export default App;
