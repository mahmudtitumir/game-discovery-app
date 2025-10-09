import { Menu, Portal } from '@ark-ui/react';
import usePlatforms from '../hooks/usePlatforms';
import { Box, Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store';

const PlatformSelector = () => {
    const setPlaformId = useGameQueryStore(s => s.setPlaformId);
    const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
    const { data, error } = usePlatforms();
    const platform = usePlatform(selectedPlatformId);
    if (error) return null;
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" size="lg">
                    {platform?.name || 'Platforms'}
                    <BsChevronDown style={{ marginLeft: '8px' }} />
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {data?.results.map(item => (
                            <Menu.Item
                                key={item.id}
                                value={item.slug}
                                onClick={() => setPlaformId(item.id)}
                            >
                                <Box
                                    p="2"
                                    color="whiteAlpha.800"
                                    backgroundColor="blackAlpha.800"
                                >
                                    {item.name}
                                </Box>
                            </Menu.Item>
                        ))}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    );
};

export default PlatformSelector;
