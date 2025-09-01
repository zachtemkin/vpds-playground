import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

const Title = styled.h3`
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  border-bottom: 2px solid #0066cc;
  padding-bottom: 8px;
`;

const Description = styled.p`
  margin: 0 0 16px 0;
  font-size: 14px;
  color: #666;
  line-height: 1.4;
`;

const ComponentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 6px;
  border: 1px dashed #ccc;
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
