import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
			ip:''
		}
	}

	componentDidMount(){

		fetch('https://api.ipify.org/?format=json')
			.then((response)=>{
				return response.json();
			})
			.then((json) => {
				this.setState({ip:json.ip});
			});

	}

	render(){
		return (
			<div>
				<h3>HOME</h3>
				<div>
					{this.state.ip == '' && 
						<i>Carregando...</i>
					}
					{this.state.ip != '' && 
						<p>Seu IP é: {this.state.ip}</p>
					}
				</div>
				<Link to="/sobre">Ir para sobre</Link>						
			</div>
			);
	}
}