import React from "react";
import Picture from "../../../assets/Picture";

const Info = () => {
	return (
		<div className="info">
			<div className="container">
				<div className="wrapper">
					<div className="elements flex sm:flex-row flex-col items-center justify-between overflow-hidden gap-5">
						<div className="texts  max-w-[549px] p-5 flex flex-col gap-[35px]">
							<div className="part1 flex flex-col gap-5">
								<div className="emojiText flex items-center gap-5">
									<div className="emoji">
										<img src={Picture.info.emoji} alt="" />
									</div>
									<p className="text-[19px] leading-8 font-dm">
										We are passionate team
									</p>
								</div>
								<p className="md:text-[60px] text-[50px] md:leading-[60px] leading-[50px]  tracking-[-0.9px] font-syne font-bold">
									we create amazing digital product
								</p>
							</div>
							<div className="part2 flex flex-col gap-[50px]">
								<p className="text-lg font-dm">
									Mi imperdiet congue id ante eu lacus ullamcorper blandit
									mauris. Vulputate nam nulla tristique tellus.
								</p>
								<div className="button">
									<button className="hover:bg-buttonH bg-buttonN/5 px-[40px] py-[17px] rounded-lg text-buttonT hover:text-white duration-300">
										Learn more about us
									</button>
								</div>
							</div>
						</div>
						<div className="info-image">
							<div className="wrapper flex  gap-[50px]">
								<div className="image1 overflow-hidden rounded-xl">
									<img
										className="lg:max-w-[334px]"
										src={Picture.info.image1}
										alt=""
									/>
								</div>
								<div className="hidden lg:flex flex-col gap-5 justify-center">
									<div className="image2 rounded-lg overflow-hidden">
										<img
											className="max-w-[246px]"
											src={Picture.info.image2}
											alt=""
										/>
									</div>
									<img className="w-fit" src={Picture.info.graphic} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Info;
