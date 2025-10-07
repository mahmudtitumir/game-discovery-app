import {
    Box,
    ChakraProvider,
    Flex,
    Grid,
    GridItem,
    Show,
    useBreakpointValue,
} from '@chakra-ui/react';
import { useState } from 'react';

import './App.css';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import Navbar from './components/Navbar';
import system from './theme';

import GameHeading from './components/GameHeading';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder: string;
    searchText: string;
    pageSize: 20;
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
                            selectedGenreId={gameQuery.genreId}
                            onSeletedGenre={genre =>
                                setGameQuery({
                                    ...gameQuery,
                                    genreId: genre.id,
                                })
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
                                    selectedPlatformId={gameQuery.platformId}
                                    onSelectPlatform={platform =>
                                        setGameQuery({
                                            ...gameQuery,
                                            platformId: platform.id,
                                        })
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
