import React from 'react';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Welcome name="John" age={30} />
      <Welcome name="Jane" age={25} />
      <Welcome age={17} />
      <Welcome name="Mark" age={70} />
      <Welcome />
    </div>
  );
};

export default App;