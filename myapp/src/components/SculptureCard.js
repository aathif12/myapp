import React from 'react'

function SculptureCard({sculpture}) {
  return (
    <div>
        <h3>{sculpture.name}</h3>
        <p>Artist: <b>{sculpture.artist}</b></p>
        <p>Description: <b>{sculpture.description}</b></p>
        <img src={sculpture.url} alt="Photo"/>
    </div>
  )
}

export default SculptureCard  