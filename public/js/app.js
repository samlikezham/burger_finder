class App extends React.Component {
	constructor(props){
		super(props)
		this.accessHome = this.accessHome.bind(this)
		this.state = {
			home: false
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

			{(this.state.home) 
				?
				<Burgers /> 
			    : 
			    <Landing accessHome={this.accessHome} />
			}
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('main')
);