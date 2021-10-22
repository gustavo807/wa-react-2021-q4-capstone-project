import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Item } from "./styled";

function SidebarItem({ id, name, toggleFilter }) {
  const [active, setActive] = useState(false);

  function handleToggle() {
    setActive(!active);
    toggleFilter(id);
  }

  return (
    <Item
      disabled={true}
      className={classNames({ active: active })}
      onClick={handleToggle}
    >
      {name}
    </Item>
  );
}

SidebarItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  toggleFilter: PropTypes.func.isRequired,
};

export default React.memo(SidebarItem);
