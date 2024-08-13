import { render, screen } from '@testing-library/react';
import Transacoes from './index';
import estilos from '../Extrato.module.css';

test('Should render the same component with updated props', () => {
  const transacao = {
    transacao: 'Depósito',
    valor: 100,
  };
  render(<Transacoes estilos={estilos} transacao={transacao} />);
  const transationType = screen.getByTestId('tipoTransacao');
  const transationValue = screen.getByTestId('valorTransacao');

  expect(transationType).toHaveTextContent('Depósito');
  expect(transationValue).toHaveTextContent('R$ 100');
});
