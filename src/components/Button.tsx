import React from "react";
import styled from "styled-components";
import { Spinner } from "./Spinner";
import { Intent } from "../schemas/Intent";

const StyledButton = styled.button`
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  border-radius: ${p => p.theme.Surface.radius.sm};
  padding-left: ${props => props.theme.Density.spacing.md};
  padding-right: ${props => props.theme.Density.spacing.md};
  outline: none;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: ${p => p.theme.Typography.size.base};
  transition: all 100ms ease-in-out;
  height: 40px;
  font-weight: 500;
  border: 1px solid ${props => props.theme.Color.gray.base};
  color: ${props => props.theme.Color.text.base};
  background: #fff;
  text-decoration: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.01);

  svg {
    fill: ${props => props.theme.Color.text.light};
  }

  &:hover {
    background: ${p => p.theme.Color.gray.veryLight};
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.07);
  }

  &:active {
    box-shadow: 0 0 0 3px ${props => props.theme.Color.primary.veryLight}33;
    background: ${p => p.theme.Color.gray.veryLight};
    color: ${props => props.theme.Color.text.light};
  }

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }
`;

const PrimaryButton = styled(StyledButton)`
  background: ${props => props.theme.Color.primary.base};
  color: #fff;
  border: 1px solid transparent;

  &:hover {
    background: ${props => props.theme.Color.primary.dark};
    color: #fff;
  }

  &:active {
    background: ${props => props.theme.Color.primary.veryDark};
    color: #fff;
    border: 1px solid ${props => props.theme.Color.primary.veryLight};
    box-shadow: 0 0 0 3px ${props => props.theme.Color.primary.veryLight}88;
  }
`;

const DangerButton = styled(StyledButton)`
  background: ${props => props.theme.Color.danger.base};
  color: #fff;
  border: 0;

  &:hover {
    background: ${props => props.theme.Color.danger.dark};
    color: #fff;
  }

  &:active {
    background: ${props => props.theme.Color.danger.dark};
    color: #fff;
  }
`;

const IconButton = styled(StyledButton)`
  padding-left: ${props => props.theme.Density.spacing.sm};
  padding-right: ${props => props.theme.Density.spacing.sm};
`;

type ButtonProps = {
  primary?: boolean;
  saving?: boolean;
  onClick?: any;
  intent?: Intent;
};

type Props = ButtonProps & React.PropsWithoutRef<JSX.IntrinsicElements["button"]>;

export const Button: React.FC<Props> = props => {
  const { intent, children, onClick, saving, disabled } = props;

  const ButtonInner = () => (
    <>{saving ? <Spinner compact inverted={intent === Intent.Primary} /> : children}</>
  );

  const buttonProps = { disabled: disabled || saving, onClick: onClick, ...props };

  const BuildButton = () => {
    switch (intent) {
      case Intent.Primary:
        return (
          <PrimaryButton {...buttonProps}>
            <ButtonInner />
          </PrimaryButton>
        );
      case Intent.Danger:
        return (
          <DangerButton {...buttonProps}>
            <ButtonInner />
          </DangerButton>
        );
      case Intent.Icon:
        return (
          <IconButton {...buttonProps}>
            <ButtonInner />
          </IconButton>
        );
      case Intent.None:
      default:
        return (
          <StyledButton {...buttonProps}>
            <ButtonInner />
          </StyledButton>
        );
    }
  };

  return <BuildButton />;
};

Button.defaultProps = {
  intent: Intent.None
};
