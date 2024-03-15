// SelectComponent.tsx
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

interface SelectProps {
    label: string;
    options: string[];
    onSelect: (value: string) => void;
}

const SelectComponent: React.FC<SelectProps> = ({ label, options, onSelect }) => {
    const [selectedOption, setSelectedOption] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const selectedValue = event.target.value as string;
        setSelectedOption(selectedValue);
        onSelect(selectedValue);
    };

    return (
        <Select
            value={selectedOption}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': label }}
        >
            <MenuItem value="" disabled>
                {label}
            </MenuItem>
            {options.map(option => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
        </Select>
    );
}

export default SelectComponent;
