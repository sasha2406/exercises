import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import Weather from './Weather/Weather';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<main>
						<Rate />
						<Weather />
					</main>
				</div>

				<div className="container" id="cookie_info">
					<div className="site-content">
						<div className="well">
							На сайте используются куки. <br />Для работы сайта
							<button className="btn btn-primary btn-sm">ОК</button>
						</div>
					</div>
				</div>
			<Footer />
			</div>
		);
	}
}

export default App;
