import React, { useState, useEffect } from 'react';

interface FlagComponentProps {
    country: string;
}

const FlagComponent: React.FC<FlagComponentProps> = ({ country }) => {
    const [flagUrl, setFlagUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchFlag = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${country}?fields=flags`);
                const data = await response.json();
                const flag = data[0].flags.png;
                setFlagUrl(flag);
            } catch (error) {
                console.error('Ошибка при загрузке флага:', error);
            }
        };

        fetchFlag();
    }, [country]);

    return (
        <div style={{ marginTop: '10px' }}>
            {flagUrl && <img src={flagUrl} alt={`${country} flag`} width="100" />}
        </div>
    );
};

export default FlagComponent;
