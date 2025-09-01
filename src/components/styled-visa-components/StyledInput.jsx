import styled from "styled-components";
import { Input, InputContainer, Label, Utility } from "@visa/nova-react";
import { theme } from "../../theme";

export const StyledInputContainer = styled(InputContainer)`
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;

  &:not(:has(.v-input:focus-visible)):not(:hover) {
    border-color: ${theme.colors.gray[300]};
  }
`;

export const StyledInput = styled(Input)`
  height: 2rem;
  line-height: 2rem;
`;

export const StyledLabel = styled(Label)`
  padding-left: calc(0.75rem - 1px);
`;

// Single input component that accepts a unique ID and can display styled or unstyled version
const SingleInput = ({ id, label, useStyledComponents = true }) => {
  if (useStyledComponents) {
    return (
      <Utility vFlex vFlexCol vGap={8}>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        <StyledInputContainer>
          <StyledInput aria-required='true' id={id} type='text' />
        </StyledInputContainer>
      </Utility>
    );
  }

  return (
    <Utility vFlex vFlexCol vGap={8}>
      <Label htmlFor={id}>{label}</Label>
      <InputContainer>
        <Input aria-required='true' id={id} type='text' />
      </InputContainer>
    </Utility>
  );
};

// Styled Input component with additional padding
export const StyledDefaultInput = () => {
  return (
    <div style={{ width: "100%" }}>
      <SingleInput
        id='styled-input-1'
        label='Styled Input Label'
        useStyledComponents={true}
      />
      <br />
      <SingleInput
        id='styled-input-2'
        label='Default Input Label'
        useStyledComponents={false}
      />
    </div>
  );
};

export default StyledDefaultInput;
