import React, { Component } from 'react';

import ReactDom from 'react-dom'

class Overlay extends Component {
	constructor(props) {

		super(props)

		this.containerOverlay = document.createElement('div')

		document.body.appendChild(this.containerOverlay)

	}

	componentWillUnmount() {
		document.body.removeChild(this.containerOverlay)
	}

	render() {
		return ReactDom.createPortal(
			<div className="overlay">
				<span onClick={this.props.onClose}>X</span>
				{ this.props.children }
			</div>,
			this.containerOverlay
		)
	}
}

export default class renderOutside extends Component {

	constructor(props) {
		super(props)

		this.state = {
			overlayActive:true
		}
	}

	closeOverlay = () => {
		this.setState({
			overlayActive: false
		});
	}

  render() {
    return (
    	<div>
			<h1>Soy el que se renderiza dentro del div root</h1>

			{	this.state.overlayActive &&
				<Overlay onClose={this.closeOverlay}>
					<h2>Hola bienvenido</h2>
				</Overlay>

			}

      	</div>
    );
  }
}
