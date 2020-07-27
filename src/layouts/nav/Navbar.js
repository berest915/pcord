import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { EmSpacing } from '../../AppGlobalCss'

import { EmPadding, Nav, GridBox } from './NavbarCss'
import { Img, Person, MidLi, RightLi, Icon } from './NavbarCss'

const Navbar = props => {
	// const { theme } = props
	
	return (
		// <Button  theme={theme}>
		// 		Styled-Components
		// 	</Button>
		<Fragment>
			<Nav className='display-grid'>
				<GridBox>
					<Link to='/'>
						<Img
							alt='logo'
							className='fab fa-youtube'
						/>
					</Link>
					<Person>San Leow</Person>
				</GridBox>

				<GridBox>
					<Link to='/' style={noTextDecoration}>
						<MidLi >Resume</MidLi>
					</Link>
					<EmPadding></EmPadding>
					<Link to='/' style={noTextDecoration}>
						<MidLi>Contact</MidLi>
					</Link>
				</GridBox>

				<GridBox>
					<RightLi>
						<Icon className='far fa-envelope-open'></Icon>Gmail
					</RightLi>
					<RightLi>
						<Icon className='fas fa-moon'></Icon>Mode
					</RightLi>
				</GridBox>
			</Nav>
			<EmSpacing marginBottom='3rem'/>
		</Fragment>
	)
}
export default Navbar

const noTextDecoration = {
	textDecoration: 'none'
}
