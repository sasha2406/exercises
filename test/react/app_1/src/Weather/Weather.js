import React from 'react';
import './Weather.css';

class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'cityWeather': {}
		}
		this.city = ['Kharkiv', 'Kiev', 'Gorod Belgorod'];
		this.getWeather();
	}
	getWeather = () => {
		fetch('http://api.openweathermap.org/data/2.5/box/city?bbox=29,49,39,51,6&appid=c698478836ca588039c69bacc8ef7990')
			.then(data => {
				return data.json();
			})
			.then(data => {
				let result = {};
				for (let i = 0; i < this.city.length; i++) {
					result[this.city[i]] = data.list.find(item => item.name === this.city[i]);
				}
				// console.log(result);
				this.setState({ cityWeather: result });
			});
	}
	render() {
		return (
			<div className="rate">
				<h3>Текущая погода</h3>
				<div className="flex-container">
					{Object.keys(this.state.cityWeather).map((keyName, i) =>
						(
							<div className="block flex-item" key={keyName}>
								<div className="currency-name">{keyName}</div>
								<div className="currency-in">Температура: {this.state.cityWeather[keyName].main.temp}&#176;С</div>
								<div className="currency-in">Влажность: {this.state.cityWeather[keyName].main.humidity}%</div>
								<div className="currency-in">Давление: {this.state.cityWeather[keyName].main.pressure}гПа</div>
							</div>
						)
					)}
				</div>
			</div>
		);
	}
}

export default Weather;

// Квадрат городов http://api.openweathermap.org/data/2.5/box/city?bbox=29,49,39,51,6&appid=c698478836ca588039c69bacc8ef7990
// Погода в одном городе http://api.openweathermap.org/data/2.5/weather?q=kharkiv&appid=c698478836ca588039c69bacc8ef7990
// мой API key c698478836ca588039c69bacc8ef7990