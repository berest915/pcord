import React from 'react'
import styled, { css } from 'styled-components'
import { EmSpacing } from '../../AppGlobalCss'
import logo1 from './img/logo1.png'
const spanOne = {
  flex: '1'
}
const spanTwo = {
  flex: '1'
}
const p1 ={
  width: '50%',
  textAlign: 'center',
  fontSize: '2rem'
}
const p2 ={
  width: '50%',
  textAlign: 'center',
}
const p3 ={
  width: '50%',
  textAlign: 'center',
  fontSize: '1rem',
  color: 'orange'
}
const MainFooter = () => {
	return (
		<FooterContainer bgColor={lightGray}>
			<LeftCard bgColor={lightGray}>
				<H4>Bits and Pieces</H4>
				<P>The best of frontend development, articles, tutorials, and...</P>
				<Btn>
					Notified <i className='fas fa-chevron-down'></i>
				</Btn>
				<EmBorder />
				<ViewCount>
					<Img className='fas fa-street-view'></Img> 255
				</ViewCount>
			</LeftCard>
			<RightCard bgColor={darkGray}>
				<TopFlexContainer>
					<Icon1 style={{ color: 'white' }} className='fab fa-jsfiddle'></Icon1>
					<Title1 style={{ color: 'orange' }}>
						<span style={spanOne}>React Novice Developer</span>
						<span style={spanTwo}>by Leow Wei San</span>
					</Title1>
					<Icon2
						style={{ color: 'white' }}
						className='fas fa-cloud-download-alt'
					></Icon2>
				</TopFlexContainer>
				<MidFlexContainer>
					<p style={p1}>React: CSS in Js</p>
					<p style={p2}>with Styled-Components</p>
          <br></br>
          <br></br>
					<p style={p3}>Contact : berest915@gmail.com</p>
				</MidFlexContainer>
				<BtmFlexContainer>
					<Icon3 style={{ color: 'white' }} className='fas fa-terminal'></Icon3>
					<Icon4 style={{ color: 'white' }} className='fas fa-code'></Icon4>
				</BtmFlexContainer>
			</RightCard>
		</FooterContainer>
	)
}
export default MainFooter
//! css var & sniplets
const darkGray = '#333333'
const lightGray = '#434343'
const LeftElementSameMargin = css`
	margin: 0.5rem 0;
`
//! styled-components
const FooterContainer = styled.div`
	padding: 1rem 1.5rem;
	min-height: 300px;
	border-radius: 1rem;
	background-color: ${props => props.bgColor};
	display: flex;
	font-size: 0.8rem;
`
const LeftCard = styled.div`
	width: 30%;
	background-color: ${props => props.bgColor};
	color: lightgray;
	padding: 0.7rem 2rem;
	margin-right: 2%;
`
const RightCard = styled.div`
	width: 100%;
	background-color: ${props => props.bgColor};
	border-radius: 0.75rem;
	padding: 1rem 1.5rem 0rem 1.5rem;
	display: flex;
	flex-direction: column;
`
const TopFlexContainer = styled.section`
	display: flex;
`
const MidFlexContainer = styled.section`
	min-height: 70%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const BtmFlexContainer = styled.section`
	display: flex;
`
const Icon1 = styled.i`
	font-size: 2rem;
	flex: 1;
  justify-content: center;
`
const Title1 = styled.p`
  font-size: 0.8rem;
	font-weight: bold;
	flex: 10;
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
`

const Icon2 = styled.button`
	font-size: 1.5rem;
	flex: 1 flex-end;
	background: ${darkGray};
	outline: none;
	border: none;
	cursor: pointer;
	justify-content: center;
`
const Icon3 = styled.i`
	font-size: 1rem;
  flex: 11;
  align-items: center;
`
const Icon4 = styled.i`
	font-size: 1rem;
	flex: 1 flex-end;
`
//! styled-ele-components
const H4 = styled.h4`
	color: white;
	${LeftElementSameMargin}
`
const P = styled.p`
	${LeftElementSameMargin}
`
const Btn = styled.button`
	padding: 5px;
	font-family: Garamond bold;
  border-radius: 5px;
  cursor: pointer;
	${LeftElementSameMargin}
	outline: none;
`
const EmBorder = styled.div`
	padding: 0.5rem;
	border-bottom: 1px solid;
`
const ViewCount = styled.div`
	margin: 1rem 0;
	display: flex;
`
const Img = styled.i`
	font-size: 1.4rem;
	margin-right: 0.5rem;
`
//

//!  after fix layout, make nested onto container to replace P H6 Btn components
