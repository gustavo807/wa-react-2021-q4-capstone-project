import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 40px;
  margin-top: 40px;
  text-align: center;
`;

export const Flex = styled.div`
  display: ${(props) => (props.container ? "flex" : "block")};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  flex-grow: ${(props) => props.flexGrow || 0};
  flex-basis: ${(props) => props.flexBasis || "auto"};
  flex-shrink: ${(props) => props.flexShrink || 1};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  flex: ${(props) => props.flex || "0 1 auto"};
  align-items: ${(props) => props.alignItems || "stretch"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  max-width: ${(props) => props.maxWidth || "none"};
  gap: ${(props) => props.gap || 0};

  @media (max-width: 768px) {
    flex-direction: ${(props) => props.mobileFlexDirection || "column"};
  }
`;

export const Submit = styled.input`
  background-color: #222222;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;

  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 14px 20px;
  border: none;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: ${(props) => props.mobileWidth || "auto"};
  }
  width: ${(props) => props.width || "auto"};
  text-align: ${(props) => props.textAlign || "center"};
`;

export const TextArea = styled.textarea`
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  width: ${(props) => props.width || "auto"};
`;

export const Button = styled.button`
  background-color: #222222;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;

  &:active {
    background-color: #b4adad;
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &:disabled,
  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }

  &.sm {
    font-size: 0.8rem;
  }

  &.md {
    font-size: 1rem;
  }

  &.lg {
    font-size: 1.2rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: ${(props) => props.textDecoration || "none"};

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: ${(props) => props.textDecoration || "none"};
    color: #222222;
  }
`;

export const FullWidthTable = styled.table`
  width: 100%;
`;

export const CenterCell = styled.td`
  text-align: center;
`;

export const Error = styled.span`
  color: red;
`;
