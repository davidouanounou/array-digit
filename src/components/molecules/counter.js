import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Atoms
import Input from '../atoms/input';
import Button from '../atoms/button';

const Counter = ({digits}) => {
  // useState rather than useReducer because increment() is not pure !
  const [state, setState] = useState(digits);
    
  /** I've tried to find a solution 
  * using functionnal programming only
  * So no if, no loop, no switch
  * Not that simple :)
  */

  // Add
  const add = num => {
    if((num + 1) === 10) return {incremented: 0, next: true};
    return {incremented: (num + 1), next: false};
  };

  // Increment
  const increment = () => {
    let nextStep = true;
    const wip = state.reverse().map(num => Number(num));
    const result = wip.map( num => {
      if(nextStep) {
        const {incremented, next} = add(num);
        nextStep = next;
        return incremented;
      }
      return num;
    });
    const reversed = result.reverse();
    if(reversed[0] === 0) reversed.unshift(1);
    setState(reversed);
  };
    return(
        <>
          <Input
            value={state.join('')}
            disabled={state.join('')}
            data-testid='count-field'
            onChange={e => {}}
          />
          <Button
            data-testid='increment-button'
            onClick={e => increment()}
          >
            +
          </Button>
        </>
    )
}

/* Will show the right 'tag' within documentation */
Counter.displayName = 'Counter';
Counter.defaultProps = {
  digits: []
};

Counter.propTypes = {
  digits: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]))
};

export default Counter;