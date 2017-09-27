import React, { Component } from 'react';


const Aux = props => props.children


const Verduras = () => 
	<Aux>
		<li key="1">Tomate</li>
		<li key="2">Papas</li>
		<li key="3">Cebolla</li>
	</Aux>

const Fruits = () => [
	<li key="1">Manzana</li>,
	<li key="2">Uvas</li>,
	<li key="3">Higo</li>
]


class MoreFruits extends Component {
	render() {

		return [
			<li key="1">Jicama</li>,
			<li key="2">Papaya</li>,
			<li key="3">Melon</li>
		]

	}
}

class renderMultiple extends Component {
 
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div>

    		<ul>
    			<li>Platano</li>
    			<li>Fresas</li>
    			<li>Mangos</li>
    			<Fruits />
    			<MoreFruits />
    			<Verduras/>
    		</ul>

    	</div>
    );
  }
}


export default renderMultiple