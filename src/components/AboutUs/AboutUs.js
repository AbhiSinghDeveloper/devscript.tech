import React from "react";
import img from "../../images/7.svg";
import {
	AboutSection,
	Row,
	Points,
	Point,
	PointTitle,
	PointSubTitle,
} from "./AboutUs.elements";
import {
	Column,
	Header,
	TextWrapper,
	Heading,
	SubTitle,
	ImgWrapper,
	Img,
} from "../elements.js";

function AboutUs({ pointerProps }) {
	return (
		<>
			<AboutSection>
				<Row>
					<Header>
						<TextWrapper>
							<Heading>Find Out More About Us</Heading>
							<SubTitle>
								Started on 7th July ,2020 we are a vibrant knowledge society,
								passionate to bring a deep sense of technology for you to thrive
								in the real world. DevScript community provides a platform for
								talented and motivated students who are interested in domains
								like Machine Learning, Game Development, Embedded Systems and
								other techno-savvy fields.
							</SubTitle>
						</TextWrapper>
					</Header>
				</Row>
				<Row>
					<Column>
						<ImgWrapper>
							<Img src={img} alt=' svg' />
						</ImgWrapper>
					</Column>
					<Column>
						<TextWrapper>
							<Heading>What we DO?</Heading>
							<SubTitle>
								We conduct webinars, lectures, quizzes, technical debates and
								hacks that help you to develop a niche in the tech society. We
								help you brush up your skills regularly through hackathons and
								quizzes.
							</SubTitle>
							<Points>
								{Object.entries(pointerProps).map(([key, value], index) => (
									<Point key={index}>
										<PointTitle>{key}</PointTitle>
										<PointSubTitle>{value}</PointSubTitle>
									</Point>
								))}
							</Points>
						</TextWrapper>
					</Column>
				</Row>
			</AboutSection>
		</>
	);
}

export default AboutUs;
