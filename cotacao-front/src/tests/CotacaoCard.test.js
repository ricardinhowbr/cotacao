import { render, screen } from '@testing-library/react';
import CotacaoCard from '../components/CotacaoCard';

test('renders cotacao card with title and value', () => {
  render(<CotacaoCard titulo="Dólar" valor={5.25} />);
  expect(screen.getByText('Dólar')).toBeInTheDocument();
  expect(screen.getByText('R$ 5.25')).toBeInTheDocument();
});