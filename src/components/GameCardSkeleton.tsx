import { Card, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
    return (
        <Card.Root>
            <Skeleton />
            <Card.Body gap="2">
                <Skeleton height="5" />
                <SkeletonText noOfLines={3} gap="4" />
            </Card.Body>
        </Card.Root>
    );
};

export default GameCardSkeleton;
