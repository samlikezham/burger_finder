class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			burgers: []
		}
	}


	render() {
		return(
			<Homepage inheritedState={this.state}/>
		)
	}
}

ReactDOM.render(
	<App url='http://localhost:3000/api/comments'/>,
	document.querySelector('main')
);