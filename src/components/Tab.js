import React, { useState } from 'react';
import { Tabs, Button, Modal, Collapse, Form, Input, Table } from 'antd';
import { useForm } from 'antd/lib/form/Form';

const { TabPane } = Tabs;
const { Panel } = Collapse;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Job',
    dataIndex: 'job',
    key: 'job',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];




function Tab() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nameIT, setNameIT] = useState('');
  const [nameFinance, setNameFinance] = useState('');
  const [nameHR, setNameHR] = useState('');
  const [nameMarketing, setNameMarketing] = useState('');
  const [nameOperation, setNameOperation] = useState('');
  const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);
  const [form] = useForm();
  const [employeesIT, setEmployeesIT] = useState([]);
  const [employeesFinance, setEmployeesFinance] = useState([]);
  const [employeesHR, setEmployeesHR] = useState([]);
  const [employeesMarketing, setEmployeesMarketing] = useState([]);
  const [employeesOperation, setEmployeesOperation] = useState([]);


  const showModal = (department) => {
    form.setFieldsValue({ department });
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (values) => {
    if (values.department === 'IT') {
      setNameIT(values.name);
    } else if (values.department === 'Finance') {
      setNameFinance(values.name);
    } else if (values.department === 'HR') {
      setNameHR(values.name);
    } else if (values.department === 'Marketing') {
      setNameMarketing(values.name);
    } else if (values.department === 'Operation') {
      setNameOperation(values.name);
    }
    setIsModalOpen(false);
    form.resetFields();
  };

  // Employee Modal Functions

  const showEmployeeModal = (department) => {
    form.setFieldsValue({ department });
    setIsEmployeeModalOpen(true);
  };

  const handleEmployeeModalOk = () => {
    setIsEmployeeModalOpen(false);
  };

  const handleEmployeeModalCancel = () => {
    setIsEmployeeModalOpen(false);
  };

  const handleEmployeeFormSubmit = (values) => {
  const { department, name, job, age, address } = values;
  
  const employee = {
    name,
    job,
    age,
    address,
  };

  if (department === 'IT') {
    setEmployeesIT([...employeesIT, employee]);
  } else if (department === 'Finance') {
    setEmployeesFinance([...employeesFinance, employee]);
  } else if (department === 'HR') {
    setEmployeesHR([...employeesHR, employee]);
  } else if (department === 'Marketing') {
    setEmployeesMarketing([...employeesMarketing, employee]);
  } else if (department === 'Operation') {
    setEmployeesOperation([...employeesOperation, employee]);
  }

  setIsEmployeeModalOpen(false);
  form.resetFields();
};



  return (
    <div>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="IT Department" key="1">
          <Button type="default" onClick={() => showModal('IT')}>Add Manager</Button>
        </TabPane>
        <TabPane tab="Finance Department" key="2">
          <Button type="default" onClick={() => showModal('Finance')}>Add Manager</Button>
        </TabPane>
        <TabPane tab="HR Department" key="3">
          <Button type="default" onClick={() => showModal('HR')}>Add Manager</Button>
        </TabPane>
        <TabPane tab="Marketing Department" key="4">
          <Button type="default" onClick={() => showModal('Marketing')}>Add Manager</Button>
        </TabPane>
        <TabPane tab="Operation Department" key="5">
          <Button type="default" onClick={() => showModal('Operation')}>Add Manager</Button>
        </TabPane>
      </Tabs>

      {/* Manager Modal */}
      <Modal title="Add Manager" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} onFinish={handleFormSubmit}>
          <Form.Item name="department" hidden={true}>
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please enter a name',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form>
      </Modal>
      <br />

      {/* Employee Modal */}
      <Modal title="Add Employee" open={isEmployeeModalOpen} onOk={handleEmployeeModalOk} onCancel={handleEmployeeModalCancel}>
        <Form form={form} onFinish={handleEmployeeFormSubmit}>
          <Form.Item name="department" hidden={true}>
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please enter a name',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="job"
            label="Job"
            rules={[
              {
                required: true,
                message: 'Please enter your job title',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="age"
            label="Age"
            rules={[
              {
                required: true,
                message: 'Please enter a number',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
                message: 'Please enter an address',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form>
      </Modal>

      {/* Collapse */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '50%' }}>
          <Collapse>
            <Panel header={`(IT Dep) Manager : ${nameIT}`} key="1">
              <Button type="default" onClick={() => showEmployeeModal('IT')}>Add Employee</Button>
              <Table dataSource={employeesIT} columns={columns} style={{marginTop: '15px'}}/>
            </Panel>
          </Collapse>
          <Collapse>
            <Panel header={`(Finance Dep) Manager : ${nameFinance}`} key="2">
              <Button type="default" onClick={() => showEmployeeModal('Finance')}>Add Employee</Button>
              <Table dataSource={employeesFinance} columns={columns} style={{marginTop: '15px'}}/>
            </Panel>
          </Collapse>
          <Collapse>
            <Panel header={`(HR Dep) Manager : ${nameHR}`} key="3">
              <Button type="default" onClick={() => showEmployeeModal('HR')}>Add Employee</Button>
              <Table dataSource={employeesHR} columns={columns} style={{marginTop: '15px'}}/>
            </Panel>
          </Collapse>
          <Collapse>
            <Panel header={`(MK Dep) Manager : ${nameMarketing}`} key="4">
              <Button type="default" onClick={() => showEmployeeModal('Marketing')}>Add Employee</Button>
              <Table dataSource={employeesMarketing} columns={columns} style={{marginTop: '15px'}}/>
            </Panel>
          </Collapse>
          <Collapse>
            <Panel header={`(OP Dep) Manager : ${nameOperation}`} key="5">
              <Button type="default" onClick={() => showEmployeeModal('Operation')}>Add Employee</Button>
              <Table dataSource={employeesOperation} columns={columns} style={{marginTop: '15px'}}/>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default Tab;
