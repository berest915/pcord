import React from 'react'
import Carousel from 'react-elastic-carousel'

import e1 from './img/e1.jpg'
import e2 from './img/e2.jpg'
import e3 from './img/e3.jpg'

const BetaCarousel = () => {
	// const images = [e1, e2, e3]

	return (
		<section style={sectionStyle}>
			<Carousel style={{}}>
				<img alt='' src={e1} />
				<img alt='' src={e2} />
				<img alt='' src={e3} />
				{/*//* Section below doesn't render image correctly */}
				{/* {images.map((slide, i) => (
          <ImgDiv key={slide + i} slide={slide} />
        ))} */}
			</Carousel>
		</section>
	)
}

export default BetaCarousel
const sectionStyle = {
	padding: '2rem 10%',
	backgroundColor: '#434343',
	borderRadius: '1rem'
}
// const ImgDiv = styled.div`
// 	height: 100%;
// 	width: 100%;
// 	background: url(${props => props.slide});
// 	background-size: cover;
// 	background-repeat: no-repeat;
// 	background-position: center;
// `
