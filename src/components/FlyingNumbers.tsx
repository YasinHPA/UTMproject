import React, { useEffect } from 'react';
import './FlyingNumbers.css';

const FlyingNumbers = () => {
    useEffect(() => {
        const container = document.querySelector('.flying-numbers-container');
        const numElements = 100; // Количество чисел
        const animationDuration = 10; // Продолжительность анимации

        // Генерация случайных чисел и добавление их в контейнер
        for (let i = 0; i < numElements; i++) {
            const number = Math.floor(Math.random() * 1000); // Случайное число от 0 до 999
            const div = document.createElement('div');
            div.textContent = number.toString();
            container.appendChild(div);
        }

        // Анимация для чисел
        container.childNodes.forEach((el: any) => {
            el.style.animationDuration = `${animationDuration}s`;
        });

        // Очистка чисел после окончания анимации
        setTimeout(() => {
            container.innerHTML = '';
        }, animationDuration * 1000);
    }, []);

    return (
        <div className="flying-numbers-container">
            {/* Числа будут добавлены с помощью JavaScript */}
        </div>
    );
};

export default FlyingNumbers;
