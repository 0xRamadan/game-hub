import {
    FaWindows,
    FaPlaystation,
    FaXbox, FaApple,
    FaLinux,
    FaAndroid
} from 'react-icons/fa'
import { SiNintendo } from 'react-icons/si'
import {MdPhoneIphone} from 'react-icons/md'
import {BsGlobe} from 'react-icons/bs'
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatforms";
import { IconType } from 'react-icons';

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType} = {
        'pc': FaWindows,
        'playstation': FaPlaystation,
        'xbox': FaXbox,
        'mac': FaApple,
        'linux': FaLinux,
        'android': FaAndroid,
        'nintendo': SiNintendo,
        'web': BsGlobe,
        'ios': MdPhoneIphone,
    }

    return (
        <HStack marginY={'10px'}>
            {platforms.map((platform) => <Icon key={platform.id} color='gray.500' as={iconMap[platform.slug]}/>)}
        </HStack>
    )
}

export default PlatformIconList