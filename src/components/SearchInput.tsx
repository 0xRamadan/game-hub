import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../store';
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore(s => s.setSearchText);
    const navigate = useNavigate();

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (ref.current) {
            setSearchText(ref.current.value)
            navigate('/')
        };
    };
    return (
        <form onSubmit={handleOnSubmit}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='filled' />
            </InputGroup>
        </form>
    );
};
