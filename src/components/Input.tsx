import React, { Component } from 'react'
import styled from 'styled-components'
import { Surface, Typography, Color } from '../styles/Theme'

const StyledInput = styled.input`
  border-radius: ${Surface.defaultRadius};
  border: 1px solid transparent;
  box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
  font-size: 15px;
  outline: none;
  box-sizing: border-box;
  transition: all 100ms ease-in-out;
  color: ${Color.text.light};
  display: block;
  padding: 5px 15px;
  height: 34px;
  width: 100%;
  font-family: ${Typography.defaultFontFamily};

  &::-webkit-input-placeholder {
    color: ${Color.text.light};
    opacity: 0.3;
  }

  &::-moz-placeholder {
    color: ${Color.text.light};
    opacity: 0.3;
  }

  &:-ms-input-placeholder {
    color: ${Color.text.light};
    opacity: 0.3;
  }

  &:focus {
    border: 1px solid ${Color.primary.veryLight};
  }
`

const InputLabel = styled.label`
  color: ${Color.text.light};
  opacity: 0.6;
  font-size: 15px;
  margin-bottom: 8px; /* TODO: subspacing from Theme.ts */
  display: block;
`

type Props = {
  label?: string
  placeholder?: string
  value?: string
  readonly?: boolean
}

export const Input: React.FC<Props> = props => {
  const { label } = props

  return (
    <div className="amino-input-wrapper">
      {label && <InputLabel>{label}</InputLabel>}
      <StyledInput {...props} size={50} />
    </div>
  )
}
