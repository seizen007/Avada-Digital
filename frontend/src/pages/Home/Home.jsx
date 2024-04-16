import React from "react";
import homeCompo from "./index";
const Home = () => {
	return (
		<div className="home">
			<homeCompo.Header />
			<homeCompo.Navbar />
			<homeCompo.Banner />
			<homeCompo.Logos />
			<homeCompo.Banner2 />
			<homeCompo.Works />
			<homeCompo.fullService />
			<homeCompo.RecentProject />
			<homeCompo.Info />
			<homeCompo.Blog />
			<homeCompo.Subscribe />
			<homeCompo.IdentityBrand />
			<homeCompo.AvadaProducts />
			<homeCompo.Footer />
		</div>
	);
};

export default Home;
