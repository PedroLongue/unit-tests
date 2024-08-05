import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // get user events
import Formulario from './index';

describe('Should render a input', () => {
  test('no documento', () => {
    render(<Formulario />);

    const inputText = screen.getByPlaceholderText('Digite um valor');

    expect(inputText).toBeInTheDocument();
  });

  test('with type number', () => {
    render(<Formulario />);

    const inputText = screen.getByPlaceholderText('Digite um valor');

    expect(inputText).toHaveAttribute('type', 'number');
  });

  test('that can be filled', () => {
    render(<Formulario />);

    const inputText = screen.getByPlaceholderText('Digite um valor');

    userEvent.type(inputText, '50'); // simulate user event (user fills in the field with 50)
    expect(inputText).toHaveValue(50);
  });
});
