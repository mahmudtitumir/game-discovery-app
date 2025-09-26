'use client';

import { ClientOnly, IconButton, Skeleton } from '@chakra-ui/react';
import { useColorMode } from '../components/ui/color-mode';
import { LuMoon, LuSun } from 'react-icons/lu';

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <ClientOnly fallback={<Skeleton boxSize="10" />}>
            <IconButton onClick={toggleColorMode} variant="outline" size="md">
                {colorMode === 'light' ? <LuSun /> : <LuMoon />}
            </IconButton>
        </ClientOnly>
    );
};

export default ColorModeSwitch;
