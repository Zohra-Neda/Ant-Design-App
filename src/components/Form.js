import { useState } from 'react';
import { Form, Input, Button } from 'antd';

function MyForm() {
  const [formCount, setFormCount] = useState(1);

  const onFinish = (values) => {
    console.log('Form values:', values); // log form values
  };

  const handleButtonClick = () => {
    setFormCount(formCount + 1);
  };

  const renderFormInputs = () => {
    const inputs = [];

    for (let i = 0; i < formCount; i++) {
      inputs.push(
        <Form.Item key={i} name={`input-${i}`} label={`Input ${i + 1}`} style={{ width: '35rem' }}>
          <Input />
        </Form.Item>
      );
    }

    return inputs;
  };

  return (
    <>
      <Form onFinish={onFinish}>
        {renderFormInputs()}
        <Form.Item>
          <Button type="primary" onClick={handleButtonClick} size="large">Add Form Inputs</Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default MyForm;