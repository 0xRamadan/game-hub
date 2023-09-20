import { HStack, Input, InputGroup, InputLeftAddon, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
    onSearch: (searchText: string) => void
}

const SearchInput = ({onSearch}: Props) => {

    const ref = useRef<HTMLInputElement>(null)

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(ref.current) onSearch(ref.current.value);
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='filled' />
            </InputGroup>
        </form>
    )
}

export default SearchInput