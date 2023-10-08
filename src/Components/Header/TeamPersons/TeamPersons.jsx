import p1 from '../../../Asset/p1.avif'
import p2 from '../../../Asset/p2.avif'
import p3 from '../../../Asset/p3.avif'
import p4 from '../../../Asset/p4.avif'

const TeamPersons = () => {
    return (
        <div className='p-5 text-center'>
            <h1>Meet Our Team</h1>
            <p>
                “Interdependent people combine their own effort with the efforts of others to achieve their greatest success.”
            </p>
            <div className='flex flex-row gap-5 justify-center  items-center'>

                <img src={p1} alt="" className='h-40 w-64' />
                <img src={p2} alt="" className='h-40 w-64' />
                <img src={p3} alt="" className='h-40 w-64' />
                <img src={p4} alt="" className='h-40 w-64' />
            </div>
            <div className='flex justify-center gap-56'>
                <h1>Name:</h1>
                <h1>Name:</h1>
                <h1>Name:</h1>
                <h1>Name:</h1>
            </div>
        </div>
    );
};

export default TeamPersons;