import React from 'react';
import { Checkbox, useTheme } from '@aragon/ui';
import styled from 'styled-components';

const checkBoxProps = {
  text: String,
  checked: Boolean,
  onCheck: Function
}

function MyCheckBox({ text, checked, onCheck } = checkBoxProps) {
  const theme = useTheme();
  return (
    <CheckBoxWrapper theme={theme}>
      <Checkbox
        checked={checked}
        onChange={onCheck}
      />
      <span style={{ paddingBottom: '5px' }}>
        {text}
      </span>
      <br />
    </CheckBoxWrapper>
  );
}

export default MyCheckBox;

const CheckBoxWrapper = styled.div`{
  padding: 5px;
  font-size: 14px;
  color: ${(props) => props.theme.surfaceContentSecondary}
}`;