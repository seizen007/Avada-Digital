import React, { useState } from "react";
import Picture from "../../../assets/Picture";

const Blog = () => {
	const { blog1, blog2, blog3 } = Picture.blogs;
	const [blogs, setBlogs] = useState({
		blog1,
		blog2,
		blog3,
	});
	return (
		<div className="blog">
			<div className="container">
				<div className="wrapper grid lg:grid-cols-3 grid-cols-1 md:min-h-[582px]  gap-[60px] mt-10">
					{Object.values(blogs).map((box, id) => (
						<div key={id} className=" flex items-stretch">
							<div className="box1 bg-white drop-shadow-lg rounded-lg flex flex-col justify-between h-full pt-[25px] pb-[35px] ">
								<div className="image px-[25px] overflow-hidden">
									<img src={box} alt="" />
								</div>
								<div className="texts flex flex-col justify-between  px-[45px] overflow-hidden ">
									<div className="wrapper flex flex-col gap-6  ">
										<div className="text1">
											<p className=" text-sm font-dm">
												{id === 0
													? "Design"
													: id === 1
													? "Design, Tips & Tricks"
													: id === 2
													? "Design, Tips & Tricks"
													: ""}
											</p>
										</div>
										<div className="text2">
											<p className="text-[22px] leading-[33px] tracking-[0.27px] font-medium">
												{id === 0
													? "Power up your design system with an Avada prebuilt website"
													: id === 1
													? "Behind the scenes of creating a UI kit"
													: id === 2
													? "Five integrations to help your product team collaborate better"
													: ""}
											</p>
										</div>
										<div className="text3">
											<p className="text-[16px] leading-[27.52px] font-dm tracking-[1px]">
												{id === 0
													? "Sit amet quam vehicula elementum sed sit dolor sit amet, consectetur adipiscing elit."
													: id === 1
													? "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui vivamus."
													: id === 2
													? "Pulvinar pellentesque arcu mi sit nec eget velit lacus, tortor velit arcu orci."
													: ""}
											</p>
										</div>
									</div>
								</div>
								<div className="button pl-[16px]">
									<button className="py-[13px] px-[29px] text-blue-700 hover:text-buttonN duration-200 bg-transparent text-sm font-dm tracking-[1px]">
										Continue reading
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Blog;
