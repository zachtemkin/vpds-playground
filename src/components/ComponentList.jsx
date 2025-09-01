import React from "react";
import styled from "styled-components";
import ComponentContainer from "./ComponentContainer";
import StyledDefaultInput from "./styled-visa-components/StyledInput";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  padding: 32px 24px;
  background: linear-gradient(135deg, #0066cc 0%, #004499 100%);
  color: white;
  margin-bottom: 24px;
`;

const HeaderTitle = styled.h1`
  margin: 0 0 16px 0;
  font-size: 2.5rem;
  font-weight: 700;
`;

const HeaderSubtitle = styled.p`
  margin: 0;
  font-size: 1.2rem;
  opacity: 0.9;
`;

// Error boundary component for individual components
const ComponentErrorBoundary = ({ children, fallback }) => {
  try {
    return children;
  } catch {
    return fallback || <div>Component failed to render</div>;
  }
};

const ComponentList = () => {
  return (
    <div style={{ width: "100%" }}>
      <Header>
        <HeaderTitle>Visa Nova Components</HeaderTitle>
        <HeaderSubtitle>
          A comprehensive showcase of available Visa Nova React components
        </HeaderSubtitle>
      </Header>

      <GridContainer>
        <ComponentErrorBoundary>
          <ComponentContainer title={"Input"}>
            <StyledDefaultInput />
          </ComponentContainer>
        </ComponentErrorBoundary>
      </GridContainer>
    </div>
  );
};

export default ComponentList;
