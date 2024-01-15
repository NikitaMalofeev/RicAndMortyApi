// PageCharacters.tsx

import React from 'react';
import { CharactersList } from '../../../features/CharactersList';
import { Character } from '../../../shared/types/Character';
import CharactersFilterContainer from '../../../widgets/CharactersFilterContainer/CharactersFilterContainer';

const PageCharacters: React.FC = () => {
    return (
        <CharactersFilterContainer>
            {(filteredCharacters: Character[]) => (
                <CharactersList characters={filteredCharacters} />
            )}
        </CharactersFilterContainer>
    );
};

export { PageCharacters };
