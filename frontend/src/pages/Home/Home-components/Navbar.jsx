import React, { useState } from "react";
import Picture from "../../../assets/Picture";

const Navbar = () => {
	const [navlist, setNavlist] = useState({
		menu1: "Home",
		menu2: "The Studio",
		menu3: "Services",
		menu4: "Projects",
		menu5: "Products",
		menu6: "The Magazine",
	});
	const [navToggle, setNavToggle] = useState(false);
	const handleClick = () => {
		setNavToggle(!navToggle);
	};
	return (
		<div className="navbar">
			<div className="container">
				<div className="wrapper flex  items-center justify-between mt-16 ">
					<div className="nav-logo">
						<img className="w-fit" src={Picture.navLogo} alt="" srcset="" />
					</div>
					<div className="nav-m  xl:block hidden">
						<div className="nav-list flex xl:gap-10 gap-5">
							{Object.values(navlist).map((menu) => (
								<p className="font-dm text-[16px] font-normal tracking-wider">
									{menu}
								</p>
							))}
						</div>
					</div>
					<div className="wrapper flex items-center gap-5">
						<div className="button">
							<div className="contactUs">
								<button
									className="py-4 px-6 bg-red-200/20 text-red-500 rounded-lg capitalize text-sm font-dm font-medium tracking-wider
								 hidden sm:block"
								>
									contact us
								</button>
							</div>
						</div>
						{/* navtoggle */}
						<div className="navberger xl:hidden block ">
							<p onClick={handleClick}>X</p>
							<div
								className={`navMenu ${
									navToggle ? "h-[280px] " : " h-0"
								} bg-white overflow-hidden absolute right-0 translate-y-44 top-0  duration-300 w-full`}
							>
								{Object.values(navlist).map((menu, id) => (
									<p
										className={`font-dm text-[19px] font-normal tracking-wider p-2 ${
											id === 0 ? "bg-blue-500 text-white" : ""
										}`}
									>
										{menu}
									</p>
								))}
							</div>
						</div>
					</div>
				</div>
				{/* button for small device */}
				<div className="button mt-5 text-center	">
					<button className=" text-sm sm:hidden capitalize text-red-500 bg-red-200/20 rounded-md py-5 px-20">
						got a project? contact us
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
