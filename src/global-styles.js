import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  html, body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'PT Sans', sans-serif;
 } 
`;

export const Container = styled.div`
	z-index: 1;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding-right: 50px;
	padding-left: 50px;
	@media screen and (max-width: 991px) {
		padding-right: 30px;
		padding-left: 30px;
	}
`;

export const Button = styled(Link)`
	border-radius: 50px;
	background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
	white-space: nowrap;
	padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
	color: ${({ dark }) => (dark ? "#010606" : "#fff")};
	font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ primary }) => (primary ? "#fff" : "#01bf71")};
	}
`;

export default GlobalStyle;
