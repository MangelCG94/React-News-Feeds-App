import { render, screen } from '@testing-library/react'
import Footer from '../Components/Footer' // Import the Footer component


test('renders the Footer component', () => {
  render(<Footer />)
  const expecting = screen.getByText(/Miguel/i)
  expect(expecting).toBeInTheDocument()
})