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
import type { Platform } from './hooks/useGames';

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
                        selectedGenre={gameQuery.genre}
                        onSeletedGenre={genre =>
                            setGameQuery({ ...gameQuery, genre })
                        }
                    />
                </GridItem>
                <GridItem area="main">
                    <PlatformSelector
                        selectedPlatform={gameQuery.platform}
                        onSelectPlatform={platform =>
                            setGameQuery({ ...gameQuery, platform })
                        }
                    />
                    <GameGrid gameQuery={gameQuery} />
                </GridItem>
            </Grid>
        </ChakraProvider>
    );
}

export default App;
