import styled from "styled-components";
import { Row, Column } from "../elements.js";

export const JocRow = styled(Row)`
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const JocColumn = styled(Column)`
	@media screen and (max-width: 768px) {
		max-width: 100%;
		flex-basis: 100%;
		display: flow-root;
		justify-content: center;
		padding: 0;
		margin-bottom: 50px;
	}
`;
