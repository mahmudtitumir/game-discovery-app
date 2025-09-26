import { Grid, GridItem, Text } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import system from './theme';

function App() {
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
                <GridItem area="nav" background={'blue.100'}>
                    <Navbar />
                </GridItem>
                <GridItem background={'blue.500'}>
                    <Text>sidebar</Text>
                </GridItem>
                <GridItem background={'blue.900'}>
                    <Text>main</Text>
                </GridItem>
            </Grid>
        </ChakraProvider>
    );
}

export default App;
