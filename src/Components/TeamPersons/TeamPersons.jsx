import p1 from '../../Asset/p1.avif'
import p2 from '../../Asset/p2.avif'
import p3 from '../../Asset/p3.avif'
import p4 from '../../Asset/p4.avif'

const TeamPersons = () => {
    return (
        <div className='p-5 text-center'>
            <h1>Meet Our Team</h1>
            <p>
                “Interdependent people combine their own effort with the efforts of others to achieve their greatest success.”
            </p>
            <div className='grid grid-flow-row  lg:flex py-5  gap-5 justify-center '>
                <div>
                    <img src={p1} alt="" className='h-40 w-64 rounded-md lg:rounded-s-full' />
                    <p>Name:</p>
                </div>
                <div>
                    <img src={p2} alt="" className='h-40 w-64 lg:rounded-none rounded-md' />
                    <p>Name:</p>
                </div>
                <div>
                    <img src={p3} alt="" className='h-40 w-64 rounded-md lg:rounded-none' />
                    <p>Name:</p>
                </div>
                <div>
                    <img src={p4} alt="" className='h-40 w-64 rounded-md lg:rounded-e-full' />
                    <p>Name:</p>
                </div>
            </div>
            {/* <div className='flex justify-center gap-56'>
                <p>Name:</p>
                <p>Name:</p>
                <p>Name:</p>
                <p>Name:</p>
            </div> */}
        </div>
    );
};

export default TeamPersons;