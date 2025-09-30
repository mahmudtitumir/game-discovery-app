import { Menu } from '@ark-ui/react';
import usePlatforms from '../hooks/usePlatforms';
import { Box } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import type { Platform } from '../hooks/useGames';

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data, error } = usePlatforms();
    if (error) return null;
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Box
                    as="button"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="space-between"
                    px={4}
                    py={2}
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="md"
                    cursor="pointer"
                    _hover={{ bg: 'gray.200' }}
                    _focus={{ outline: '2px solid', outlineColor: 'blue.500' }}
                >
                    {selectedPlatform?.name || 'Platforms'}
                    <BsChevronDown style={{ marginLeft: '8px' }} />
                </Box>
            </Menu.Trigger>
            <Menu.Content>
                {data.map(item => (
                    <Menu.Item
                        key={item.id}
                        value={item.slug}
                        onClick={() => onSelectPlatform(item)}
                    >
                        {item.name}
                    </Menu.Item>
                ))}
            </Menu.Content>
        </Menu.Root>
    );
};

export default PlatformSelector;
