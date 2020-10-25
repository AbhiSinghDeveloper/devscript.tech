import React from "react";
import { Button } from "@material-ui/core";
import img1 from "../../images/1.svg";
import img2 from "../../images/2.svg";
import {
	Section,
	Header,
	TextWrapper,
	Heading,
	ImgWrapper,
	Img,
} from "../elements.js";
import {JocRow, JocColumn} from './JOC.elements'

function JOC() {
	return (
		<>
			<Section>
				<JocRow>
					<Header>
						<TextWrapper>
							<Heading>Join Our Community</Heading>
						</TextWrapper>
					</Header>
				</JocRow>
				<JocRow>
					<JocColumn>
						<ImgWrapper>
							<Img src={img2} alt='about svg' />
						</ImgWrapper>
						<Button variant='contained' color='primary'>
							Join Now
						</Button>
					</JocColumn>
					<JocColumn>
						<ImgWrapper>
							<Img src={img2} alt='about svg' />
						</ImgWrapper>
						<Button variant='contained' color='primary'>
							Join Now
						</Button>
					</JocColumn>
				</JocRow>
			</Section>
		</>
	);
}

export default JOC;
