import React from "react";
import Picture from "../../../assets/Picture";
import Button from "../../../components/styledComponents/Button";
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
							<Button>Got a project? Contact us!</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default fullService;
