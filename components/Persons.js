import React from 'react'

function Persons({person}) {
  return (
    <div>
           <h2> Name: {person.name}, Skill: {person.skill} </h2>
    </div>
  )
}

export default Persons