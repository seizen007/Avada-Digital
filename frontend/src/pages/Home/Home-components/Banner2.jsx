import React from "react";
import Picture from "../../../assets/Picture";

const Banner2 = () => {
	return (
		<div className="banner2 mb-40">
			<div className="bg-banner bg-no-repeat bg-cover pt-[5vw] bg-center">
				<div className="container">
					<div className="wrapper flex w-full justify-start  ">
						<div className="box translate-y-14 ">
							<div className=" bg-white w-full md:w-[513px] rounded-lg sm:p-[85px] p-[50px]  drop-shadow-lg ">
								<div className="elements flex flex-col gap-6 md:gap-9">
									<div className="textone flex flex-col gap-5">
										<p className="text-lg font-dm text-[#0256ff] ">
											We are Avada Digital Agency
										</p>
										<p className="text-balance text-2xl md:text-[32px] leading-8  font-syne font-bold">
											Analyze your entire market pricing & stock availability
										</p>
									</div>
									<div className="texttwo flex flex-col gap-5">
										<p className="text-[18px] leading-[30.96px]">
											Mauris purus maecenas purus, aliquet lacus varius. Proin
											venenatis vel cras phasellus condimentum.
										</p>
										<div className="button w-full pt-[30px]">
											<button
												className="w-fit bg-[#f45b1f]/5 py-5 px-[29px] text-sm text-[#f45c20] rounded-2xl
											hover:text-white hover:bg-[#f45c20] duration-200 "
											>
												Buy Avada Today
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

export default Banner2;
