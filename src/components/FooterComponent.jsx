import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const FooterComponent = ()=>{
    return(
        <div className="bg-black text-white flex flex-col gap-5 p-4">
            <div className="flex justify-around items-center gap-4 flex-wrap">
                <div className="flex flex-col gap-3">
                    <h1 className="text-xl font-bold">Company</h1>
                    <div>
                        <p className="hover:text-gray-400 cursor-pointer">About us</p>
                        <p className="hover:text-gray-400 cursor-pointer">Team</p>
                        <p className="hover:text-gray-400 cursor-pointer">Careers</p>
                        <p className="hover:text-gray-400 cursor-pointer">Blog</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-xl font-bold">Legal</h1>
                    <div>
                        <p className="hover:text-gray-400 cursor-pointer">Terms & Conditions</p>
                        <p className="hover:text-gray-400 cursor-pointer">Refund & Cancellation</p>
                        <p className="hover:text-gray-400 cursor-pointer">Privacy Policy</p>
                        <p className="hover:text-gray-400 cursor-pointer">Cookie Policy</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-xl font-bold">Follow us</h1>
                    <div className="flex gap-4 text-2xl">
                        <a className="hover:text-gray-400" href=""><FaGithub /></a>
                        <a className="hover:text-gray-400" href=""><FaLinkedin/></a>
                        <FaTwitter/>
                    </div>
                    <p className="hover:text-gray-400 cursor-pointer">Recieve exclusive offers in your mailbox</p>
                    <div className="flex gap-2">
                        <input type="email"  className="bg-gray-500 py-2 px-2 sm:px-4 rounded-xl" placeholder="Enter Mail" name="" id="" />
                        <button className="bg-red-500 hover:bg-red-800 px-1 sm:text-xl cursor-pointer text-sm sm:px-4 py-2 rounded-xl text-white font-bold">Subscribe</button>
                    </div>
                </div>
            </div>
            <hr  className="border border-white"/>
            <p className="text-center hover:text-gray-400 cursor-pointer">All rights reserved © FoodCart</p>
        </div>
    )
}
export default FooterComponent