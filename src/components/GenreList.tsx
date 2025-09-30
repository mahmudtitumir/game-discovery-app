import { HStack, Image, List, Spinner, Button } from '@chakra-ui/react';
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
        <List.Root listStyle="none">
            {data.map(genre => (
                <List.Item key={genre.id} paddingY="5px">
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius="6px"
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Button
                            size={'lg'}
                            variant="plain"
                            onClick={() => onSeletedGenre(genre)}
                            textDecor={
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
    );
};

export default GenreList;
