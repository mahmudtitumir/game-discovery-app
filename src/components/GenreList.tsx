import {
    HStack,
    Image,
    List,
    Spinner,
    Button,
    Heading,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

const GenreList = () => {
    const setGenreId = useGameQueryStore(s => s.setGenreId);
    const { data, error, isLoading } = useGenres();
    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
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
                                onClick={() => setGenreId(genre.id)}
                                _hover={{ textDecoration: 'underline' }}
                                textDecoration={
                                    selectedGenreId === genre.id
                                        ? 'underline'
                                        : 'none'
                                }
                                fontWeight={
                                    selectedGenreId === genre.id
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
