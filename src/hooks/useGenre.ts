import useGenres from './useGenres';

const useGenre = (id?: number) => {
    const { data } = useGenres();
    return data?.results.find(p => p.id === id);
};

export default useGenre;
