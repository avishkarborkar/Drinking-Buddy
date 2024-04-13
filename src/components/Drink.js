import React, { useEffect, useState } from 'react';
import { LiaGlassMartiniAltSolid } from 'react-icons/lia';
import { FiRotateCcw } from 'react-icons/fi';
import confetti from 'canvas-confetti';

const Fireworks = () => {
    useEffect(() => {
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                clearInterval(interval);
                return;
            }

            const particleCount = 50 * (timeLeft / duration);

            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            });

            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            });
        }, 250);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return null; // Fireworks component doesn't render anything
};

const Drink = ({ setIsDrink }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <>
            <div className='grid place-content-center py-10'>
                <FiRotateCcw className='text-4xl text-white' onClick={() => setIsDrink(false)} />
            </div>
            <span className='text-4xl text-white grid place-content-center'>
                <i className='text-blue'>HAHAHAHA</i> Drink Loser!
            </span>
            <div className='h-screen w-100vw grid place-content-center'>
                <LiaGlassMartiniAltSolid
                    className='text-5xl text-purple-500 transition-all duration-1000'
                    style={{
                        transform: `scale(${animate ? 8 : 1})`,
                        marginTop: '-10rem',
                    }}
                />
                <Fireworks />
            </div>
        </>
    );
};

export default Drink;
