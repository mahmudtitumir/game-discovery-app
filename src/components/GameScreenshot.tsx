import { GridItem, Image, SimpleGrid } from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenshots';

interface Props {
    gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
    const { data: shots, error, isLoading } = useScreenshots(gameId);
    if (isLoading) return null;
    if (error) throw error;
    return (
        <SimpleGrid
            templateColumns={{
                base: '1fr',
                lg: '1fr 1fr',
            }}
            gap={4}
        >
            {shots?.results.map(shot => (
                <GridItem>
                    <Image key={shot.id} src={shot.image} />
                </GridItem>
            ))}
        </SimpleGrid>
    );
};

export default GameScreenshot;
