'use client';

import { Form, Input, Checkbox, Button } from "antd"
import './login.css'
import { useRouter } from 'next/navigation';


const Login = () => {
  const router =  useRouter()
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const submit = (e: any) => {
    e.preventDefault()
    router.push('/about')
  }



  return (<div className="login-container">
    <h1>Login</h1>
    <form onSubmit={ (e)=> submit(e)}>
      <input type="text" placeholder="Username" required />
      <input className="mt-2" type="password" placeholder="Password" required />
      <button type="submit" className="mt-2" >Login</button>
    </form>
    <div className="wave"></div>
  </div>
  );
};

export default Login