/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: "2rem",
					"2xl": "8rem",
				},
			},
			fontFamily: {
				dm: ["DM Sans"],
				syne: ["Syne", "sans-serif"],
			},
			gridTemplateColumns: {
				banner:
					"repeat(1, minmax(0, 0.7fr)) minmax(0, 0.5fr) repeat(1, minmax(0, 1fr))",
			},
			backgroundImage: {
				banner: "url('src/assets/banner-2.jpg')",
				interior: "url('src/assets/prebuilt-web/avada-interior-prebuilt.jpg')",
				subscribe: "url('src/assets/banner-3.jpg')",
			},
			colors: {
				buttonH: "#f45c20",
				buttonT: "#f45c20",
				buttonN: "#f45b1f",
			},
		},
	},
	plugins: [],
};
