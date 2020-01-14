



import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = (props) => {
  return (
    <Form className="login">
        <Col >
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="You could put your email here... " />
          </FormGroup>
        </Col>
        <Col >
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Password goes here...dont not put Password" />
          </FormGroup>
        </Col>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Check me out</Label>
      </FormGroup>
      <Button className="well-btn">Welcome!</Button>
      
      <Button >Not a member?</Button>
    </Form>
  );
}

export default Login;


















{/* <InputGroup>
<Input placeholder="username" />
<InputGroupAddon addonType="append">
  <InputGroupText>@example.com</InputGroupText>
</InputGroupAddon>
</InputGroup> */}