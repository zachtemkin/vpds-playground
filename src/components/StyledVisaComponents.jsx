import styled from "styled-components";
import {
  Button,
  ContentCard,
  ContentCardBody,
  ContentCardTitle,
  Link,
  Typography,
  Utility,
} from "@visa/nova-react";

// Styled versions of Visa Nova components
// These components maintain all the original functionality while adding custom styling

// Styled Button with custom appearance
export const StyledButton = styled(Button)`
  border-radius: 8px !important;
  font-weight: 600 !important;
  transition: all 0.2s ease-in-out !important;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  border: none !important;

  &:hover {
    transform: translateY(-1px) !important;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15) !important;
    background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%) !important;
  }

  &:active {
    transform: translateY(0) !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
  }
`;

// Styled ContentCard with custom shadows and borders
export const StyledContentCard = styled(ContentCard)`
  border-radius: 16px !important;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
  border: 1px solid rgba(102, 126, 234, 0.1) !important;
  transition: all 0.3s ease-in-out !important;

  &:hover {
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15) !important;
    transform: translateY(-2px) !important;
  }
`;

// Styled ContentCardTitle with custom typography
export const StyledContentCardTitle = styled(ContentCardTitle)`
  color: #2d3748 !important;
  font-weight: 700 !important;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif !important;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin-top: 8px;
    border-radius: 2px;
  }
`;

// Styled Typography with custom styling
export const StyledTypography = styled(Typography)`
  color: #4a5568 !important;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif !important;
  line-height: 1.6 !important;
`;

// Styled Link with custom appearance
export const StyledLink = styled(Link)`
  color: #667eea !important;
  font-weight: 600 !important;
  text-decoration: none !important;
  transition: all 0.2s ease-in-out !important;

  &:hover {
    color: #5a67d8 !important;
    text-decoration: underline !important;
    transform: translateX(2px) !important;
  }
`;

// Styled ContentCardBody with custom padding
export const StyledContentCardBody = styled(ContentCardBody)`
  padding: 1.5rem !important;
`;

// Styled Utility with custom spacing
export const StyledUtility = styled(Utility)`
  &.v-gap-16 {
    gap: 1rem !important;
  }

  &.v-pt-12 {
    padding-top: 0.75rem !important;
  }

  &.v-pt-4 {
    padding-top: 0.25rem !important;
  }
`;

// Export the original components as well for flexibility
export {
  Button,
  ContentCard,
  ContentCardBody,
  ContentCardTitle,
  Link,
  Typography,
  Utility,
};
