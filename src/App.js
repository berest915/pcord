import React, { Fragment } from 'react'
import './App.css'
import { EmSpacing } from './AppGlobalCss.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './layouts/nav/Navbar'
import Carousel from './coms/Slider/Carousel'
import BetaCarousel from './coms/Slider/BetaCarousel'
import TimePath from './coms/timepath/TimePath'
import MainFooter from './layouts/footer/MainFooter'

//? latter
const theme = {
	dayTheme: {
		backgroundColor: 'white',
		color: 'black',
	},
	darkTheme: {
		backgroundColor: 'black',
		color: 'white',
	},
}

const App = () => {
	return (
		<Router>
			<div className='App'>
				<Navbar theme={theme.darkTheme} />
				{/* <Carousel /> */}
				<Switch>
					<Route exact path='/' component={Main} />
					<Route exact path='/about' component={About} />
				</Switch>
			</div>
		</Router>
	)
}
export default App

const Main = () => { 
	return (
		<Fragment>
			<EmSpacing marginBottom='3rem' />
			<BetaCarousel />
			<EmSpacing marginBottom='6rem' />
			<TimePath />
			<EmSpacing marginBottom='6rem' />
			<MainFooter />
			<EmSpacing marginBottom='6rem' />
		</Fragment>
	)
}
const About = () => <div>About Page</div>