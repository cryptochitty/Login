import axios from 'axios';
import React, {useState} from 'react';
import {Form, Button} from 'semantic-ui-react';

export default function App(){
  const [First, setName] = useState('');
  const [Last, setLast] = useState('');

  const onSubmit =()=>{
    axios.post('https://sheet.best/api/sheets/93d9a081-0785-4a50-bae1-33e1a5c050b3',{
      First, Last
    })

  }
  return(
    <div>
      <Form style ={{padding:20}}>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' onChange={(e) => setName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' onChange={(e) => setLast(e.target.value)} />
    </Form.Field>

    <Button type='submit' onClick={onSubmit}>Submit</Button>
  </Form>
    </div>
  )
}