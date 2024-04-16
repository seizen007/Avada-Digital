import React from "react";
import Picture from "../../../assets/Picture";

const IdentityBrand = () => {
	return (
		<div className="IdentityBrand">
			<div className="containerN pl-[116px]">
				<div className="wrapper">
					<div className="elements flex gap-[69px] ">
						<div className="texts-site flex flex-col gap-[40px] items-center text-center max-w-[735px] px-[56px]">
							<div className="icon pt-[84px]">
								<p className="w-fit px-[35px] py-[35px] bg-buttonH/10 rounded-xl">
									icon
								</p>
							</div>
							<div className="text1 pt-[10px]">
								<p className="text-[53px] leading-[53px] trackign-[-0.795px] font-syne font-bold">Intelligent brand identity</p>
							</div>
							<div className="text2">
								<p className="text-[20px] leading-[34.4px] font-dm tracking-[1px]">
									Auctor turpis nulla risus dignissim parturient semper sed
									ultricies convallis. Mauris blandit sit lorem imperdiet.
								</p>
							</div>
							<div className="button">
								<button className="py-[17px] px-[40px] text-[#0256ff] hover:text-buttonT text-[18px]">Learn more about us</button>
							</div>
						</div>
						<div className="image">
							<img src={Picture.IdentityBrand.image1} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IdentityBrand;
