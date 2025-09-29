import { HStack, Image, Text, List, Spinner } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
    const { genres, error, isLoading } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner size={'md'} />;

    return (
        <List.Root listStyle="none">
            {genres.map(genre => (
                <List.Item key={genre.id} paddingY="5px">
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius="6px"
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Text>{genre.name}</Text>
                    </HStack>
                </List.Item>
            ))}
        </List.Root>
    );
};

export default GenreList;
