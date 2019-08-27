import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
			lista:[]
		}
	}

	componentDidMount(){

		// fetch('http://jsonplaceholder.typicode.com/posts')
		// 	.then(r => r.json())
		// 	.then(json => {
		// 		this.setState({lista:json})
		// 	});

		let dados = {
			title:'Post novo',
			body: 'post novo conteudo',
			userId:'1'
		}

		fetch('http://jsonplaceholder.typicode.com/posts',{
			method:'POST',
			body:JSON.stringify(dados),
			headers:{
				"Content-type":"application/json;charset=UTF-8"
			}
		})
		.then(r => r.json())
		.then(json => {
			console.log(json)
		})

	}

	render(){
		return (
			<div>
				<h3>HOME</h3>
				{this.state.lista.length == 0 && 
					<i>Carregando</i>
				}
				{this.state.lista.length > 0 && 
					<ul>
						{this.state.lista.map((item)=>{
							return (
								<li>{item.title}</li>
								);
						})}
					</ul>
				}
				<br/>
				<Link to="/sobre">Ir para sobre</Link>						
			</div>
			);
	}
}