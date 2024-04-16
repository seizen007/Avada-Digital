import React from "react";

const Works = () => {
	return (
		<div className="works">
			<div className="container">
				<div className="wrapper flex items-center justify-center">
					<div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-[50px] ">
						{/* box-1  */}
						<div className="box1 flex flex-col items-center px-[25px] gap-[50px] ">
							<p className="p-[50px] rounded-3xl bg-black/70">icon</p>
							<div className="text font-dm flex flex-col text-center gap-5">
								<p className=" text-[20px] leading-[20px]  font-bold tracking-[-0.3px]">
									Web & Mobile
								</p>
								<p className="text-[18px] leading-[30.96px] tracking-[0.27px] text-black/70">
									Nulla quis lorem ut libero malesuada feugiat. Quisque velit
									nisi, pretium.
								</p>
							</div>
						</div>
						{/* box-2  */}
						<div className="box2 flex flex-col items-center px-[25px] gap-[50px] ">
							<p className="p-[50px] rounded-3xl bg-black/70">icon</p>
							<div className="text font-dm  flex flex-col text-center gap-5 ">
								<p className="text-[20px] leading-[20px]  font-bold tracking-[-0.3px]">
									Web & Mobile
								</p>
								<p className="text-[18px] leading-[30.96px] tracking-[0.27px] text-black/70">
									Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed
									magna dictum.
								</p>
							</div>
						</div>
						{/* box-3  */}
						<div className="box3 flex flex-col items-center px-[25px] gap-[50px] ">
							<p className="p-[50px] rounded-3xl bg-black/70">icon</p>
							<div className="text font-dm flex flex-col text-center gap-5 ">
								<p className="text-[20px] leading-[20px]  font-bold tracking-[-0.3px]">
									Web & Mobile
								</p>
								<p className="text-[18px] leading-[30.96px] tracking-[0.27px] text-black/70">
									Curabitur aliquet quam id dui posuere blandit. Nulla quis
									lorem ut libero malesuada.
								</p>
							</div>
						</div>
						{/* box-4 */}
						<div className="box4 flex flex-col items-center px-[25px] gap-[50px] ">
							<p className="p-[50px] rounded-3xl bg-black/70">icon</p>
							<div className="text font-dm flex flex-col text-center gap-5">
								<p className="text-[20px] leading-[20px]  font-bold tracking-[-0.3px]">
									Web & Mobile
								</p>
								<p className="text-[18px] leading-[30.96px] tracking-[0.27px] text-black/70">
									Donec sollicitudin molestie malesuada. Mauris blandit aliquet
									elit.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Works;
