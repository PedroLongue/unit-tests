import { render, screen } from '@testing-library/react';
import Extrato from './index';

test('Should render a transaction list', () => {
  const transacoes = [
    {
      transacao: 'Depósito',
      valor: 100,
    },
  ];

  render(<Extrato transacoes={transacoes} />);

  const list = screen.getByRole('listitem');
  expect(list).toBeInTheDocument();
});
