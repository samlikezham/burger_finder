class App extends React.Component {
	constructor(props){
		super(props)
		this.accessHome = this.accessHome.bind(this)
		this.updateCurrentUser = this.updateCurrentUser.bind(this)
		this.signOut = this.signOut.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.addNewUser = this.addNewUser.bind(this)
		this.state = {
			home: false,
			currentUser: null,
			users:[]
		}
	}

	accessHome(){
		this.setState({
			home: true
		})
	}
	handleSubmit(username, password){
		console.log(username, password)
	    event.preventDefault();
	    this.accessHome();
	    this.updateCurrentUser(username, password)
	    let body = JSON.stringify({"username": username, "password": password})
    	console.log(body)
		fetch('http://localhost:3000/users', {
			method: 'POST',
			headers: {
				'Accept': 'application/json, text/plain, */*',
        		'Content-Type': 'application/json'
			},
			body: body
		}).then(response => response.json())
			.then(foundUser => {
				if (!!foundUser) {
					this.setState({currentUser: foundUser})
				} else {
					fetch('http://localhost:3000/users' + username)
						.then(response => response.json())
						.then(user => {
							if (!!user) {
								return
							} else {
								fetch('http://localhost:3000/sessions', {
									method: 'POST',
									headers: {
										'Accept': 'application/json, text/plain, */*',
										'Content-Type': 'application/json'
									},
									body: body,
								}).then((response) => {return response.json()})
								.then((user)=>{
									this.addNewUser(user)
									this.setState({currentUser: user})
								}).catch(error => console.log(error))
							}
						})
				}
			})
	}
	// update current user/password
	updateCurrentUser(username, password){
		this.setState({
			currentUser:
				username,
				password
		})
	}
	addNewUser(user) {
    this.setState({
      users: this.state.users.concat(user)
    	})
  	}
  	// need to implement logout function
	signOut() {
		this.setState({
			home: false
		})
	}

	render() {
		return(
			<div className="main">

			{(this.state.home) 
				?
				<Burgers
					signOut={this.signOut}
					username={this.state.currentUser.username}
					accessHome={this.accessHome} /> 
			    : 
			    [
			    	<Landing 
			    		accessHome={this.accessHome} 
			    		handleSubmit={this.handleSubmit} />,
					<Auth 
						handleSubmit={this.handleSubmit}
						accessHome={this.accessHome} />
				]
			}
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('main')
);