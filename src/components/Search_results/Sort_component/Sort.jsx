import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Sort = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown className="d-flex justify-content-end mt-4 " isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="btn btn-info" caret>
        Sort by
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>nearest</DropdownItem>
        <DropdownItem>best rated</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Sort;