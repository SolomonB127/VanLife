import React from 'react';
import { useRouteError } from 'react-router-dom';
const Error = () => {
    const myError = useRouteError();
  return (
    <div>
        <h1>Error: {myError.message}</h1>
        <p>{myError.status} - {myError.statusText}</p>
    </div>
  )
}

export default Error