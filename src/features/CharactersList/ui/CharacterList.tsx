import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from '../../../shared/ui/Card/ui/Card';
import { Character } from '../../../shared/types/Character';
import { Modal } from '../../../shared/ui/Modal/ui/Modal';

interface ListProps {
    characters: Character[];
}

const CharactersList = ({ characters }: ListProps) => {
    const [selectedCharacter, setSelectedCharacter] =
        useState<Character | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = (character: Character) => {
        setSelectedCharacter(character);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedCharacter(null);
        setIsModalOpen(false);
    };

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
                    onClick={() => showModal(character)}
                />
            ))}

            {isModalOpen && selectedCharacter && (
                <Modal
                    title={selectedCharacter.name}
                    open={isModalOpen}
                    handleOpen={closeModal}
                >
                    <img
                        src={selectedCharacter.image}
                        alt={selectedCharacter.name}
                    />
                    <CharacterDescription>
                        <p>Status: {selectedCharacter.status}</p>
                        <p>Gender: {selectedCharacter.gender}</p>
                        <p>Species: {selectedCharacter.species}</p>
                        <p>Type: {selectedCharacter.type}</p>
                        <p>Location: {selectedCharacter.location?.name}</p>
                    </CharacterDescription>
                </Modal>
            )}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const CharacterDescription = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid white;
    padding: 5px;

    p {
        border-bottom: 1px solid white;
    }
`;

export { CharactersList };
