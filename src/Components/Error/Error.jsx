import { Link } from 'react-router-dom';
import error from '../../Asset/error.jpg'
const Error = () => {
    return (
        <div>
            <img src={error} alt="" className='mx-auto pt-5' />
            <Link to="/"><button className='btn btn-error absolute'>Go To Home Page</button></Link>
        </div>
    );
};

export default Error;