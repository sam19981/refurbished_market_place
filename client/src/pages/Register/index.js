import React from "react";
import { Form, Input , Button, Divider} from "antd";
import FormItem from "antd/es/form/FormItem";
import { Link } from "react-router-dom";


const rules = [
  {
    required  : true,
    message : 'required'
  }
]


function Register() {

  const onFinish = (values) =>{
    console.log("Success",values);

  }

  return (
    <div className="h-screen bg-primary flex justify-center items-center">
      
      <div className="bg-white p-3 rounded w-[450px]">
        <h1 className="text-primary text-2xl">
          MP <span className="text-gray-400">REGISTER</span>
        </h1>
        <Divider/>
        <Form
        layout="vertical"
        onFinish={onFinish}
        >
          <Form.Item label="Name" name="name" rules={rules}>
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={rules}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={rules}>
            <Input placeholder="Password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block className="mt-2">
          Register
          </Button>
          <div className="mt-5 text-center">
          <span className="text-gray-500"> 
            Already have an account? {" "}
          <Link to ="/login" className="text-primary">Login</Link> 
          </span>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;