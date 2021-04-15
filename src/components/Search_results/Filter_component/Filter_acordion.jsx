import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';
const Filter_acordion = ({id,checkBox}) => (
  <div>
    <Button className="text-left" size="lg" block outline color="info" id={id} style={{ marginBottom: '1rem' }}>
      option
    </Button>
    <UncontrolledCollapse toggler={`#${id}`}>
        <Form>
        <FormGroup>
          <CustomInput type="checkbox" id={checkBox} label="Check this" />
          <CustomInput type="checkbox" id={`${checkBox}2`} label="Or this one" />
          <CustomInput type="checkbox" id={`${checkBox}3`} label="Or this one" />
          <CustomInput type="checkbox" id={`${checkBox}4`} label="Or this one" />
      </FormGroup>
      </Form>
    </UncontrolledCollapse>
  </div>
);

export default Filter_acordion;
