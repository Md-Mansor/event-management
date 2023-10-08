// import Marquee from "react-fast-marquee";

// eslint-disable-next-line react/prop-types
const Service = ({ eventCard }) => {
    console.log(eventCard);

    const { category, title, pic, } = eventCard || {}
    return (
        <div>

            <div className="card border">
                <figure><img src={pic} alt='img' className=" h-full w-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <p>{title}</p>

                    <div className="card-actions justify-between">
                        <button className="btn btn-primary">Details</button>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;