import React from "react";
import Picture from "../../../assets/Picture";
import Button from "../../../components/styledComponents/Button";

const RecentProject = () => {
	const { builder, fitness, interior } = Picture.prebuilt;
	const card = {
		interior,
		fitness,
		builder,
	};

	return (
		<div className="recentproject">
			<div className="bg-gradient-to-b from-blue-800 to to-blue-600">
				<div className="container">
					<div className="wrapper">
						<div className="elements flex flex-col gap-[25px] py-[155px]">
							{/* texts */}
							<div className="texts flex flex-wrap justify-between items-end gap-4 pb-[75px]">
								<div className="h2">
									<h2 className="font-syne  text-[60px] max-w-60 md:max-w-[408px]  leading-[66px] tracking-[-0.9px] text-white font-bold">
										Our recent project
									</h2>
								</div>
								<div className="paragraph max-w-[473px] order-3 md:order-2">
									<p className="font-dm text-[18px] leading-[30.96px] tracking-[1px] text-white">
										Diam integer turpis tristique integer tincidunt cursus
										dignissim. Euismod libero pellentesque et suspendisse
										posuere. Lorem quis nec nisl viverra ut velit imperdiet.
									</p>
								</div>
								<div className="button order-2 md:order-3">
									{/* <button className="py-[17px] px-[40px] font-semibold rounded-lg text-buttonT bg-white hover:text-white hover:bg-buttonH">
										View all projects
									</button> */}
									<Button
										$bg={"white"}
										$textColor={"#f45c20"}
										$textColorhover={"white"}
										$bghover={"#f45c20"}
										className=""
									>
										View all projects
									</Button>
								</div>
							</div>
							{/* cards */}
							<div className="cards grid md:grid-cols-3 sm:grid-cols-2 gap-[65px]  ">
								{Object.values(card).map((allcards, id) => (
									<div key={id} className=" id">
										<div className="bg-white rounded-lg overflow-hidden flex flex-col">
											<img className="w-full" src={allcards} alt="" srcset="" />
											<div className="texts text-center py-8 flex flex-col gap-2">
												<p className="font-medium font-dm text-[18px] tracking-[1px]">
													{id == 0
														? "Avada Interior Prebuilt Website"
														: id == 1
														? "Avada Fitness Prebuilt Website"
														: id == 2
														? "Avada Crypto Prebuilt Website"
														: ""}
												</p>
												<p className="text-blue-600 font-dm font-medium text-base">
													Web Design
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecentProject;
