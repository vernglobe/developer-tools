import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ItemsList,
  ItemContainer,
  ItemWrapper,
  ItemName,
  SidebarSubtitle,
} from "./SidebarStyles";

import { dummyData } from "..";

const SidebarItems = ({displaySidebar }: any) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <>
      <ItemsList>
        {dummyData.map((itemData: any, index: number) => (
          <ItemContainer
            key={index}
            onClick={() => setActiveItem(itemData.id)}
            className={itemData.id === activeItem ? "active" : ""}>
            <a href={itemData.path}>
              <ItemWrapper>
                {itemData.icon}
                <ItemName displaySidebar={displaySidebar}>
                  
                  {itemData.name}
                </ItemName>
              </ItemWrapper>
            </a>
          </ItemContainer>
        ))}
    </ItemsList>
    </>
  );
};

export default SidebarItems;
