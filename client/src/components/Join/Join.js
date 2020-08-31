import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div>
      <h1>Welcome!</h1>
      <div><input placeholder="Name" type="text" onChange={() => setName(event.target.value)} /></div>
      <div><input placeholder="Room" type="text" onChange={() => setRoom(event.target.value)} /></div>
      <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
        <button type="submit">Sign in</button>
      </Link>
    </div>
  )
}

export default Join;