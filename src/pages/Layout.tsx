import { Outlet } from 'react-router-dom';
import { GridItem } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const Layout = () => {
    return (
        <>
            <GridItem area="nav">
                <Navbar />
            </GridItem>
            <Outlet />
        </>
    );
};

export default Layout;
