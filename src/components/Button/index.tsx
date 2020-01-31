import * as React from 'react'

import { StyledButton } from './Button.style'

const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = props => {
  return <StyledButton {...props} />
}

export default Button
