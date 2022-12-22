import { render, screen } from '@testing-library/react'
import NotFound from '../Pages/NotFound'


test('renders NotFound page', () => {
  render(<NotFound />)
  const tested = screen.getByTestId('tested')
  expect(tested).toHaveClass('notfound')
})