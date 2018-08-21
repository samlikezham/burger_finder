class Homepage extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			burgers: [],
			accessBurgerForm: false
		}
	}

	componentDidMount(){
		fetch('http://localhost:3000/burgers')
		.then(response => {
			return response.json();
		}).then(data => {this.setState({ burgers: data }) });
	}

	
	render(){
		return(
		this.state.burgers.map((burger, id) => {
			console.log(burger.name)
			return(
				<div key={id}>
					<p>{burger.name}</p>
					<img src={burger.image} />
				</div>
			)
		})
       )


	}	
}
