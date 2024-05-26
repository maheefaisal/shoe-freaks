import React, { useState, useEffect } from 'react';

const Countdown = ({ initialSeconds }) => {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        if (seconds > 0) {
            const timer = setTimeout(() => {
                setSeconds(seconds - 1);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [seconds]);

    return (
        <div className="flex items-center justify-center w-screen py-12">
            <div className="flex flex-col items-center p-6 bg-gray-800 text-white rounded-lg shadow-lg">
                <div className="text-4xl font-bold">discount Time</div>
                <div className="text-6xl my-4">
                    {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
                </div>
                {seconds === 0 && <div className="text-xl mt-4">Time's up!</div>}
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Countdown initialSeconds={300} /> {/* Countdown starting from 5 minutes */}
        </div>
    );
}

export default App;
