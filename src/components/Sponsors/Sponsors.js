import React from "react";
import styled from "styled-components";
import amphan from "../../images/clients/AmphanTri.png";
import cb from "../../images/clients/cblogo.png";
import gg from "../../images/clients/geeks.png";
import iscap from "../../images/clients/ISCAP.png";
import lu from "../../images/clients/LU.png";
import neovantium from "../../images/clients/NeoVantium black.png";
import {
	Section,
	Row,
	Column,
	Header,
	TextWrapper,
	Heading,
	ImgWrapper,
	Img,
} from "../elements.js";

function Sponsors() {
	const SponsorWrapper = styled(ImgWrapper)`
		width: 200px;
	`;
	return (
		<>
			<Section>
				<Row>
					<Header>
						<TextWrapper>
							<Heading>OUR SPONSORS & COMMUNITY PARTNERS</Heading>
						</TextWrapper>
					</Header>
				</Row>
				<Row>
					<SponsorWrapper>
						<Img src={amphan} />
					</SponsorWrapper>
					<SponsorWrapper>
						<Img src={cb} />
					</SponsorWrapper>
					<SponsorWrapper>
						<Img src={gg} />
					</SponsorWrapper>
					<SponsorWrapper>
						<Img src={iscap} />
					</SponsorWrapper>
					<SponsorWrapper>
						<Img src={lu} />
					</SponsorWrapper>
					<SponsorWrapper>
						<Img src={neovantium} />
					</SponsorWrapper>
				</Row>
			</Section>
		</>
	);
}

export default Sponsors;
