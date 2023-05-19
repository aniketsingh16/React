import React, {useState} from 'react'
import Persons from './Persons';

const ListRendering = () => {

    const names = ['Bruce', 'Clark', 'Aniket'];
    const nameList = [
        {
            id: 1,
            name: 'Aniket',
            skill: 'React'
        },
        {
            id: 2,
            name: 'Diana',
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Clark',
            skill: 'Vue'
        }
    ]
  return (
    <div>
        {/* <h2> {names[0]} </h2>
        <h2> {names[1]} </h2>
        <h2> {names[2]} </h2> */}
        {
            nameList.map(person => <Persons person={person} />)
        }
    </div>
  )
}

export default ListRendering