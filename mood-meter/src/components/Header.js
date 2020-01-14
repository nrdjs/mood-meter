
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
        <ModalHeader >Everyone needs help sometimes</ModalHeader>
        <ModalBody>
        Experienced meditators agree: a daily meditation practice can have significant benefits for mental and physical health. But one thing they probably won’t agree on? The most effective types of meditation. That’s simply because it’s different for everyone. After all, there are literally hundreds of meditation techniques encompassing practices from different traditions, cultures, spiritual disciplines, and religions. There’s not a universally accepted “best” or “most effective” type; rather, it is our individual preference that helps us choose the one (or ones) that works best for us. Here’s a breakdown of some of the more popular types of meditation to get you started.        </ModalBody>
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
  