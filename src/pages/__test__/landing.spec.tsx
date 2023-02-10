import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Landing from '../Landing'

describe('Security Setting', () => {
  it('display security panel tabs', () => {
    render(<Landing />, {
      wrapper: BrowserRouter,
    })
    const heading = screen.getByText('Landing page')

    expect(heading).toBeInTheDocument()
  })
})
