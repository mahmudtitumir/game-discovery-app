import useTrailers from '../hooks/useTrailers';

interface Props {
    gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
    const { data: trailer, error } = useTrailers(gameId);
    const first = trailer?.results[0];
    return !error ? (
        <video src={first?.data[480]} poster={first?.preview} controls />
    ) : null;
};

export default GameTrailer;
