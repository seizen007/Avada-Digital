import React from "react";
import Picture from "../../../assets/Picture";

const Subscribe = () => {
	return (
		<div className="subscribe">
			<div className="bg-subscribe bg-no-repeat">
				<div className="bg-gradient-to-b from-black to-black/80">
					<div className="container ">
						<div className="wrapper pt-[115px]">
							<div className="elements flex gap-[100px]">
								<div className="image max-w-[604px]">
									<img
										className="w-full"
										src={Picture.subscribe.newsletterMockup}
										alt=""
									/>
								</div>
								<div className="left pt-[73px] flex flex-col gap-[48px] px-[25px]">
									<div className="texts flex flex-col gap-[25px]">
										<div className="text1">
											<p className="text-[44px] text-white font-syne leading-[44px] tracking-[-0.66px] font-bold">
												We are a full-service digital company
											</p>
										</div>
										<div className="text2">
											<p className="text-[18px] leading-[30.96px] tracking-[1px] font-dm text-white">
												Nibh enim in purus at habitant. Vitae tortor volutpat
												aliquam eget nunc sagittis. Viverra odio amet, diam.
											</p>
										</div>
									</div>
									<div className="form flex gap-6">
										<input
											className="py-[18px] px-3 max-w-[362px] w-full outline-buttonH outline-[0.1px] rounded-lg placeholder:text-black/50"
											type="text"
											name="email"
											placeholder="Insert your email ...*"
										/>
										<div className="button">
											<button
												className="bg-buttonH text-white hover:bg-white hover:text-buttonT
											 py-[25px] px-[41px] rounded-lg duration-300 text-[18px] leading-[17px] tracking-[0.27px] font-dm font-medium"
											>
												Subscribe
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
