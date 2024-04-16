import React from "react";
import Picture from "../../../assets/Picture";

const Footer = () => {
	return (
		<div className="footer px-[2rem]">
			<div className="bg-[#0256ff] pt-[150px] pb-[180px]">
				<div className="container">
					<div className="wrapper flex flex-col gap-[68px]">
						<div className="elements flex justify-between">
							<div className="logo">
								<img src={Picture.LogoFooter} alt="" />
							</div>
							<div className="texts max-w-[567px] flex flex-col gap-[28px]">
								<div className="text1">
									<p className="text-white font-syne text-[22px] leading-[22px] tracking-[-0.33px] font-semibold">
										About Avada Digital Agency
									</p>
								</div>
								<div className="text2">
									<p className="font-dm text-[18px] leading-[30.96px] text-white tracking-[1px]">
										Diam integer turpis tristique integer tincidunt cursus
										dignissim. Euismod libero pellentesque et suspendisse
										posuere. Lorem quis nec nisl viverra ut velit imperdiet.
									</p>
								</div>
							</div>
							<div className="button">
								<button className="px-[29px] py-[20px] bg-buttonH hover:bg-white font-dm text-[14px] traking-[1px] text-white font-semibold
                                 hover:text-buttonT rounded-lg">
									Got a project? contact us
								</button>
							</div>
							</div>
							<div className="copyright text-center">
								<p className="text-white">
									© Copyright 2012 - 2024 | Avada Website Builder by ThemeFusion
									| All Rights Reserved | Powered by WordPress ++ Prebuilts Buy
									Now Go to Top
								</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
