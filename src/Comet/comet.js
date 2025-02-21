import React, { useEffect, useState } from "react";
import "./comet.css";

const Comet = ({ acceleration }) => {
    const [comets, setComets] = useState([]);

    const createComet = () => {
        const newComet = {
            id: Date.now(),
            left: getRandomBetween(1, 100),
            size: getRandomBetween(1, 10),
            speed: getRandomBetween(3, 10) ,
            top: -100,
        };
        setComets(prev => [...prev, newComet]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setComets(prevComets =>
                prevComets
                    .map(comet => ({ ...comet, top: comet.top + comet.speed + acceleration}))
                    .filter(comet => comet.top <= window.innerHeight + 20)
            );
        }, 16);

        return () => clearInterval(interval);
    }, [acceleration]);

    useEffect(() => {
        const cometInterval = setInterval(createComet, 40);
        return () => clearInterval(cometInterval);
    }, []);

    return (
        <div>
            {comets.map(comet => (
                <div
                    key={comet.id}
                    className="fire-ball"
                    style={{
                        top: `${comet.top}px`,
                        left: `${comet.left}%`,
                        width: `${comet.size}px`,
                        height: `${comet.size}px`,
                    }}
                ></div>
            ))}
        </div>
    );
};

const getRandomBetween = (x, y) => Math.floor(Math.random() * (y - x + 1)) + x;

export default Comet;
