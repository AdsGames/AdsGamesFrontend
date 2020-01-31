import * as React from 'react'

import { StyledButton } from './Input.style'

const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = props => {
  return <StyledButton {...props} />
}

export default Button
