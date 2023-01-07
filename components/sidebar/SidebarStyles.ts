import styled from "styled-components";

export const TopbarBrand = styled.span<{displaySidebar: boolean}>`
  
`;

// Children Component
export const Children = styled.div<{displaySidebar: boolean}>`
  width: 100%;
  @media (max-width: 468px) {

  }
`;

export const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
`;

export const SidebarLogoWrapper = styled.div<{displaySidebar: boolean}>`
  padding: 0.5rem 0rem 0rem 0rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: ${({ displaySidebar }) =>
    displaySidebar ? "space-between" : "center"};
  align-items: center;

  @media (max-width: 468px) {
    justify-content: center;
  }
`;

export const SidebarLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 468px) {
    display: none;
  }
`;

export const SidebarBrand = styled.span<{displaySidebar: boolean}>`
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};
`;

export const SidebarToggler = styled.button<{displaySidebar: boolean}>`
  cursor: pointer;
  display: block;
  border-radius: 10px;
  padding:5px;
  background: #DFFADF;
  color: #377D22 !important;
  
  @media (max-width: 468px) {

  }

  &:hover {
    background: #377D22;
    color: #ffffff !important;

  }
`;

// SidebarItem styles
export const ItemsList = styled.ul`
  list-style: none;
  padding-left: 0 !important;
`;

export const ItemContainer = styled.li`
  margin-top: 0.5rem;
  padding: 0.5rem 0.85rem !important;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.334em;
  font-family: 'Roboto',sans-serif;
  border: 1px solid #377D22;
  padding: 10px;
  font-weight: bold;

  &:hover {
    background: #C0FACF;
    box-shadow: 5px 10px 20px #87BA7D;
    border: 1px solid #377D22;
  }

  &.active {
    background: #ede7f6;
    color: #5e35b1 !important;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #377D22;

  &:hover {

  }
`;

export const ItemName = styled.span<{displaySidebar: boolean}>`
  margin-left: ${({ displaySidebar }) => (displaySidebar ? "0.5rem" : "0rem")};
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};
  text-transform: capitalize;

  @media (max-width: 468px) {
    display: none;
  }
`;

// Sidebar Container
export const SidebarContainer = styled.div<{displaySidebar: boolean}>`
  position: relative;
  left: 0;
  top: 100px;
  width: ${({ displaySidebar }) => (displaySidebar ? "16rem" : "5rem")};
  min-width: 5rem;
  height: 100%;
  padding: 0.75rem;
  border-radius: 20px 0px 0px 20px;
  background: ${({ displaySidebar }) => (displaySidebar ? "#A4FF90" : "#A4FF90")}; 
  box-shadow: ${({ displaySidebar }) => (displaySidebar ? "20px 0px 30px #A1FA4F inset" : "")};
  transition: width 350ms ease;
  overflow-x: hidden;
  ${ItemWrapper} {
    justify-content: ${({ displaySidebar }) => !displaySidebar && "center"};
  }

  &:hover {
    @media (min-width: 468px) {
      width: ${({ displaySidebar }) => !displaySidebar && "15rem"};

      ${SidebarLogoWrapper} {
        justify-content: ${({ displaySidebar }) =>
          !displaySidebar && "space-between"};
      }

      ${SidebarBrand} {
        display: ${({ displaySidebar }) => !displaySidebar && "block"};
      }

      ${SidebarToggler} {
        display: ${({ displaySidebar }) => !displaySidebar && "block"};
      }

      ${ItemWrapper} {
        justify-content: ${({ displaySidebar }) =>
          !displaySidebar && "flex-start"};
      }

      ${ItemName} {
        display: ${({ displaySidebar }) => !displaySidebar && "block"};
        margin-left: ${({ displaySidebar }) => !displaySidebar && "0.5rem"};
      }
    }
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 3px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #eaeced;

    &:hover {
      background: #d5e0f3;
      
    }
  }

  @media (max-width: 468px) {
    width: 5rem;
  }
`;

export const SidebarSubtitle = styled.span`
  font-weight: bold;
  color: #7c7788;
`