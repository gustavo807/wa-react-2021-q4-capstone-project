import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Item } from "./styled";

function SidebarItem({ id, name, toggleActive, active }) {
  return (
    <Item
      className={classNames({ active: active })}
      onClick={() => toggleActive(id)}
    >
      {name}
    </Item>
  );
}

SidebarItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  toggleActive: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default React.memo(SidebarItem);
