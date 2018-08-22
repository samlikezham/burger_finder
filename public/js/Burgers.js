class Burgers extends React.Component {
	constructor(props){
		super(props)
		this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
		this.handleCreate = this.handleCreate.bind(this)
		this.toggleState = this.toggleState.bind(this)
		this.getBurger = this.getBurger.bind(this)
		this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
		this.get
		this.state = {
			burgers: [],
			burger: {},
			accessBurgerForm: true,
			burgerListIsVisible: true,
			addBurgerIsVisible: false,
			burgerIsVisible: false
		}
	}
	// mount data from api
	componentDidMount(){
		this.getBurgers();
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
		console.log(burger)
		fetch('http://localhost:3000/burgers', {
			body: JSON.stringify(burger),
			method: 'POST',
			headers: {
				'Accept': 'application/json, text/plain, */*',
        		'Content-Type': 'application/json'
			}
		})
		.then(createdBurger => {
	      return createdBurger.json()
	    })
	    .then(jsonedPerson => {
	      this.handleCreate(jsonedPerson)
	      this.toggleState('addBurgerIsVisible', 'burgerListIsVisible')
	    })
	    .catch(error => console.log(error))
	}
	handleUpdateSubmit(burger){
		fetch('http://localhost:3000/burgers/'+ burger._id, {
	      body: JSON.stringify(burger),
	      method: 'PUT',
	      headers: {
	        'Accept': 'application/json, text/plain, */*',
	        'Content-Type': 'application/json'
	      }
	    })
	      .then(updatedPerson => {
	        return updatedPerson.json()
	    })
	      .then(jsonedPerson => {
	        //need to update state
	        this.getBurgers()
	        this.toggleState('burgerListIsVisible', 'burgerIsVisible')
	    })
	      .catch(error => console.log(error))
	}
	getBurgers(){
		fetch('http://localhost:3000/burgers')
		.then(response => {
			return response.json();
		}).then(data => {this.setState({ burgers: data }) });
	}
	// toggles from index/form/show pages
	toggleState(st1, st2) {
		this.setState({
			[st1]: !this.state[st1],
			[st2]: !this.state[st2]
		})
	}
	// for show page
	getBurger(burger) {
		this.setState({
			burger: burger
		})
	}
	// delete - spread/rest operator to return all items
	deleteBurger(burger, index) {
		console.log(burger)
		fetch('http://localhost:3000/burgers/' + burger._id,
	    {
	      method: 'DELETE'
	    })
	    .then(data => {
	      this.setState({
	        burgers: [
	          ...this.state.burgers.slice(0, index),
	          ...this.state.burgers.slice(index + 1)
	        ]
	      })
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
		    	/> : ''
		    }
		    {(this.state.burgerListIsVisible) ?
		 		<div className="burgerIndex">
		     		{this.state.burgers.map((burger, index) => (
		        	<div key={index}>         
		             	<p>{burger.name}</p>
		             	<img className="img" src={burger.image} onClick={()=> {this.getBurger(burger); this.toggleState('burgerListIsVisible', 'burgerIsVisible')}}/>
		             	<button className='button is-danger is-small' onClick={() => this.deleteBurger(burger, index)}>Delete</button>
		        	</div>
		      		))}
		      	</div> : ''
		  		}
		      {(this.state.burgerIsVisible) ?
			      <Burger
			      	toggleState={this.toggleState}
			      	burger={this.state.burger}
			      	handleSubmit={this.handleUpdateSubmit}
			      	/> : ''
			    }

			</div>
			 )

	}	
}
