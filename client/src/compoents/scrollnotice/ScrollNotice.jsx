import React from "react";
import { Link } from "react-router-dom";

const ScrollNotice = () => {
    return (
        <div className="w-full bg-red-500 overflow-hidden py-2">
            <div className="flex animate-marquee">
                {/* First copy */}
                {/* Second copy (duplicate for infinite loop) */}
                <div className="whitespace-nowrap flex items-center">
                    <span className="text-white font-semibold mx-6">
                        🚀 Anyone interested in sponsorship or collaboration 🤝,
                        <Link to="/contact-us" className="underline font-bold ml-2">
                            contact me here 📩
                        </Link>
                    </span>
                </div>


                {/* Second copy (duplicate for infinite loop) */}
                <div className="whitespace-nowrap flex items-center">
                    <span className="text-white font-semibold mx-6">
                        🚀 Anyone interested in sponsorship or collaboration 🤝,
                        <Link to="/contact-us" className="underline font-bold ml-2">
                            contact me here 📩
                        </Link>
                    </span>
                </div>
                {/* Second copy (duplicate for infinite loop) */}
                <div className="whitespace-nowrap flex items-center">
                    <span className="text-white font-semibold mx-6">
                        🚀 Anyone interested in sponsorship or collaboration 🤝,
                        <Link to="/contact-us" className="underline font-bold ml-2">
                            contact me here 📩
                        </Link>
                    </span>
                </div>
                {/* Second copy (duplicate for infinite loop) */}
                <div className="whitespace-nowrap flex items-center">
                    <span className="text-white font-semibold mx-6">
                        🚀 Anyone interested in sponsorship or collaboration 🤝,
                        <Link to="/contact-us" className="underline font-bold ml-2">
                            contact me here 📩
                        </Link>
                    </span>
                </div>
                {/* Second copy (duplicate for infinite loop) */}
                <div className="whitespace-nowrap flex items-center">
                    <span className="text-white font-semibold mx-6">
                        🚀 Anyone interested in sponsorship or collaboration 🤝,
                        <Link to="/contact-us" className="underline font-bold ml-2">
                            contact me here 📩
                        </Link>
                    </span>
                </div>

            </div>
        </div>
    );
};

export default ScrollNotice;
