class Burgers extends React.Component {
	constructor(props){
		super(props)
		this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
		this.handleCreate = this.handleCreate.bind(this)
		this.toggleState = this.toggleState.bind(this)
		this.state = {
			burgers: [],
			burger: {},
			accessBurgerForm: false,
			burgerListIsVisible: true,
			addBurgerIsVisible: false,
			burgerIsVisible: false
		}
	}
	// mount data from api
	componentDidMount(){
		fetch('http://localhost:3000/burgers')
		.then(response => {
			return response.json();
		}).then(data => {this.setState({ burgers: data }) });
	}
	// updates current state of burgers
	handleCreate(burger){
		const updatedBurgers = this.state.burgers
		updatedBurgers.push(burger)
		this.setState({
			burgers: updatedBurgers
		})
	}
	// handles interaction with db
	handleCreateSubmit(burger){
		fetch('http://localhost:3000/burgers', {
			body: JSON.stringify(burger),
			method: 'POST',
			headers: {
				'Accept': 'application/json, text/plain, */*',
        		'Content-Type': 'application/json'
			}
		}).then(reponse => console.log(response))
		  .catch(error => console.log(error))
	}

	toggleState(st1, st2) {
		this.setState({
			[st1]: !this.state[st1],
			[st2]: !this.state[st2]
		})
	}

	
	render(){
		return(
		    <div className="homeContainer">
		    <a href="javascript:;" onClick={()=> {
			this.toggleState('addBurgerIsVisible', 'burgerListIsVisible')}}>Add A Burger</a>

		    {(this.state.addBurgerIsVisible) ?
		    	<BurgerForm 
		    		inheritedState={this.state}
		    		toggleState={this.toggleState}
		    		handleCreate={this.handleCreate}
		    		handleSubmit={this.handleCreateSubmit}
		    	/> :
		 				<div className="burgerIndex">
		     				{this.state.burgers.map((burger, index) => (
		        			<div key={index}>         
		             			<p>{burger.name}</p>
		             			<p>{burger.description}</p>
		             			<img src={burger.image} />
		        			</div>
		      				))}
		      			</div>
		      		}
			</div>
			 )

	}	
}
