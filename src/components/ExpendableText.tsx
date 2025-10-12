import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
    children: string;
    maxChar?: number;
}

function ExpendableText({ children, maxChar = 300 }: Props) {
    const [isExpand, setIsExpand] = useState(false);
    if (children.length <= maxChar) return <p>{children}</p>;
    const text = isExpand ? children : children.substring(0, maxChar) + '....';
    const handleExpanded = () => setIsExpand(!isExpand);
    if (!children) return null;
    return (
        <Text>
            {text}
            <Button
                size="xs"
                fontSize="md"
                marginLeft={2}
                fontWeight="bold"
                colorPalette="yellow"
                onClick={handleExpanded}
            >
                {isExpand ? 'Show Less' : 'Show More'}
            </Button>
        </Text>
    );
}
export default ExpendableText;
