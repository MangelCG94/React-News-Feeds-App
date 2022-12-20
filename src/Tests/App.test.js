import { render, screen } from '@testing-library/react';
import App from '../App';

// Un archivo para cada componente
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
