import './App.css';
import { Grid, GridItem, Text } from '@chakra-ui/react';

function App() {
    return (
        <>
            <Grid templateColumns="200px repeat(2, 1fr)" gap={4}>
                <GridItem colSpan={3} background={'blue.100'}>
                    <Text>header</Text>
                </GridItem>
                <GridItem background={'blue.500'}>
                    <Text>sidebar</Text>
                </GridItem>
                <GridItem background={'blue.1900'}>
                    <Text>main</Text>
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
