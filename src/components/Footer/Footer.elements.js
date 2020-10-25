import styled from "styled-components";
import { Link } from "react-router-dom";

export const Foot = styled.div`
	background: #101922;
	display: block;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 1.2rem;
	position: relative;
	bottom: 0;
	left: 0;
	right: 0;
`;

export const FooterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 1;
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
	}
`;

export const FooterLeft = styled.div`
	align-items: center;
	justify-content: space-around;
`;

export const FooterLogo = styled(Link)`
	color: #fff;
	cursor: pointer;
	font-size: 2rem;
	display: block;
	text-align: center;
`;

export const FooterIcon = styled.img`
	height: 200px;
`;

export const FooterSubHeading = styled.p`
	color: #fff;
	margin-top: 0;
`;

export const FooterSocials = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: 50px;
`;

export const FooterSocialLink = styled.a`
	& .MuiSvgIcon-root {
		color: #fff;
	}
`;

export const FooterRight = styled.div`
	align-items: center;
	justify-content: space-around;
	@media screen and (max-width: 820px) {
		margin-top: 50px;
		width: 320px;
	}
`;

export const FooterTitle = styled.h1`
	color: #fff;
	text-align: center;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

export const FormContainer = styled.div`
	margin: 10px 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	& .MuiSvgIcon-root {
		color: #fff;
	}
`;

export const FormInput = styled.input`
	padding: 10px 20px;
	border-radius: 5px;
	margin-right: 10px;
	margin-left: 10px;
	background: #1e273a;
	border: none;
	font-size: 16px;
	/* height: 55px; */
	width: 400px;
	color: #fff;

	&::placeholder {
		color: #aaa;
	}
	@media screen and (max-width: 820px) {
		width: 100%;
		margin: 0 0 16px 10px;
	}
`;

export const FormMessage = styled.textarea`
	padding: 10px 20px;
	border-radius: 5px;
	margin-right: 10px;
	margin-left: 10px;
	background: #1e273a;
	border: none;
	font-size: 16px;
	height: 100px;
	width: 400px;
	color: #fff;
	resize: none;

	&::placeholder {
		color: #aaa;
	}
	@media screen and (max-width: 820px) {
		width: 100%;
		margin: 0 0 16px 10px;
	}
`;

export const FooterBottom = styled.div`
	align-items: center;
	justify-content: space-around;
	padding: 20px 0;
`;
