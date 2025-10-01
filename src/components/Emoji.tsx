import type { IconProps } from '@chakra-ui/react';
import { BsBullseye } from 'react-icons/bs';
import { FaMeh } from 'react-icons/fa';
import { IoIosThumbsUp } from 'react-icons/io';

interface Props {
    rating: number;
}

const Emoji = ({ rating }: Props) => {
    if (rating < 3) return null;
    const emojiMap: { [key: number]: IconProps } = {
        3: <FaMeh />,
        4: <IoIosThumbsUp color="red" />,
        5: <BsBullseye />,
    };
    return <>{emojiMap[rating]}</>;
};

export default Emoji;
