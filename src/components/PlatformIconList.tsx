import { HStack, Icon } from '@chakra-ui/react';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import type { IconType } from 'react-icons/lib';
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from 'react-icons/fa';
import type { Platform } from '../entities/Platform';

interface Props {
    platforms: Platform[];
}
const PlatformIconList = ({ platforms = [] }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        nintendo: SiNintendo,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
    };
    return (
        <HStack>
            {platforms.map(platform => (
                <Icon
                    key={platform.id}
                    as={iconMap[platform.slug] || BsGlobe}
                    color="blue.500"
                />
            ))}
        </HStack>
    );
};

export default PlatformIconList;
