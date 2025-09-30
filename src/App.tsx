import { useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

import './App.css';
import system from './theme';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';

import type { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

    return (
        <ChakraProvider value={system}>
            <Grid
                templateAreas={{
                    // base: `"nav" "main"`,
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
                    <GenreList
                        selectedGenre={selectedGenre}
                        onSeletedGenre={genre => setSelectedGenre(genre)}
                    />
                </GridItem>
                <GridItem area="main">
                    <PlatformSelector />
                    <GameGrid selectedGenre={selectedGenre} />
                </GridItem>
            </Grid>
        </ChakraProvider>
    );
}

export default App;
