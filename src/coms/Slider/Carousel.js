import React, { Fragment, useState, useEffect } from 'react'
import './style.css'

import {
	SlideContainer,
	SlideContent,
	SlideDiv,
	ArrowDiv,
	Slide,
	Content,
	Btn,
} from './CarouselCss'

import e1 from './img/e1.jpg'
import e2 from './img/e2.jpg'
import e3 from './img/e3.jpg'

const images = [e1, e2, e3]

//* Slider == Carousel  => top-component
//* SliderContent == SlideContainer=> container to handle all slides
const Carousel = () => {
	const [state, setState] = useState({
		translate: 0, // translate px
		transition: 0.45, // ease-in-out time
		activeIndex: 0,
	})
	const { translate, transition, activeIndex } = state

	const nextSlide = () => {
		if (activeIndex === images.length - 1) {
			setState({
				...state,
				activeIndex: 0,
				translate: 0,
			})
		} else {
			setState({
				...state,
				activeIndex: activeIndex + 1,
				translate: (activeIndex + 1) * 100,
			})
		}
	}
	
	const prevSlide = () => {
		if (activeIndex === 0) {
			return setState({
				...state,
				translate: (images.length - 1) * 100,
				activeIndex: images.slides.length - 1,
			})
		}

		setState({
			...state,
			activeIndex: activeIndex - 1,
			translate: (activeIndex - 1) * 100,
		})
	}

	return (
		<Fragment>
			<SlideContainer>
				<SlideContent
					translate={translate}
					transition={transition}
				
				>
					{images.map((slide, i) => (
						<SlideDiv key={slide + i} slide={slide} />
					))}
					<Arrow direction='left' handleClick={prevSlide}/>
					<Arrow direction='right' handleClick={nextSlide}/>
				</SlideContent>
			</SlideContainer>
		</Fragment>
	)
}
export default Carousel

// //! arrow component
const Arrow = ({ direction, handleClick }) => {
	return (
		<Fragment>
			<ArrowDiv direction={direction} onClick={handleClick}>
				<i className={`fas fa-arrow-${direction}`}></i>
			</ArrowDiv>
		</Fragment>
	)
}

// import React, { Fragment } from 'react'
// import './style.css'

// import { SlideContainer, Slide, Content, Btn } from './CarouselCss'
// import e1 from './img/e1.jpg'
// import e2 from './img/e2.jpg'
// import e3 from './img/e3.jpg'

// //* Slider == Carousel  => top-component
// //* SliderContent == SlideContainer=> container to handle all slides
// const Carousel = () => {

// 	return (
// 		<Fragment>
// 			<SlideContainer>
// 				<Slide current={true} img={e1}>
// 					<Content current={true}>Slide One</Content>
// 				</Slide>
// 				<Slide current={false} img={e2}>
// 					<Content current={false}>Slide Two</Content>
// 				</Slide>
// 				<Slide current={false} img={e3}>
// 					<Content current={false}>Slide Three</Content>
// 				</Slide>

// 				<Btn topIndex='45%' side='left'>
// 					<i className='fas fa-arrow-left'></i>
// 				</Btn>
// 				<Btn topIndex='45%' side='right'>
// 					<i className='fas fa-arrow-right'></i>
// 				</Btn>
// 			</SlideContainer>
// 		</Fragment>
// 	)
// }

// export default Carousel
