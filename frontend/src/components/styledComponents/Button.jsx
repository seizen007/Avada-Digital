import React from "react";
import styled from "styled-components";

const Button = styled.button`
	padding-left: 40px;
	padding-right: 40px;
	padding-top: 17px;
	padding-bottom: 17px;
	color: ${(props) => props.$textColor || "white"};
	border-radius: 0.8rem;
	font-weight: 600;
	font-family: "DM Sans";
	background-color: ${(props) => props.$bg || "#f45c20"};
	transition-duration: 300ms;

	&:hover {
		background-color: ${(props) => props.$bghover || "rgba(244, 92, 32, 0.05)"};
		
		color: ${(props) => props.$textColorhover || "#f45c20"};
	}
`;
export default Button;
