import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';
const Filter_acordion = ({id,checkBox,title,options}) => (
  <div>
    <Button className="text-left" size="lg" block outline color="info" id={id} style={{ marginBottom: '1rem' }}>
    {title}
    </Button>
    <UncontrolledCollapse toggler={`#${id}`}>
        <Form>
        <FormGroup>
          <CustomInput type="checkbox" id={checkBox} label={`${options[0]}`} />
          <CustomInput type="checkbox" id={`${checkBox}2`} label={`${options[1]}`} />
          <CustomInput type="checkbox" id={`${checkBox}3`} label={`${options[2]}`} />
      </FormGroup>
      </Form>
    </UncontrolledCollapse>
  </div>
);

export default Filter_acordion;
