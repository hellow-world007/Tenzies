import React from 'react'

export default function Die(props) {

  const styles={
    backgroundColor: props.isClicked ? 'purple' : 'transparent',
    color: props.isClicked ? 'white' : 'black'
  }
 
  return (
        <p 
          className='die'
          style={styles} 
          onClick={props.handleClick}
        >
          {props.value}
        </p>
  )
}