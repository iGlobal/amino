import React from "react";
import styled from "styled-components";

import { DropdownIcon } from "../icons/DropdownIcon";
import { Typography } from "../styles/Theme";

const SelectContainer = styled.div`
  border-radius: ${p => p.theme.Surface.radius.sm};
  font-size: ${p => p.theme.Typography.size.base};
  outline: none;
  box-sizing: border-box;
  transition: all 100ms ease-in-out;
  color: ${props => props.theme.Color.text.light};
  display: block;
  height: 40px;
  width: 100%;
  padding: 0;
  position: relative;
  background: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.01);

  svg {
    position: absolute;
    right: ${props => props.theme.Density.spacing.sm};
    top: 8px;
    fill: ${props => props.theme.Color.text.veryLight}88;
  }
`;

const StyledSelect = styled.select`
  padding: ${props => props.theme.Density.spacing.xs} ${props => props.theme.Density.spacing.sm};
  border: 1px solid ${props => props.theme.Color.gray.base};
  width: 100%;
  height: 40px;
  font-size: ${p => p.theme.Typography.size.base};
  line-height: ${p => p.theme.Typography.size.base};
  box-shadow: none;
  background: transparent;
  color: ${props => props.theme.Color.text.light};
  font-family: ${Typography.defaultFontFamily};
  -webkit-appearance: none;

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.Color.primary.veryLight};
    box-shadow: 0 0 0 3px ${props => props.theme.Color.primary.veryLight}88;
  }
`;

const SelectLabel = styled.label`
  color: ${props => props.theme.Color.text.light};
  font-size: ${p => p.theme.Typography.size.base};
  display: block;
  font-weight: 500;
  margin-bottom: ${p => p.theme.Density.spacing.xs};
`;

const StyledDropdownIcon = styled(DropdownIcon)`
  pointer-events: none;
`;

type Props = {
  items: Array<any>;
  label?: string;
  itemLabelPath?: string;
  itemValuePath?: string;
  onChange?: any;
  defaultValue?: any;
};

export const Select: React.FC<Props> = props => {
  const { label, items, itemValuePath, itemLabelPath, onChange, defaultValue } = props;

  const renderedOptions = items.map((item, index) => {
    const value = itemValuePath ? item[itemValuePath] : item.value;
    const label = itemLabelPath ? item[itemLabelPath] : item.label;

    return (
      <option value={value} key={index}>
        {label}
      </option>
    );
  });

  return (
    <div className="amino-input-wrapper">
      {label && <SelectLabel>{label}</SelectLabel>}
      <SelectContainer>
        <StyledSelect
          onChange={(e: any) => onChange && onChange(e.target.value)}
          defaultValue={defaultValue}
        >
          {renderedOptions}
        </StyledSelect>
        <StyledDropdownIcon />
      </SelectContainer>
    </div>
  );
};
