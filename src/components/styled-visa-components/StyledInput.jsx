import styled from "styled-components";
import { Input, InputContainer, Label, Utility } from "@visa/nova-react";
import { theme } from "../../theme";

const StyledInputContainer = styled(InputContainer)`
  padding: 0.75rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;

  &:not(:has(.v-input:focus-visible)):not(:hover) {
    border-color: ${theme.colors.gray[300]};
  }
`;

const StyledLabel = styled(Label)`
  padding-left: 0.75rem;
`;

const id = "default-input";

// Styled Input component with additional padding
export const StyledDefaultInput = () => {
  return (
    <div style={{ width: "100%" }}>
      <Utility vFlex vFlexCol vGap={8}>
        <StyledLabel htmlFor={id}>Input Label</StyledLabel>
        <StyledInputContainer>
          <Input aria-required='true' id={id} type='text' />
        </StyledInputContainer>
      </Utility>
      <br />
      <Utility vFlex vFlexCol vGap={8}>
        <Label htmlFor={id}>Input Label</Label>
        <InputContainer>
          <Input aria-required='true' id={id} type='text' />
        </InputContainer>
      </Utility>
    </div>
  );
};

export default StyledDefaultInput;
