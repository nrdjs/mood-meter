
import React from 'react';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';



function Header() {
    return (
      <>
      <div className="App-Header" >
        <UncontrolledButtonDropdown>
          <DropdownToggle caret>
            Having Troubles?
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem >Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Request help!</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
        <h1>Mood Meter</h1>
        </div>

        
      </>
      );
  }
  
  export default Header;
  