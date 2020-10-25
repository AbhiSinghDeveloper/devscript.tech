import React, { useState, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import Logo from "../../images/logo.png";

import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavItem,
	NavItemBtn,
	NavTarget,
	NavLink,
	NavBtnLink,
} from "./Navbar.elements";

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const [scrollNav, setScrollNav] = useState(false);

	const handleClick = () => {
		setClick(!click);
		setScrollNav(!click);
	};

	const closeMobileMenu = () => setClick(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			if (click) {
				setScrollNav(true);
			} else {
				setScrollNav(false);
			}
		}
	};

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNav);
		showButton();
	});

	window.addEventListener("resize", showButton);

	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavbarContainer>
					<NavLogo to='/' onClick={closeMobileMenu}>
						<NavIcon src={Logo} />
						DevScript
					</NavLogo>
					<MobileIcon onClick={handleClick}>
						{click ? <CloseIcon /> : <MenuIcon />}
					</MobileIcon>
					<NavMenu onClick={handleClick} click={click} scrollNav={scrollNav}>
						<NavItem>
							<NavTarget to='/' onClick={closeMobileMenu}>
								Home
							</NavTarget>
						</NavItem>
						<NavItem>
							<NavLink href='http://192.168.2.5:3001' onClick={closeMobileMenu}>
								Opportunity
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='http://192.168.2.5:3002' onClick={closeMobileMenu}>
								Events
							</NavLink>
						</NavItem>
						<NavItemBtn>
							{button ? (
								<NavBtnLink to='/sign-up'>
									<Button variant='contained' color='primary'>
										SIGN UP
									</Button>
								</NavBtnLink>
							) : (
								<NavBtnLink to='/sign-up'>
									<Button
										onClick={closeMobileMenu}
										variant='contained'
										color='primary'
									>
										SIGN UP
									</Button>
								</NavBtnLink>
							)}
						</NavItemBtn>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
}

export default Navbar;
