import React, { useState } from "react";
import classNames from "classnames";
import { Item } from "./styled";

function SidebarItem({ id, name, onClick }) {
  const [active, setActive] = useState(false);

  function handleClick(id) {
    setActive(!active);
    onClick(id);
  }

  return (
    <Item
      disabled={true}
      className={classNames({ active: active })}
      onClick={() => handleClick(id)}
    >
      {name}
    </Item>
  );
}

export default React.memo(SidebarItem);
