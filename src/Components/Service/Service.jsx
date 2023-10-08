// import Marquee from "react-fast-marquee";

// eslint-disable-next-line react/prop-types
const Service = ({ eventCard }) => {
    // console.log(eventCard);

    const { category, title, pic, } = eventCard || {}
    return (
        <div className="pb-10">

            <div className="hover:drop-shadow-2xl card border bg-cyan-50">
                <figure><img src={pic} alt='img' className="h-56 w-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <p>{title}</p>

                    <div className="card-actions justify-end">
                        <button data-aos="zoom-in" className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;