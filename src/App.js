import React, { useState } from 'react'

import Form from './Components/Form'

function App() {


  const [members, setMembers] = useState([]);
  const [values, setValue] = useState({name: '', email:'', role: ''});
  /**
   * Create State variables to hold team members
   * and hold form values
   * 
   * Create update and submit functions
   */

  const onSubmit = () => {
    setMembers([values, ...members])
    setValue({name: '', email:'', role: ''});
  }

  const onChange = (name, value) => {
    setValue({...values, [name]: value})
  }
  return (
    <div className="App">
      <h1>Team Builder App!!</h1>
      <Form
        values={values}
        change-={onChange}
        submit={onSubmit}
      />
      {members.map((memeber, idx) => {
        return (
          <div key={idx}>
            {members.email}, {memeber.name}, {members.role}
          </div>
        )
      })}
    </div>
  );
}

export default App;
