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
    }: {
        status: string;
        gender: string;
        name: string;
        species: string;
    }) => {
        const filteredResults = charactersList.filter(
            (character: Character) =>
                (status === '' || character.status.includes(status)) &&
                (gender === '' || character.gender.includes(gender)) &&
                (name === '' || character.name.includes(name)) &&
                (species === '' || character.species.includes(species))
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
