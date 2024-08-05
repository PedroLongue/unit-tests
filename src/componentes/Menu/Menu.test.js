import { render, screen } from '@testing-library/react';
import Menu from './index';

test('should render a link to home page', () => {
  render(<Menu />);

  const linkHomePage = screen.getByText('Inicial');

  expect(linkHomePage).toBeInTheDocument();
});

test('should render a list of links', () => {
  render(<Menu />);

  const links = screen.getAllByRole('link');

  expect(links).toHaveLength(4);
});

test('should not render a link to extract', () => {
  render(<Menu />);

  const extractLink = screen.queryByText('Extrato');

  expect(extractLink).not.toBeInTheDocument();
});

test('should render a list of links with clasName link', () => {
  render(<Menu />);

  const links = screen.getAllByRole('link');
  links.forEach((link) => expect(link).toHaveClass('link'));
  expect(links).toMatchSnapshot();
});
