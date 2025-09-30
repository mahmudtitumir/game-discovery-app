import { Menu, Box } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
    onSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({ onSortOrder, sortOrder }: Props) => {
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
                    Order by: {currentSortOrder?.label || 'Relevance'}
                    <BsChevronDown style={{ marginLeft: '8px' }} />
                </Box>
            </Menu.Trigger>
            <Menu.Content>
                {sortOrders.map(orderItem => (
                    <Menu.Item
                        key={orderItem.value}
                        value={orderItem.value}
                        onClick={() => onSortOrder(orderItem.value)}
                    >
                        {orderItem.label}
                    </Menu.Item>
                ))}
            </Menu.Content>
        </Menu.Root>
    );
};

export default SortSelector;
