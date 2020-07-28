import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Nav, FlexItem } from './NavbarCss'
import { Img, Person, MidLi, RightLi, Icon } from './NavbarCss'

const Navbar = props => {
	return (
		<Fragment>
			<Nav className='display-grid'>
				<FlexItem>
					<Link to='/'>
						<Img alt='logo' className='fab fa-youtube' />
					</Link>
					<Person>San Leow</Person>
				</FlexItem>

				<FlexItem>
					<Link to='/' style={noTextDecoration}>
						<MidLi marginRight='2rem'>Resume</MidLi>
					</Link>
					<Link to='/' style={noTextDecoration}>
						<MidLi>Contact</MidLi>
					</Link>
				</FlexItem>

				<FlexItem>
					<RightLi>
						<Icon className='far fa-envelope-open'></Icon>Gmail
					</RightLi>
					<RightLi>
						<Icon className='fas fa-moon'></Icon>Mode
					</RightLi>
				</FlexItem>
			</Nav>
		</Fragment>
	)
}
export default Navbar

const noTextDecoration = {
	textDecoration: 'none',
}
