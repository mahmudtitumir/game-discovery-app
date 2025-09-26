import { Grid, GridItem, Text } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import system from './theme';

function App() {
    return (
        <ChakraProvider value={system}>
            <Grid templateColumns="200px repeat(2, 1fr)" gap={4}>
                <GridItem colSpan={3} background={'blue.100'}>
                    <Navbar />
                </GridItem>
                <GridItem background={'blue.500'}>
                    <Text>sidebar</Text>
                </GridItem>
                <GridItem background={'blue.1900'}>
                    <Text>main</Text>
                </GridItem>
            </Grid>
        </ChakraProvider>
    );
}

export default App;
