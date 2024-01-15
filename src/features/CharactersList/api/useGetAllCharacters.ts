import { useState, useEffect } from 'react';
import { Character } from '../../../shared/types/Character';

interface CharacterData {
    characters: Character[];
    loading: boolean;
}

const useGetAllCharactersData = () => {
    const [charactersList, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async (url: string) => {
        try {
            const response = await fetch(url);
            const data = await response.json();

            setCharacters((prevCharacters) => [
                ...prevCharacters,
                ...data.results,
            ]);

            if (data.info.next) {
                fetchData(data.info.next);
            } else {
                setLoading(false);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData('https://rickandmortyapi.com/api/character');
    }, []);

    return { charactersList, loading };
};

export default useGetAllCharactersData;
