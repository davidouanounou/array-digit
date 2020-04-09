import React from 'react';
import { render, fireEvent } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import Counter from './counter';

describe('Render Counter', () => {
    test('with no props', () => {
      const { container } = render(<Counter />);
      expect(container).toBeTruthy();
    });

    test('with [3,"3",9,0,"9"] as prop', () => {
      const { getByTestId } = render(<Counter digits={[3,"3",9,0,"9"]} />);
      const input = getByTestId("count-field");
      expect(input.value).toBe("33909");
    });
    
    test('and increment once', () => {
        const { getByTestId } = render(<Counter digits={[3,"3",9,0,"9"]} />);
        const button = getByTestId("increment-button");
        const input = getByTestId("count-field");
        fireEvent.click(button);
        expect(input.value).toBe("33910");
    });

    test('and increment once', () => {
        const { getByTestId } = render(<Counter digits={["3",3,9,"0",9]} />);
        const button = getByTestId("increment-button");
        const input = getByTestId("count-field");
        fireEvent.click(button);
        fireEvent.click(button);
        expect(input.value).toBe("33911");
    });
  
  });