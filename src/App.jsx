import React, { useEffect, useState } from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import StopWatch from './components/StopWatch'
import './App.css'

function App() {
    const [ die, setDie ] = useState(allNewDie())
    const [ tenzies, setTenzies ] = useState(false)
    const [ count, setCount ] = useState(0)
    const [message, setMessage] = useState(null)
    const [start, setStart] = React.useState(false)

    useEffect(() => {
      const allClicked = die.every(die => die.isClicked)
      const singleDieValue = die[0].value
      const allSameValue = die.every(die => die.value === singleDieValue)
      if(allClicked && allSameValue){
        setTenzies(true)
      }
    },[die])

    function generateDie(){
      return {
          value:Math.floor(Math.random() * 6 + 1), 
          isClicked:false,
          id: nanoid()
      }
    }

    function allNewDie() {
      const newDie = []
      for (let i = 0; i < 10; i++) {
          newDie.push(generateDie())
      }
      return newDie
    }

    function handleClick(id){
      setDie(prevDie => prevDie.map(die => {
        return die.id === id ? 
        {...die,isClicked:!die.isClicked} 
        : die
      }))
    }

    const dieElements = die.map(element => {
      return (
        <Die
          key={element.id}
          isClicked={element.isClicked}
          handleClick={() => handleClick(element.id)}
          value = {element.value}
        />
      )
    })

    function handleRollBtn() {
      if (start === false) {
        setStart(true);
      } 

      if (start && tenzies) {
        setDie(allNewDie());
        setTenzies(false);
        setStart(false);
        setCount(0)
      }
      else {
          setDie(oldDie => oldDie.map(die => {
            return die.isClicked ? die : generateDie()
          }))

          setCount(prevCount => prevCount + 1)
          
          setMessage(`It tooks ${count} rolls to you to complete the game.`)
      }
    }

    return (
      <section>
        { tenzies && <Confetti /> }
        <div className="container">
          <h1 className="title">Tenzies</h1>
          <p className="description">
              Roll until all dice are the same. 
              Click each die to freeze it at its current value between rolls.
          </p>
          <div className='die--element'>
              { dieElements }
          </div>             
          <button 
          className="roll-btn"
          onClick={handleRollBtn}>
            {/* {tenzies ? "New Game" : "Roll"} */}
            {start === false && "Start"}
            {tenzies === false && start && "Roll"}
            {tenzies && start && "New Game"}
          </button>
          { tenzies && 
          <p className="roll--count">
              {message}
          </p> }
          <StopWatch tenzies={tenzies} start={start} />
        </div>
      </section>
    )
}

export default App

// function handleRollBtn(){
//   if(!tenzies && !start){
//     // const filteredDie = die.filter(element => die.id !== element.id)
//     // console.time("Time this");
//     // console.log('start load cache');
//     // const before = Date.parse(new Date());
//     // localStorage.setItem("before", JSON.stringify(before));

//     setDie(oldDie => oldDie.map(die => {
//       return die.isClicked ? die : generateDie()
//     }))
//     setCount(prevCount => prevCount + 1)
//     setMessage(`It tooks ${count} rolls to you to complete the game.`)

//     // let time = 0
//     // const beforee = localStorage.getItem("before");
//     // const after = Date.now();
//     // console.log(after)
//     // console.log('cache load ok executed in', (after - beforee) / 1000);
//     // time += (after - beforee) / 1000;
//     // console.log(time,'time')
//     // console.timeEnd("Time this");
//   }
//   if (start === false) {
//     setStart(true);
//   }
//   else{
//     setTenzies(false)
//     setDie(allNewDie())
//     setCount(0)
//     setStart(false)
//     // setMessage(null)
//   }
// }
