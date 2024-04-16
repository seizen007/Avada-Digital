import React from "react";
import Picture from "../../../assets/Picture";

const Logos = () => {
	return (
		<div className="partners-logo">
			<div className="container">
				<div className="wrapper flex flex-col justify-center py-10 mb-10">
					<div className="texts text-center py-10">
						<p className="text-base">We are very fortunate to work with these amazing partners</p>
					</div>
					<div className="flex px-2 sm:px-14 lg:px-40 gap-5 sm:gap-8 md:gap-10 xl:gap-20 items-center">
						{Object.values(Picture.partnerLogo).map((logo, id) => (
							<div id={id} className="logos">
								<img className="w-fit" src={logo} alt="" />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Logos;
