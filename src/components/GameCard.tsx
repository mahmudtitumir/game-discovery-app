import { Card, HStack, Image } from '@chakra-ui/react';
import type { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card.Root>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <Card.Body gap="2">
                <Card.Title>{game.name}</Card.Title>
                <Card.Description>
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces.
                </Card.Description>
                <HStack justifyContent="space-between">
                    <PlatformIconList
                        platforms={game.parent_platforms.map(p => p.platform)}
                    />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </Card.Body>
        </Card.Root>
    );
};

export default GameCard;
