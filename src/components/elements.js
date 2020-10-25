import styled from "styled-components";

export const Section = styled.div`
	color: #000;
	padding: 80px 0;
	background: #fff;
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
`;

export const Column = styled.div`
	margin-bottom: 15px;
	flex: 1;
	padding: 0 50px;
	text-align: center;

	@media screen and (max-width: 768px) {
		max-width: 100%;
		flex-basis: 100%;
		display: flex;
		justify-content: center;
		padding: 0;
	}
`;

export const Header = styled(Column)`
	display: flex;
	justify-content: center;
	text-align: center;
`;

export const TextWrapper = styled.div`
	max-width: 570px;
	padding-top: 0;
	padding-bottom: 60px;
	@media screen and (max-width: 768px) {
		padding: 0 10px 65px;
	}
`;

export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
`;

export const SubTitle = styled.p`
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
`;

export const ImgWrapper = styled.div`
	max-width: 555px;
	display: flex;
	padding-top: 20px;
	padding-bottom: 20px;
`;
export const Img = styled.img`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	max-height: 500px;
`;
