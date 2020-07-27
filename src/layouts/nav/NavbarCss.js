import styled, {css}  from 'styled-components'

//! css sniplets
const hoverBottom = css`
	&:hover{
		border-bottom: 2px solid black;}
`
//! Empty Div Spacing
export const EmPadding = styled.div`
	padding: 0.5rem;
`
//! Container
export const Nav = styled.nav`
	padding-top: 0.2rem;
	display: grid;
	grid-template-columns: 1fr 1.5fr 1fr;
	/* grid-template-columns: 1.8fr 3fr 1.5fr; */
	height: 50px;
	max-height: 50px;
`
export const GridBox = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
`
//! Left Section
export const Img = styled.i`
	font-size: 2rem;
	margin-right: 1rem;
	color: darkgray;
	/* background: rgb(223, 221, 215); */
`
export const Person = styled.p`
	font-weight: bold;
	padding: 10px;
`
//! Mid Section
export const MidLi = styled.li`
	font-weight: bold;
	list-style: none;
	padding: 10px 20px;
	text-align: right;
	color: gray;
	${hoverBottom}
`
//! Right Section
export const RightLi = styled.li`
	font-weight: 600;
	list-style: none;
	padding: 10px 0 10px 10px;
	text-align: right;
	color: black;
`
export const Icon = styled.i`
	padding: 5px;
	color: black;
`
//! defaults
const NavbarCss = {}
export default NavbarCss
