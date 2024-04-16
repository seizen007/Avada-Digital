import React from "react";
import Picture from "../../../assets/Picture";

const fullService = () => {
	return (
		<div className="fullservice">
			<div className="wrapper px-[132px]">
				<div className="elements flex items-center justify-between">
					<div className="picture">
						<img src={Picture.consultant} alt="" />
					</div>
					<div className="box flex flex-col gap-5">
						<div className="texts">
							<p>Web and mobile development</p>
							<p>We are a full-service digital company</p>
							<p>
								Mauris purus maecenas purus, aliquet lacus varius. Proin
								venenatis vel cras phasellus condimentum.
							</p>
						</div>
						<div className="button">
							<button>Got a project? Contact us!</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default fullService;
