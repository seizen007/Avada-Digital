import React from "react";
import Picture from "../../../assets/Picture";
import Button from "../../../components/styledComponents/Button";

const Footer = () => {
	return (
		<div className="footer px-[2rem]">
			<div className="bg-gradient-to-b from-[#0256ff] to-black/90 pt-[150px] pb-[180px]">
				<div className="container">
					<div className="wrapper flex flex-col gap-[68px]">
						<div className="elements flex flex-col md:flex-row items-center text-center justify-center gap-10 md:flex-wrap xl:flex-nowrap">
							<div className="logo">
								<img className="" src={Picture.LogoFooter} alt="" />
							</div>
							<div className="texts max-w-[567px] flex flex-col gap-[28px] lg:order-3 xl:order-2 ">
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
							<div className="button order-2 ">
								<Button>Got a project? contact us</Button>
							</div>
						</div>
						<div className="copyright text-center">
							<p className="text-white font-dm text-sm">
								© Copyright 2012 - 2024 | Avada Website Builder by ThemeFusion |
								All Rights Reserved | Powered by WordPress ++ Prebuilts Buy Now
								Go to Top
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
