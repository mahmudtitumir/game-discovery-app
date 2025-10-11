import { Outlet } from 'react-router-dom';
import { Box, GridItem } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const Layout = () => {
    return (
        <>
            <GridItem area="nav">
                <Navbar />
            </GridItem>
            <Box padding={5}>
                <Outlet />
            </Box>
        </>
    );
};

export default Layout;
