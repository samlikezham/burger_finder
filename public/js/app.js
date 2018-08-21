class App extends React.Component {
	constructor(props){
		super(props)
		this.accessHome = this.accessHome.bind(this)
		this.state = {
			home: false,
			burger: null
		}
	}

	accessHome(){
		this.setState({
			home: true
		})
	}

	render() {
		return(
			<div className="main">

			{(this.state.home) ?
				<Burgers 
					handleSubmit={this.handleCreateSubmit} 
					handleCreate={this.handleCreate} 
					getBurger={this.getBurger}
				/> 
			    : <Landing 
			    	accessHome={this.accessHome} 
			    />
			}
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('main')
);