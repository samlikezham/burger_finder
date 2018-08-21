class Homepage extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			burgers: []
		}
	}

	componentDidMount(){
		fetch('http://localhost:3000/burgers')
		.then(response => {
			return response.json();
		}).then(data => {this.setState({ burgers: data }) });
	}

	

	render(){
	  let items = this.state.burgers.map((item) => {
      return(
        <div key={item.id}>
          <p>username: {item.name}</p>
          <p>highest score: {item.image}</p>
        </div>
       )
     })
	}



}