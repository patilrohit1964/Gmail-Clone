import React from 'react'

const SignUp = () => {
  return (
    <div className='signup-wrapper'>
      <div className='signup-box'>
        <div className="signup-left">
          <img src="" alt="not found add in future" />
          <h1 className='signup-left-heading'>RP Online Classes</h1>
          <p className='signup-left-para'>Learin Codin With Us...</p>
        </div>
        <div className="signup-right">
          <h1>Create Your Account</h1>
          <hr />
          <form className='signup-form'>
            <input type="text" placeholder='Enter Your Institute Name' />
            <input type="text" placeholder='Enter Your Email' />
            <input type="text" placeholder='Enter Your Phone' />
            <input type="text" placeholder='Enter Your Password' />
            <input type="file" placeholder='Enter Your Password' />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default SignUp