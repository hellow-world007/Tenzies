// import React from 'react';
// import { useState, useEffect } from 'react';

// const Timer = () => {
// //   let date = new Date();

// //   const prevDate = Date.parse(date)
// //   const currentDate = Date.now()
//   const deadline = "December, 31, 2024";

//   const [days, setDays] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);

//   const getTime = () => {
//     const time = Date.parse(deadline) - Date.now()

//     setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
//     setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
//     setMinutes(Math.floor((time / 1000 / 60) % 60));
//     setSeconds(Math.floor((time / 1000) % 60));
//   };

//   useEffect(() => {
//     const interval = setInterval(() => getTime(deadline), 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const timer = `${days}:${hours}:${minutes}`
   
//   return (
//        <h1>
//           {timer}
//         </h1>
//   )
// };
/////////////////////////////////////////////////////////////////////
// const Timer = () => {
    // const [days, setDays] = useState(0);
    // const [hours, setHours] = useState(0);
    // const [minutes, setMinutes] = useState(0);
    // const [seconds, setSeconds] = useState(0);
  
    // const deadline = "June, 28, 2023";
  
    // const getTime = () => {
    //   const time = Date.parse(deadline) - Date.now();    
  
    //   setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    //   setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    //   setMinutes(Math.floor((time / 1000 / 60) % 60));
    //   setSeconds(Math.floor((time / 1000) % 60));
    // };
  
    // useEffect(() => {
    //   const interval = setInterval(() => getTime(deadline), 1000);
  
    //   return () => clearInterval(interval);
    // }, []);
  
    // return (
    //   <div className="timer" role="timer">
    //     <div className="col-4">
    //       <div className="box">
    //         <p id="day">{days < 10 ? "0" + days : days}</p>
    //         <span className="text">Days</span>
    //       </div>
    //     </div>
    //     <div className="col-4">
    //       <div className="box">
    //         <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
    //         <span className="text">Hours</span>
    //       </div>
    //     </div>
    //     <div className="col-4">
    //       <div className="box">
    //         <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
    //         <span className="text">Minutes</span>
    //       </div>
    //     </div>
    //     <div className="col-4">
    //       <div className="box">
    //         <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
    //         <span className="text">Seconds</span>
    //       </div>
    //     </div>
    //   </div>
    // );
    // console.time("Time this");

    // for (var i = 0; i < 10000; i++) {
    //    <h1>hellow</h1>
    // }
    
    // console.timeEnd("Time this");
//   };

// export default Timer;