import React from 'react';
import { Row, Col } from 'antd';
import './App.less';
import UseFormController from './components/formUseController/UseFormController';
import FormController from './components/formController/FormController';

const App = () => {
  return (
    <Row justify='start' align='middle' style={{ height: '100vh' }}>
      <Col xs={{ span: 8, offset: 2 }}>
        <h3>UseFormController</h3>
        <UseFormController />
      </Col>
      <Col xs={{ span: 8, offset: 2 }}>
        <h3>FormController</h3>
        <FormController />
      </Col>
    </Row>
  );
};

export default App;
