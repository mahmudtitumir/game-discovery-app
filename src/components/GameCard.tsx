import { Card, Image, Text } from '@chakra-ui/react';
import type { Game } from '../hooks/useUsers';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card.Root maxW="sm" overflow="hidden">
            <Image src={game.background_image} />
            <Card.Body gap="2">
                <Card.Title>{game.name}</Card.Title>
                <Card.Description>
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces.
                </Card.Description>
                <Text
                    textStyle="2xl"
                    fontWeight="medium"
                    letterSpacing="tight"
                    mt="2"
                >
                    $450
                </Text>
            </Card.Body>
        </Card.Root>
    );
};

export default GameCard;
