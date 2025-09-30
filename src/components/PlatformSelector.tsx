import { Menu } from '@ark-ui/react';
import usePlatforms from '../hooks/usePlatforms';
import { Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const PlatformSelector = () => {
    const { data, error } = usePlatforms();
    if (error) return null;
    return (
        <Menu.Root>
            <Menu.Trigger>
                <Button>
                    Platforms <BsChevronDown />
                </Button>
            </Menu.Trigger>
            <Menu.Content>
                {data.map(item => (
                    <Menu.Item key={item.id} value={item.slug}>
                        {item.name}
                    </Menu.Item>
                ))}
            </Menu.Content>
        </Menu.Root>
    );
};

export default PlatformSelector;
