import React from 'react'

const EventHandling = () => {
    function handleClick() {
        console.log("Button Clicked..")
    }
  return (
    <div>
        EventHandling
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default EventHandling