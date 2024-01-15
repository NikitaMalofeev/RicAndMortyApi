// FilterComponent.tsx

import React, { useState } from 'react';

interface FilterProps {
    onFilterChange: (filters: { status: string; gender: string }) => void;
}

const CharactersFilter: React.FC<FilterProps> = ({ onFilterChange }) => {
    const [statusFilter, setStatusFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');

    const handleFilterChange = () => {
        onFilterChange({ status: statusFilter, gender: genderFilter });
    };

    return (
        <div>
            <label>
                Status:
                <input
                    type="text"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                />
            </label>
            <label>
                Gender:
                <input
                    type="text"
                    value={genderFilter}
                    onChange={(e) => setGenderFilter(e.target.value)}
                />
            </label>
            <button onClick={handleFilterChange}>Apply Filters</button>
        </div>
    );
};

export { CharactersFilter };
