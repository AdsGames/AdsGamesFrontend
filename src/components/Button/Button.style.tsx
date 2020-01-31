import { darken } from 'polished'
import styled from '@emotion/styled'

import { colors, dimensions } from '../../styles/variables'

export const StyledButton = styled.button`
  min-height: 30px;
  background-color: ${colors.ui.input};
  text-align: center;
  font-weight: 600;
  font-size: ${dimensions.fontSize.regular}px;
  padding: ${dimensions.radius.input}px;

  border-radius: 5px;
  border-left: 0;
  border-right: 0;
  border-bottom: 3px solid ${darken(0.1, colors.ui.input)};
  border-top: 0px solid transparent;
  box-shadow: 0 1px 1px 0 ${colors.boxShadow};

  transition: all 0.1s ease-in;

  &:hover {
    border-bottom: 2px solid ${darken(0.1, colors.ui.input)};
    border-top: 1px solid transparent;
    box-shadow: 0 0.5px 1px 0 ${colors.boxShadow};
  }

  &:active {
    border-bottom: 0px solid transparent;
    border-top: 3px solid ${darken(0.4, colors.ui.input)};
    box-shadow: inset 0 1px 8px -1px ${colors.boxShadow};
  }
`
