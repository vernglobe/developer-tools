import styled from "styled-components";

export const TopbarWrapper = styled.div`
  min-height: 78px;
  padding: 16px;
  position: relative;
`;

export const TopbarLogo = styled.a`
  display: inline;
  align-items: center;
  justify-content: left;
  position: absolute;
  left: 100px;
  @media (max-width: 468px) {
    display: none;
  }
`;

export const TopbarBrand = styled.span<{displaySidebar: boolean}>`
  display: block;
`;