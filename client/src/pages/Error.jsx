import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'; 
import img from "./../assets/images/not-found.svg"
function Error() {
    const error=useRouteError();
    if(error.status===404) {
      return (
        <Wrapper>
          <div>
            <img src={img} alt="not found"/>
            <h3>Ohh! Page not found</h3>
            <p>we can't seem to find the page you are looking for</p>
            <Link to={"/dashboard"}>Back Home</Link>
          </div>

        </Wrapper>      )
    }
  return (
    <div>
        <h1>something went wrong </h1>
    </div>
  )
}

export default Error