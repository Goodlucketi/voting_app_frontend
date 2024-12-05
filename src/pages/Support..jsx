import Navbar from "../components/Navbar"
import support from "../assets/images/supporthero.png"
import contactImg from "../assets/images/contactImg.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

const Support = () => {
    return ( 
        <main className="support">
            <Navbar />
            <div className="hero">
                <img src={support} alt="Background"  />
            </div>
            <div className="mx-auto w-11/12 p-10 my-10 md:text-center shadow-md grid md:gap-10 md:grid-cols-3">
                <div className="email my-5">
                    <FontAwesomeIcon icon={faEnvelope} className="text-xl text-green-700" />
                    <p className="font-bold text-xl mb-3">Email Us</p>
                    <div>
                        <p>info@ivote.com</p>
                        <p>support@ivote.com</p>
                    </div>
                </div>
                <div className="call my-5">
                    <FontAwesomeIcon icon={faPhone} className="text-xl text-green-700" />
                    <p className="font-bold text-xl mb-3">Call Us</p>
                    <div>
                        <p>+234 000 000 000</p>
                    </div>
                </div>
                <div className="address my-5">
                    <FontAwesomeIcon icon={faLocationDot} className="text-xl text-green-700" />
                    <p className="font-bold text-xl mb-3">Headquaters</p>
                    <div>
                        <p>114 Street Avenue, Abuja</p>
                    </div>
                </div>
            </div>

            <div className="contact w-11/12 mx-auto p-2">
                <div className="contact-container md:flex justify-center items-center">
                    <div className="image md:w-5/12">
                        <img src={contactImg} alt="Contact Image" className="w-10/12" />
                    </div>
                    <div className="form md:w-5/12 border px-6 py-7 bg-slate-50/70">
                        <form>
                            <p className="p-3 my-5">Please provide the following information to get support</p>
                            <div className="mb-3">
                                <input type="text" name="name" id="name" placeholder="Fullname (First Name, Last Name)" className="p-3 rounded-md border w-full" />
                            </div>
                            <div className="mb-3">
                                <input type="email" name="email" id="email" placeholder="Email" className="p-3 rounded-md border w-full" />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="State" id="State" placeholder="State" className="p-3 rounded-md border w-full" />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="lga" id="lga" placeholder="LGA" className="p-3 rounded-md border w-full" />
                            </div>
                            <div className="mb-3">
                                <textarea name="message" id="message" placeholder="message" className="p-3 rounded-md border w-full"></textarea>
                            </div>
                            <div className="mb-3">
                                <input type="submit" value="Send" className="py-3 px-10 mx-auto block text-white rounded-md border-2 bg-green-700" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
     );
}
 
export default Support;