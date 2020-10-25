import styled from "styled-components";
import { Section} from '../elements.js'

export const AboutSection = styled.div`
	color: #000;
	padding: 100vh 0 80px;
	background: #fff;

	@media screen and (max-width: 960px) {
		padding: 40px 0;
	}
`;

export const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: row;
	justify-content: center;
`;

export const Points = styled.ul``;

export const Point = styled.li``;

export const PointTitle = styled.h2``;

export const PointSubTitle = styled.p`
	padding-left: 20px;
`;
