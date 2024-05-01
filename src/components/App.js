{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}

import React, { useState } from 'react'

const App = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const [emailError, setemailError] = useState(true)
    const [passwordError, setpasswordError] = useState(true)

    let userArr=[
        {
            id: 1,
            name: "ABC",
            email: "abc@gmail.com",
            password: "12"
        },
        {
            id: 2,
            name: "DEF",
            email: "def@gmail.com",
            password: "1234"
        },
        {
            id: 3,
            name: "GHI",
            email: "ghi@gmail.com",
            password: "123456"
        }
    ]

    function handleSubmit(e){
        e.preventDefault();
        setTimeout(() => {
            const user=userArr.find((userObj)=>{
                return userObj.email===email
            })
            if (!user) {
                setemailError(true);
                return;
            }else{
                setemailError(false)
            }
            if (user.password!==password) {
                setpasswordError(true)
            }else{
                setpasswordError(false);
                setemailError(false);
                setemail("")
                setpassword("")
            }
            
        }, 3000);
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type='email'  value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter the email' id='input-email' name='email' />
        <input  type='password'  value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Enter the password' id='input-password' name='password' />
        <button id="submit-form-btn" type="submit">Submit</button>
        <div>
          {emailError &&  <p id='user-error'>User not found</p>}
          {passwordError &&  <p id='password-error'>Password incorrect</p>}
        </div>
    </form>
  )
}

export default App