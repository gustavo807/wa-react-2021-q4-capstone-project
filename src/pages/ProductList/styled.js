import styled from "styled-components";

export const WrapperProductList = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.div`
  width: 200px;
  height: 100%;

  &.loading {
    opacity: 0.5;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SidebarTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  padding-left: 16px;
`;

export const ClearFilters = styled.div`
  margin-left: 16px;
`;

export const Content = styled.div`
  flex: 1 0 auto;
`;
