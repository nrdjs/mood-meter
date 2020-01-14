
import React, { useState } from 'react';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';



const Header = (props) => {

  
    const {
      buttonLabel,
      className
    } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);


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
            <Button color="primary" onClick={toggle}> Help me! </Button>
            <Modal isOpen={modal} className={className}>
        <ModalHeader >Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" >Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
        <h1>Mood Meter</h1>
        </div>

        
      </>
      );
  }
  
  export default Header;
  