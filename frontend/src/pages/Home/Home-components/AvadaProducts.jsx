import React, { useReducer } from "react";
import Picture from "../../../assets/Picture";

const AvadaProducts = () => {
	return (
		<div className="AvadaProducts">
			<div className="container">
				<div className="wrapper flex flex-col gap-[55px]">
					<div className="top-text flex justify-between items-center">
						<div className="text1">
							<p className="text-[20px] leading-[20px] font-syne tracking-[-0.3px] font-bold">Our downloadable digital products</p>
						</div>
						<div className="text2">
							<button className="text-[14px] font-dm text-[#0256ff] hover:text-buttonT py-[13px] px-[29px]">
								View all products available
							</button>
						</div>
					</div>
					<div className="elements grid grid-cols-3 gap-[70px]">
						{Object.values(Picture.avadaProducts).map((box, id) => (
							<div key={id} className="id">
								<div className="flex flex-col  gap-[35px]">
									<div className="image overflow-hidden rounded-lg ">
										<img src={box} alt="" />
									</div>
									<div className="texts flex items-center justify-between">
										<div className="text1">
											<p className="text-[17px] leading-[25.5px] tracking-[1px] font-dm">
												{id === 0
													? "Avada Podcust"
													: id === 1
													? "Avada Builder"
													: id === 2
													? "Avada Restaurant"
													: id === 3
													? "Avada Interior"
													: id === 4
													? "Avada Takeout"
													: id === 5
													? "Avada Pet Supplies"
													: ""}
											</p>
											<p className="text-[14px] leading-[24.08px] tracking-[1px] font-dm text-[#0256ff]">
												{id === 0
													? "Prebuilt Demo"
													: id === 1
													? "Design Mockup"
													: id === 2
													? "Prebuilt Demo"
													: id === 3
													? "Design Mockup"
													: id === 4
													? "Prebuilt Demo"
													: id === 5
													? "Design Mockup"
													: ""}
											</p>
										</div>
										<div className="price">
											<button className="py-[15px] px-[16px] bg-buttonN/10 rounded-lg font-syne text-buttonT">
												$69
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AvadaProducts;
