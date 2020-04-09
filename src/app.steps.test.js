import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

// Component entry
import App from './App';

// Scenarios
const appFeature = loadFeature('./src/app.feature');

defineFeature(appFeature, test => {
  let input;

  test('Increment string array digits with two leading 0', ({ given, then, }) => {

    given(/^I am a user attempting to pass \[(.*?)\] as array of digits$/, arr => {
      const { getByTestId } = render(<App digits={arr.split(',')} />);
      input = getByTestId('count-field');
    });

    then(/^Counter should display \[(.*?)\]$/, res => {
      expect(input.value).toBe(res);
    });
  });

  test('Increment string array digits with no leading 0', ({ given, then, }) => {

    given(/^I am a user attempting to pass \[(.*?)\] as array of digits$/, arr => {
      const { getByTestId } = render(<App digits={arr.split(',')} />);
      input = getByTestId('count-field');
    });

    then(/^Counter should display \[(.*?)\]$/, res => {
      expect(input.value).toBe(res);
    });
  });

  test('Increment string array digits with six leading 0', ({ given, then, }) => {

    given(/^I am a user attempting to pass \[(.*?)\] as array of digits$/, arr => {
      const { getByTestId } = render(<App digits={arr.split(',')} />);
      input = getByTestId('count-field');
    });

    then(/^Counter should display \[(.*?)\]$/, res => {
      expect(input.value).toBe(res);
    });
  });
});
