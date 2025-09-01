import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
`;

const Title = styled.h3`
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  border-bottom: 2px solid #0066cc;
  padding-bottom: 8px;
`;

const ComponentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  padding: 1rem 0;
  /* border-radius: 6px; */
  /* border: 1px dashed #ccc; */
`;

const ComponentContainer = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ComponentWrapper>{children}</ComponentWrapper>
    </Container>
  );
};

export default ComponentContainer;
