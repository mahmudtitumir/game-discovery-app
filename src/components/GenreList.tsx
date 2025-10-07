import {
    HStack,
    Image,
    List,
    Spinner,
    Button,
    Heading,
} from '@chakra-ui/react';
import useGenres, { type Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
    onSeletedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSeletedGenre, selectedGenre }: Props) => {
    const { data, error, isLoading } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner size={'md'} />;

    return (
        <>
            <Heading>Genres</Heading>
            <List.Root listStyle="none">
                {data?.results.map(genre => (
                    <List.Item key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius="6px"
                                objectFit="cover"
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                variant="plain"
                                textAlign="left"
                                whiteSpace="nowrap"
                                onClick={() => onSeletedGenre(genre)}
                                _hover={{ textDecoration: 'underline' }}
                                textDecoration={
                                    selectedGenre?.id === genre.id
                                        ? 'underline'
                                        : 'none'
                                }
                                fontWeight={
                                    selectedGenre?.id === genre.id
                                        ? 'bold'
                                        : 'normal'
                                }
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </List.Item>
                ))}
            </List.Root>
        </>
    );
};

export default GenreList;
