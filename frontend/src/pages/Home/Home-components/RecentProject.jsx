import React from "react";
import Picture from "../../../assets/Picture";

const RecentProject = () => {
	const { builder, fitness, interior } = Picture.prebuilt;
	const card = {
		interior,
		fitness,
		builder,
	};

	return (
		<div className="recentproject">
			<div className="bg-blue-500">
				<div className="container">
					<div className="wrapper">
						<div className="elements flex flex-col gap-5">
							{/* texts */}
							<div className="texts flex justify-between">
								<div className="h2">
									<h2>Our recent project</h2>
								</div>
								<div className="paragraph max-w-[473px]">
									<p>
										Diam integer turpis tristique integer tincidunt cursus
										dignissim. Euismod libero pellentesque et suspendisse
										posuere. Lorem quis nec nisl viverra ut velit imperdiet.
									</p>
								</div>
								<div className="button">
									<button>View all projects</button>
								</div>
							</div>
							{/* cards */}
							<div className="cards grid md:grid-cols-3 sm:grid-cols-2">
								{Object.values(card).map((allcards, id) => (
									<div key={id} className=" id  px-[33px] py-5">
										<div className="bg-white rounded-lg overflow-hidden flex flex-col">
											<img className="w-full" src={allcards} alt="" srcset="" />
											<div className="texts text-center py-5">
												{id == 0 ? (
													<p>Avada Interior Prebuilt Website</p>
												) : id == 1 ? (
													<p>Avada Fitness Prebuilt Website</p>
												) : id == 2 ? (
													<p>Avada Crypto Prebuilt Website</p>
												) : (
													<p className="hidden"></p>
												)}
												<p className="">Web Design</p>
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
