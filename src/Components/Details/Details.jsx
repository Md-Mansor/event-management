import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const details = useLoaderData();
    const { id } = useParams()
    const numId = parseInt(id);
    const data = details.find(data => data.id === numId)
    console.log(data);

    return (
        <div>
            <div className=" justify-items-start  p-6 m-10 ">
                <img className=" w-full" src={data.image} alt="" />
                {/* <button className=" btn -my-24 mx-10 absolute" style={{ background: detail.btn_bg_color }}>Donate ${detail.price} </button> */}
                <h1 className="font-bold text-3xl pt-5">{data.title}</h1>
                <h1 className="  pt-5 font-medium text-lg ">{data.details}</h1>

            </div>
        </div>
    );
};

export default Details;