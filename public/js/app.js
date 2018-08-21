class App extends React.Component {
	constructor(props){
		super(props)
	}


	render() {
		return(
			<Homepage />
		)
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('main')
);