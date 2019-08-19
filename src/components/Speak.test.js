import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import Speak from './Speak';

describe('<Speak />', () => {
    // 2. write this test
    it('matches snapshot', () => {
      const tree = renderer.create(<Speak />); // generates a DOM tree
  
      // snapshots are a JSON representation of the DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });

    // implementation details that we don't care about and won't test:
    // - what props.speak is doing...
    // - if props.speak is invoked...

    // What we do want to test: 
    // - What does the user see in the app? Do they see the message when they click the button?

    it('displays a message when "speak" button is clicked', ()=>{
        const speak = jest.fn();
        // ^ this is a mock

        const { getByText } = render(<Speak speak={speak} />);

        const button = getByText(/speak/i);
        fireEvent.click(button);

        // ^ can also be written as:
        // fireEvent.click(getByText(/speak/i));
        
        expect(speak).toHaveBeenCalled();
        
    })

  });