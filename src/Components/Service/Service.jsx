// import Marquee from "react-fast-marquee";

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Service = ({ eventCard }) => {
    // console.log(eventCard);

    const { id, category, title, pic, } = eventCard || {}
    return (
        <div className="pb-10">

            <div className="hover:drop-shadow-2xl card border bg-cyan-50">
                <img src={pic} alt='img' className="h-56 w-full" />
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <p>{title}</p>

                    <Link to={`/details/${id}`}>
                        <div className="card-actions justify-end">
                            <button data-aos="zoom-in-up" className="btn btn-outline btn-secondary hover:btn-info">Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;