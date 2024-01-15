import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useGetAllCharactersData from '../api/useGetAllCharacters';
import { Card } from '../../../shared/ui/Card/ui/Card';
import { Character } from '../../../shared/types/Character';

interface ListProps {
    characters: Character[];
}

const CharactersList = ({ characters }: ListProps) => {
    const { charactersList, loading } = useGetAllCharactersData();

    if (loading) {
        return <div>Loader...</div>;
    }

    return (
        <Container>
            {characters.map((character, index) => (
                <Card
                    key={index}
                    image={character.image}
                    name={character.name}
                    status={character.status}
                    gender={character.gender}
                    type={character.type}
                />
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export { CharactersList };
