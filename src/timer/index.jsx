import { useState } from 'react';
import NumberInput from '../number-input';
import playIcon from '../assets/play.png';
import pauseIcon from '../assets/pause.png';
import styled from 'styled-components';

const TimerControls = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TimerIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const Timer = () => {
   const [seconds, setSeconds] = useState(0);
   const [minutes, setMinutes] = useState(0);
   const [pause, setPause] = useState(false);
   let secondInterval, minuteInterval;
   console.log(pause);
   const timerInterval = (length, value, setter) => {
     if (!pause && value > 0) {
       setTimeout(() => {
         setter(value - 1);
         timerInterval(length, value - 1, setter);
       }, length);
     }
   }

   const play = () => {
     setPause(false);
     if (seconds > 0) timerInterval(1000, seconds, setSeconds);
     if (minutes > 0) timerInterval(60000, minutes, setMinutes);
   }

   const doPause = () => {
     setPause(true);
   }
   return (
      <div>
          <div>
            <NumberInput value={minutes} setValue={setMinutes} />
            :
            <NumberInput value={seconds} setValue={setSeconds} />
          </div>
          <TimerControls>
              <TimerIcon src={pauseIcon} onClick={doPause} />
              <TimerIcon src={playIcon} onClick={play} />
          </TimerControls>
      </div>
   );
 }

 export default Timer;
