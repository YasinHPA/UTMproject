import React, { useState, useEffect } from 'react';
import axios from 'axios';


interface NumberFactsComponentProps {}

const NumberFactsComponent: React.FC<NumberFactsComponentProps> = () => {
    const [fact, setFact] = useState<string>('');
    const videoSource = "/public/video.mp4";

    const fetchNumberFact = async () => {
        try {
            const response = await axios.get('https://numbersapi.p.rapidapi.com/random/trivia?json=true', {
                headers: {
                    'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
                    'x-rapidapi-key': '1e63401fa3msh29d77d627add373p1bb288jsn67765c9e8ed5' // Замените на свой API-ключ
                }
            });
            setFact(response.data.text);
        } catch (error) {
            console.error('Ошибка при загрузке интересного факта о числе:', error);
        }
    };

    useEffect(() => {
        fetchNumberFact();
    }, []); // Вызываем fetchNumberFact() при монтировании компонента

    const handleRefreshFact = () => {
        fetchNumberFact(); // Вызываем fetchNumberFact() при нажатии на кнопку обновления
    };

    return (
        <div className="number-facts-container">
            <video autoPlay loop muted className={"video-background"} style={{
                opacity: 0.3,
                width: 600,
                textAlign: 'center',
                position: 'absolute',
                top: '30%',
                left: '200%',
                transform: 'translate(-50%, -50%)',
                zIndex: -1
            }}>
                <source src={videoSource} type={"video/mp4"}/>
                Your browser does not support this video tag.
            </video>
            <video autoPlay loop muted className={"video-background"} style={{
                opacity: 0.3,
                width: 600,
                textAlign: 'center',
                position: 'absolute',
                top: '30%',
                left: '600%',
                transform: 'translate(-50%, -50%) scaleX(-1)',
                zIndex: -1,

            }}>
                <source src={videoSource} type={"video/mp4"}/>
                Your browser does not support this video tag.
            </video>
            <h1 className="number-facts-heading" style={{
                width: 500,
                textAlign: 'center',
                position: 'absolute',
                top: '30%',
                left: '435%',
                transform: 'translate(-50%, -50%)'
            }}>Интересные факты о числах</h1>
            <p className="number-fact" style={{
                width: 500,
                textAlign: 'center',
                position: 'absolute',
                top: '50%',
                left: '435%',
                transform: 'translate(-50%, -50%)',
                fontFamily: 'Arial, sans-serif',
                fontSize: '30px',
                fontWeight: 'normal'
            }}>{fact}</p>

            <button className="refresh-button" onClick={handleRefreshFact} style={{
                textAlign: 'center',
                position: 'absolute',
                top: '80%',
                left: '435%',
                transform: 'translate(-50%, -50%)',
                display: 'block',
                margin: '0 auto'
            }}>Обновить факт
            </button>
            {/* Добавляем кнопку обновления факта */}
        </div>
    );
};

export default NumberFactsComponent;
