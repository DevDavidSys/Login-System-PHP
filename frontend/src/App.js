
import './App.css';
import img from './bg-01.jpg'
import {useForm} from 'react-hook-form';
import styled from "styled-components";
import axios from "axios";

function App() {

  const Alert = styled.p`
  border: red 1px solid;
  justify-content:center;
  margin:10px;
  background-color: rgba(255,0,0,0.3);
  font-family:Georgia, 'Times New Roman', Times, serif;
  `

  const {register,handleSubmit,setValue} = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
     axios.post('localhost:5000/login',JSON.stringify(data),{headers:{
      'content-type':'application/json'
    }}).then((res)=>{console.log(res)});
  }
  return (
    <div className="App">
      <div className='form_container'>
        <div className='header_form'>
          <h1>Sing in</h1>
        </div>
        <form className='form' onSubmit={handleSubmit(onSubmit)} >
          <div className='space'>
            <label>Username</label>
            <input
              placeholder="Enter Username"
              type="text"
              req
              {...register('username',{required: true})}
            />
          </div>
          <div className='space'>
            <label>Email</label>
            <input
              placeholder="Enter Password"
              type="password"
              {...register('password',{required:true})}
            />
          </div>
          <div>
            <div className='space'>
              <div  >
                <input type="checkbox" className='checkbox' {...register('remember')}/>
                 </div>
              <label><a>Forgot Password?</a></label> 
            </div>
            <div>
              <input
                placeholder='Submit'
                type="Submit"
                className='Submit'
                /> 
            </div>
            <Alert className='hide'>Error: username and password do not match</Alert>
            </div>
        </form>
      </div>
    </div>
  );
}

export default App;
