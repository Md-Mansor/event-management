import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
import map from '../../Asset/google-map.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer lg:p-5 bg-cyan-800 glass text-white ">
                <Link to='https://www.google.com/maps/place/New+York,+NY,+USA/@40.6976312,-74.1444872,11z/data=!4m15!1m8!3m7!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!2sNew+York,+NY,+USA!3b1!8m2!3d40.7127753!4d-74.0059728!16zL20vMDJfMjg2!3m5!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728!16zL20vMDJfMjg2?entry=ttu' className=" w-96">
                    <img src={map} alt="our location" className="bg-opacity-70 rounded-md" />
                </Link>
                <nav className="font-medium text-base">
                    <header className="footer-title">Company</header>
                    <Link to="/about" className="">About</Link>
                    <Link to="/contact" className="">Contact us</Link>
                    <Link to="/" className="">Home</Link>
                    <Link to="/features" className="">Features</Link>
                </nav>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className=" flex flex-col items-center font-medium text-lg  space-y-5">
                        <Link className="flex items-center gap-3  hover:text-red-800">Facebook <FaFacebookSquare></FaFacebookSquare>
                        </Link>
                        <Link className="flex items-center gap-7  hover:text-red-800">Twitter <FaTwitterSquare></FaTwitterSquare>
                        </Link>
                        <Link className="flex items-center gap-2  hover:text-red-800">Instagram <FaInstagramSquare></FaInstagramSquare>
                        </Link>
                        <Link className="flex items-center gap-4  hover:text-red-800">YouTube <FaYoutubeSquare></FaYoutubeSquare>
                        </Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;