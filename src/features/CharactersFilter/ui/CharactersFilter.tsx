import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface FilterProps {
    onFilterChange: (filters: {
        status: string;
        gender: string;
        name: string;
        species: string;
    }) => void;
}

const StyledFilterContainer = styled.div`
    display: flex;
    max-width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const StyledButton = styled.button`
    margin: 5px;
    padding: 10px;
    background-color: rgb(139, 40, 56);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #2980b9;
    }

    &:active {
        background-color: #2070a0;
    }
`;

const StyledInput = styled.input`
    margin: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #d9cafc;
`;

const CharactersFilter: React.FC<FilterProps> = ({ onFilterChange }) => {
    const [statusFilter, setStatusFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [nameFilter, setNameFilter] = useState('');
    const [speciesFilter, setSpeciesFilter] = useState('');

    const handleFilterChange = () => {
        onFilterChange({
            gender: genderFilter,
            status: statusFilter,
            name: nameFilter,
            species: speciesFilter,
        });
    };

    const resetFilterOptions = () => {
        setStatusFilter('');
        setGenderFilter('');
        setNameFilter('');
        setSpeciesFilter('');
    };

    useEffect(() => {
        handleFilterChange();
    }, [genderFilter, statusFilter, nameFilter, speciesFilter]);

    return (
        <StyledFilterContainer>
            <div>
                <label>Gender:</label>
                <StyledButton onClick={() => setGenderFilter('Male')}>
                    Male
                </StyledButton>
                <StyledButton onClick={() => setGenderFilter('Female')}>
                    Female
                </StyledButton>
            </div>

            <div>
                <label>Dead or Alive:</label>
                <StyledButton onClick={() => setStatusFilter('Alive')}>
                    Alive
                </StyledButton>
                <StyledButton onClick={() => setStatusFilter('Dead')}>
                    Dead
                </StyledButton>
            </div>

            <div>
                <label>Name:</label>
                <StyledInput
                    type="text"
                    value={nameFilter}
                    onChange={(e) => {
                        setNameFilter(e.target.value);
                        handleFilterChange();
                    }}
                />
            </div>

            <div>
                <label>Species:</label>
                <StyledInput
                    type="text"
                    value={speciesFilter}
                    onChange={(e) => {
                        setSpeciesFilter(e.target.value);
                        handleFilterChange();
                    }}
                />
            </div>
            <StyledButton onClick={resetFilterOptions}>
                Сбросить фильтры
            </StyledButton>
        </StyledFilterContainer>
    );
};

export { CharactersFilter };
