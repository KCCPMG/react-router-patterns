import React from 'react';

function Dog({name, age, imgSrc, facts}) {
  return (
    <div className="Dog">
      <h1>{name}</h1>
      <img src={imgSrc}></img>
      <h6>Age: {age}</h6>
      <h5>Facts</h5>
      <ul>
        {facts.map(fact => <li>{fact}</li>)}
      </ul>
    </div>
  )
}

export default Dog;