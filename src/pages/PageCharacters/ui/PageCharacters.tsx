import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CharactersFilter } from '../../../features/CharactersFilter';
import { CharactersList } from '../../../features/CharactersList';
import useGetAllCharactersData from '../../../features/CharactersList/api/useGetAllCharacters';

interface Character {
    id: number;
    name: string;
    status: string;
    gender: string;
    type: string;
    image: string;
}

const PageCharacters: React.FC = () => {
    const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(
        []
    );
    const { charactersList, loading } = useGetAllCharactersData();

    const handleFilterChange = ({
        status,
        gender,
    }: {
        status: string;
        gender: string;
    }) => {
        const filteredResults = charactersList.filter(
            (character) =>
                (status === '' ||
                    character.status
                        .toLowerCase()
                        .includes(status.toLowerCase())) &&
                (gender === '' ||
                    character.gender
                        .toLowerCase()
                        .includes(gender.toLowerCase()))
        );

        setFilteredCharacters(filteredResults);
    };

    return (
        <div>
            <CharactersFilter onFilterChange={handleFilterChange} />
            {loading ? (
                <div>Loading...</div>
            ) : (
                <CharactersList
                    characters={
                        filteredCharacters.length
                            ? filteredCharacters
                            : charactersList
                    }
                />
            )}
        </div>
    );
};

export { PageCharacters };
