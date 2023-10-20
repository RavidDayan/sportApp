import { useState } from "react";

function Timer(prop) {
    const time = prop.time;
    const timeIndex = 0;
    const [timer, setTime] = useState(time);
    const [startStopButton, setButton] = useState(startButton);
    const [progressBar, setBar] = useState(
        <div class="progress" role="progressbar" aria-label="timer countdown" aria-valuenow={timer} aria-valuemin="0" aria-valuemax={time}>
            <div class="progress-bar" style={`width:${timer}`}>{timer}</div>
        </div>
    );
    const startButton = <button onClick={startTime}>Start</button>;
    const stopButton = <button onClick={stopTime}>Start</button>;
    const resetButton = <button onClick={resetTime}>Start</button>;
    async function startTime(time) {
        setButton(stopButton);
        for (timeIndex = time; timeIndex > 0; timeIndex--) {
            setInterval(() => { setTime(timer - 1) }, 1000);
        };
    };
    async function stopTime() {
        timeIndex = 0;
        setButton(startButton);
    };
    async function resetTime() {
        stopTime();
        setTime(time);

    };
    return (
        <>
            {startStopButton}
            {resetButton}
            {progressBar}
        </>
    );

};