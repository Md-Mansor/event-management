import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const UpComingEvent = () => {
    const [newEvent, setNewEvent] = useState([]);
    useEffect(() => {
        fetch('Events.json')
            .then(res => res.json())
            .then(data => setNewEvent(data))
    }, [])
    return (
        <div>

            <h1 className="text-center font-semibold text-2xl ">Our Up Coming Events will appear Here </h1>
            <Marquee pauseOnHover={true} speed={200}>
                <h1 className="text-center font-semibold text-2xl border rounded-xl p-2  bg-rose-400 ">subscribe Us to get notify about Our New Events</h1>
            </Marquee>
            <div className="grid grid-cols-2 gap-6 py-5">

                {
                    newEvent.map(EventCard => <div

                        key={EventCard.id}>

                        <div className=" card card-side  shadow-xl">
                            <figure><img src={EventCard.poster} alt="Movie" className="h-56 w-96" /></figure>
                            <div className=" p-10">
                                <h2 className="card-title">Event Title:{EventCard.name}</h2>
                                <p className="text-base font-semibold">Location: {EventCard.place}</p>
                                <p className="font-semibold">Time: {EventCard.time}  </p>
                                <p className="font-semibold">Date: {EventCard.date}  </p>
                                <p></p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-secondary text-right text-white">Book Now : $ {EventCard.entry_fee}</button>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>

            <div className="p-5 flex items-center justify-center gap-6">
                <input className="text-center font-semibold text-2xl border rounded-md h-12 " placeholder="Input Your Email" type="text" />
                <button className="text-black font-bold btn btn-error ">Subscribe</button>
            </div>
        </div>
    );
};

export default UpComingEvent;