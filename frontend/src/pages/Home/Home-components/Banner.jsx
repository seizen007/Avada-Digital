import React from "react";
import Picture from "../../../assets/Picture";

const Banner = () => {
	return (
		<div className="banner">
			<div className="container">
				<div className="grid xl:grid-cols-banner grid-cols-1 sm:grid-cols-2 items-center md:items-start gap-10 xl:gap-0 mt-20 ">
					{/* section 1  */}
					<div className="xl:pr-12">
						<div className="hero1 rounded-lg overflow-hidden  ">
							<img src={Picture.banner.hero1} alt="Hero 1" className="w-full" />
						</div>
					</div>
					{/* section 2 */}
					<div className="xl:flex flex-col justify-center  items-start gap-8  overflow-hidden  hidden pr-10 ">
						<div className="hero2 rounded-lg overflow-hidden">
							<img src={Picture.banner.hero2} alt="Hero 2" className="" />
						</div>
						<div className="hero3 ">
							<img src={Picture.banner.hero3} alt="Hero 2" className="" />
						</div>
					</div>
					{/* section 3 */}
					<div className=" xl:col-start-3 sm:order-1 -order-1  xl:ml-12">
						<div className="text flex flex-col text-center sm:text-start justify-center gap-8">
							<div className="top-text flex items-center flex-col sm:flex-row gap-4">
								<div className="emoji ">
									<img
										src={Picture.banner.emoji}
										alt="Emoji"
										className="w-fit"
									/>
								</div>
								<p className="xl:text-[19px] text-[16px] font-dm  tracking-widest">
									Hello! We are Avada Digital Agency.
								</p>
							</div>
							<div className="header-text">
								<h1 className="font-syne lg:text-6xl text-5xl  font-bold text-gray-800">
									We create amazing digital products
								</h1>
							</div>
							<div className="lower-text flex xl:flex-row flex-col gap-5 justify-between">
								<div className="texts text-xl">
									<p>Euismod ipsum pellentesque</p>
									<p>sit nullam <span className="underline">fermentum justo.</span></p>
								</div>
								<div className="learn-more">
									<button
										className="py-3 px-6 rounded-lg bg-blue-500/20 hover:bg-transparent 
									 hover:border-blue-500 border-2 border-transparent duration-200"
									>
										Learn more about us
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
