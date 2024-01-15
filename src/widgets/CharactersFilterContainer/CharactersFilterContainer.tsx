// CharactersFilterContainer.tsx

import React, { useState } from 'react';
import useGetAllCharactersData from '../../features/CharactersList/api/useGetAllCharacters';
import { CharactersFilter } from '../../features/CharactersFilter';
import { Character } from '../../shared/types/Character';
import { Loader } from '../../shared/ui/Loader/ui/Loader';

interface CharactersFilterContainerProps {
    children: (filteredCharacters: Character[]) => React.ReactNode;
}

const CharactersFilterContainer: React.FC<CharactersFilterContainerProps> = ({
    children,
}) => {
    const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(
        []
    );
    const { charactersList, loading } = useGetAllCharactersData();

    const handleFilterChange = ({
        status,
        gender,
        name,
        species,
        type,
    }: {
        status: string;
        gender: string;
        name: string;
        species: string;
        type: string;
    }) => {
        const filteredResults = charactersList.filter(
            (character: Character) =>
                (status === '' ||
                    character.status
                        .toLowerCase()
                        .includes(status.toLowerCase())) &&
                (gender === '' ||
                    character.gender
                        .toLowerCase()
                        .includes(gender.toLowerCase())) &&
                (name === '' ||
                    character.name
                        .toLowerCase()
                        .includes(name.toLowerCase())) &&
                (species === '' ||
                    character.species
                        .toLowerCase()
                        .includes(species.toLowerCase())) &&
                ((type === '' ||
                    character.type
                        .toLowerCase()
                        .includes(type.toLowerCase())) as boolean) // явное приведение к boolean
        );

        setFilteredCharacters(filteredResults);
    };

    return (
        <div>
            <CharactersFilter onFilterChange={handleFilterChange} />
            {loading ? (
                <div>
                    <Loader />
                </div>
            ) : (
                children(
                    filteredCharacters.length
                        ? filteredCharacters
                        : charactersList
                )
            )}
        </div>
    );
};

export default CharactersFilterContainer;
