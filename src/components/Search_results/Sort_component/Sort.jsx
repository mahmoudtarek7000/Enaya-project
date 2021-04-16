import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Sort = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown className="d-flex justify-content-end mt-4 " isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="btn btn-info" caret>
        Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Sort;