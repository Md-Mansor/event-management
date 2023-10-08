import Service from "../Service/Service";
import { useLoaderData } from "react-router-dom";
import UpComingEvent from "../UpComingEvent/UpComingEvent";


const Home = () => {
    const EventCategory = useLoaderData()
    // console.log(EventCategory);


    return (
        <div>
            <h1 className="text-center p-10 text-4xl text-stone-500 font-semibold">Our Services</h1>
            <div className="grid lg:grid-cols-4 gap-10  ">

                {
                    EventCategory?.map(Category => <Service key={Category.id} eventCard={Category}></Service>)
                }

            </div>
            <UpComingEvent></UpComingEvent>
        </div>

    );
};

export default Home;