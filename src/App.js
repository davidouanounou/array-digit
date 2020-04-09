import React from 'react';

// App components
import Main from './components/layouts/main';
import Box from './components/layouts/box';
import Counter from './components/molecules/counter';

const App = ({digits}) => {

  // Recursive function to remove leading 0
  const removeLeadingZero = numbers => {
    // Protect from leading 0
    const concat = numbers.join("")
    const int = parseInt(concat);
    const arr = int.toString().split("");
    return arr;
  };

  return (
    <Main>
      <Box>
        <Counter digits={removeLeadingZero(digits)} data-testid="counter" />
      </Box>
    </Main>
  );
}

export default App;
