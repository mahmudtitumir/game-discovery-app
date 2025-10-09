import { Menu, Button, Portal } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SortSelector = () => {
    const setSortOrder = useGameQueryStore(s => s.setSortOrder);
    const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' },
    ];
    const currentSortOrder = sortOrders.find(
        order => order.value === sortOrder
    );
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" size="lg">
                    Order by: {currentSortOrder?.label || 'Relevance'}
                    <BsChevronDown style={{ marginLeft: '8px' }} />
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {sortOrders.map(orderItem => (
                            <Menu.Item
                                key={orderItem.value}
                                value={orderItem.value}
                                onClick={() => setSortOrder(orderItem.value)}
                            >
                                {orderItem.label}
                            </Menu.Item>
                        ))}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    );
};

export default SortSelector;
