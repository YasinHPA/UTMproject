// ButtonComponent.tsx
import React from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <Button variant="contained" onClick={onClick}>{label}</Button>
    );
}

export default ButtonComponent;
