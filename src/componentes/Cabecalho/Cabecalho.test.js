import { render, screen } from '@testing-library/react';
import Cabecalho from './index';

test('should render the name of the logged in user', () => {
  render(<Cabecalho />);
  const userName = screen.getByText('Joana Fonseca Gomes');
  expect(userName).toBeInTheDocument();
});
