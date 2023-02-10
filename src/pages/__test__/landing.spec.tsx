import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Landing from '../Landing'

describe('Landing', () => {
  it('displays heading', () => {
    render(<Landing />, {
      wrapper: BrowserRouter,
    })
    const heading = screen.getByText('Landing page')

    expect(heading).toBeInTheDocument()
  })
})
