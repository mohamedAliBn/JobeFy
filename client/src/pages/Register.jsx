import { Logo,FormRow } from '../components'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'


function Register() {
  return (
    <Wrapper>
      <form className='form'>
        <Logo/>
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="ali"/>
        <FormRow type="text" labelText="Last name" name="lastName " defaultValue="ali"/>
        <FormRow type="text" name="location" defaultValue="location"/>
        <FormRow type="email" name="email" defaultValue="ali123@gmail.com"/>
        <FormRow type="password" name="password" defaultValue="ali200110"/>
        
        <button type='submit' className='btn btn-block'>submit</button>
        <p>
            Already a member?
            <Link to={"/login"} className='member-btn' >Login</Link> 
        </p>
      </form>
    </Wrapper>
  )
}

export default Register