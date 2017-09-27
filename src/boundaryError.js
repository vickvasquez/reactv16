import React, { Component } from 'react'
import ReactDom from 'react-dom'


class MyErrorBoundary extends Component {

	constructor(props) {
		super(props)

		this.state = {
			hasError:false
		}
	}


	componentDidCatch(error,info) {
		console.log(error)
		console.log(info)
		this.setState(state => ({...state,hasError:true}))
	}


	render() {

		if(this.state.hasError)
			return <div>something, went wrong</div>
		else 
			return this.props.children

	}

}


const Profile = props => (
	<div>
		Name: {props.user.name}
	</div>
)

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			user:{
				name:'Vick Vasquez'
			}
		}
	}

	updateUser = () => {
		this.setState(state => ({
			...state,
			user:null
		}));
	}

	render(){ 
		return (
			<div>
				<MyErrorBoundary>
					<Profile user={this.state.user} />
					<button onClick={this.updateUser}> Update </button>
				</MyErrorBoundary>
			</div>

		)
		
	}

}

export default App