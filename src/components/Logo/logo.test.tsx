import '@testing-library/jest-dom'

import { screen } from '@testing-library/dom'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo $color="black" />)

    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render normal logo when size is default', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '6.875rem'
    })
  })

  it('should render bigger logo', () => {
    renderWithTheme(<Logo $size="large" />)

    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '12.5rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo $hideOnMobile />)

    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyleRule(
      'width',
      '3.625rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
