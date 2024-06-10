import React from 'react';
import Age from './Age';

const Welcome = ({ name = 'Guest', age }) => {
  return (
    <div>
      <p>Welcome, <strong>{name}</strong>!</p>
      {age > 18 && <Age age={age} />}
      
      {age !== undefined && <Age age={age} />}
      
      {age > 18 && age < 65 && <Age age={age} />}
      
      {age > 18 && age < 65 && name === 'John' && <Age age={age} />}
      
      <Age age={age} />
    </div>
  );
};

export default Welcome;