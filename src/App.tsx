import { useState } from 'react';
import {
    Box,
    Flex,
    Grid,
    GridItem,
    Show,
    useBreakpointValue,
} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

import './App.css';
import system from './theme';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';

import type { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import type { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
                    <Navbar
                        onSearch={searchText =>
                            setGameQuery({ ...gameQuery, searchText })
                        }
                    />
                </GridItem>
                <Show when={showAside}>
                    <GridItem area="aside" paddingX={5}>
                        <GenreList
                            selectedGenre={gameQuery.genre}
                            onSeletedGenre={genre =>
                                setGameQuery({ ...gameQuery, genre })
                            }
                        />
                    </GridItem>
                </Show>
                <GridItem area="main">
                    <Box paddingLeft={2}>
                        <GameHeading gameQuery={gameQuery} />
                        <Flex marginBottom={5}>
                            <Box marginRight={5}>
                                <PlatformSelector
                                    selectedPlatform={gameQuery.platform}
                                    onSelectPlatform={platform =>
                                        setGameQuery({ ...gameQuery, platform })
                                    }
                                />
                            </Box>
                            <SortSelector
                                sortOrder={gameQuery.sortOrder}
                                onSortOrder={sortOrder =>
                                    setGameQuery({ ...gameQuery, sortOrder })
                                }
                            />
                        </Flex>
                    </Box>
                    <GameGrid gameQuery={gameQuery} />
                </GridItem>
            </Grid>
        </ChakraProvider>
    );
}

export default App;
