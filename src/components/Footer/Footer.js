import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import CreateIcon from "@material-ui/icons/Create";
import CommentIcon from "@material-ui/icons/Comment";
import { Button, IconButton } from "@material-ui/core";
import Logo from "../../images/logo.png";
import {
	Foot,
	FooterContainer,
	FooterLeft,
	FooterLogo,
	FooterIcon,
	FooterSubHeading,
	FooterSocials,
	FooterSocialLink,
	FooterRight,
	FooterTitle,
	Form,
	FormContainer,
	FormInput,
	FormMessage,
	FooterBottom,
} from "./Footer.elements";

function Footer() {
	return (
		<>
			<Foot>
				<FooterContainer>
					<FooterLeft>
						<FooterLogo to='/'>
							<FooterIcon src={Logo} />
						</FooterLogo>
						<FooterSubHeading>
							Let us COME together to LEARN & GROW
						</FooterSubHeading>
						<FooterSocials>
							<FooterSocialLink
								href='https://www.youtube.com/c/devscript/'
								target='_blank'
								aria-label='Youtube'
							>
								<IconButton>
									<YouTubeIcon />
								</IconButton>
							</FooterSocialLink>
							<FooterSocialLink
								href='https://www.linkedin.com/company/devscripts/'
								target='_blank'
								aria-label='Linkedin'
							>
								<IconButton>
									<LinkedInIcon />
								</IconButton>
							</FooterSocialLink>
							<FooterSocialLink
								href='https://www.github.com/DevScript/'
								target='_blank'
								aria-label='Github'
							>
								<IconButton>
									<GitHubIcon />
								</IconButton>
							</FooterSocialLink>
							<FooterSocialLink
								href='https://www.instagram.com/devscript.tech/'
								target='_blank'
								aria-label='Instagram'
							>
								<IconButton>
									<InstagramIcon />
								</IconButton>
							</FooterSocialLink>
							<FooterSocialLink
								href='https://www.twitter.com/The_DevScript'
								target='_blank'
								aria-label='Twitter'
							>
								<IconButton>
									<TwitterIcon />
								</IconButton>
							</FooterSocialLink>
							<FooterSocialLink
								href='https://t.me/DevScript'
								target='_blank'
								aria-label='Telegram'
							>
								<IconButton>
									<TelegramIcon />
								</IconButton>
							</FooterSocialLink>
						</FooterSocials>
					</FooterLeft>
					<FooterRight>
						<FooterTitle>Contact Us</FooterTitle>
						<Form>
							<FormContainer>
								<PersonIcon />
								<FormInput type='text' name='name' placeholder='Name' />
							</FormContainer>
							<FormContainer>
								<EmailIcon />
								<FormInput
									type='text'
									name='email'
									placeholder='Email Address'
								/>
							</FormContainer>
							<FormContainer>
								<CreateIcon />
								<FormInput type='text' name='subject' placeholder='Subject' />
							</FormContainer>
							<FormContainer>
								<CommentIcon />
								<FormMessage name='message' placeholder='Message' />
							</FormContainer>
							<FormContainer>
								<Button variant='contained' color='primary'>
									Submit
								</Button>
							</FormContainer>
						</Form>
					</FooterRight>
				</FooterContainer>
				<FooterBottom>© 2020 DevScript. All Right Reserved</FooterBottom>
			</Foot>
		</>
	);
}

export default Footer;
