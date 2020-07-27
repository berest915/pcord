import styled from 'styled-components'

const CarouselCss = {}
export default CarouselCss

//! css sniplets

//! components
export const SlideContainer = styled.section`
	border: 1px solid black;
	margin: 3rem auto;
	width: 100vmin;
	height: 50vh;
	position: relative;
	overflow: hidden;
`
export const SlideContent = styled.div`
	transform: translateX(-${props => props.translate}%);
	transition: transform ease-out ${props => props.transition}s;
	height: 100%;
	width: 100%;
	/* display: flex; */
`
export const SlideDiv = styled.div`
	height: 100%;
	width: 100%;
	background: url(${props => props.slide});
	background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
`
export const ArrowDiv = styled.div`
	border: 2px solid #fff;
	background-color: transparent;
	color: #fff;
	cursor: pointer;
	padding: 13px 15px;
	border-radius: 50%;
	outline: none;
	position: absolute;
	top: 45%;
	${props => props.direction === 'left' ? `left`:`right`}: 1rem;

	&:hover {
		background-color: #fff;
		color: #333;
		transform: scale(1.1)
	}
`



export const Slide = styled.div`
	height: 100%;
	width: 100%;
	background: url(${props => props.img}) no-repeat center top/cover;

	position: absolute;
	top: 0;
	left: 0;
	opacity: ${props => (props.current ? '1' : '0')};
	transition: opacity 0.4s ease-in-out;
`
export const Content = styled.h4`
	color: #333;
	padding: 0.5rem;
	position: absolute;
	background-color: rgba(255, 255, 255, 0.8);
	width: 50%;
	bottom: 15%;
	left: -50%;
	opacity: ${props => (props.current ? '1' : '0')};
	transform: ${props => (props.current ? 'translateX(100%)' : 'none')};
	transition: ${props =>
		props.current ? 'all 0.7s ease-in-out 0.4s' : 'none'};
`
export const Btn = styled.button`
	border: 2px solid #fff;
	background-color: transparent;
	color: #fff;
	cursor: pointer;
	padding: 13px 15px;
	border-radius: 50%;
	outline: none;
	position: absolute;
	top: ${props => props.topIndex};
	${props => props.side}: 1rem;

	&:hover {
		background-color: #fff;
		color: #333;
	}
`

// import styled from 'styled-components'

// const CarouselCss = {}
// export default CarouselCss

// //! css sniplets

// //! components
// export const SlideContainer = styled.section`
// 	border: 1px solid black;
// 	margin: 3rem auto;
// 	width: 100vmin;
// 	height: 50vh;
// 	position: relative;
// 	overflow: hidden;
// `
// export const Slide = styled.div`
// 	height: 100%;
// 	width: 100%;
// 	background: url(${props => props.img}) no-repeat center top/cover;

// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	opacity: ${props => (props.current ? '1' : '0')};
// 	transition: opacity 0.4s ease-in-out;
// `
// export const Content = styled.h4`
// 	color: #333;
// 	padding: 0.5rem;
// 	position: absolute;
// 	background-color: rgba(255, 255, 255, 0.8);
// 	width: 50%;
// 	bottom: 15%;
// 	left: -50%;
// 	opacity: ${props => (props.current ? '1' : '0')};
// 	transform: ${props => (props.current ? 'translateX(100%)' : 'none')};
// 	transition: ${props =>
// 		props.current ? 'all 0.7s ease-in-out 0.4s' : 'none'};
// `
// export const Btn = styled.button`
// 	border: 2px solid #fff;
// 	background-color: transparent;
// 	color: #fff;
// 	cursor: pointer;
// 	padding: 13px 15px;
// 	border-radius: 50%;
// 	outline: none;
//   position: absolute;
//   top: ${props => props.topIndex};
//   ${props => props.side}: 1rem;

// 	&:hover {
// 		background-color: #fff;
// 		color: #333;
// 	}
