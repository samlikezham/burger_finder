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
	      .then(updatedBurger => {
	        return updatedBurger.json()
	    })
	      .then(jsonedBurger => {
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
		}).then(data => {this.setState({ 
			burgers: data 
		}) 
	  });
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
		    <div className="container">
		    {(this.state.burgerListIsVisible) ?
		    	<Greeting 
		    	username={this.props.username}
		    	signOut={this.props.signOut}
		    	accessHome={this.props.accessHome} 
		    /> : ''
		    }
		    {(this.state.burgerListIsVisible) ?
		    <header class="jumbotron">
		    	<div className="container">
				<h1>Find Your Favorite Burger</h1>
				<p>View our user's favorite picks</p>
				<p>
				<a className="btn btn-primary btn-large" href="javascript:;" onClick={()=> {
					this.toggleState('addBurgerIsVisible', 'burgerListIsVisible')}}>Add Your Favorite Burger</a>
				</p>
				</div>
			</header> : '' }

		    {(this.state.addBurgerIsVisible) ?
		    	<BurgerForm 
		    		inheritedState={this.state}
		    		toggleState={this.toggleState}
		    		handleCreate={this.handleCreate}
		    		handleSubmit={this.handleCreateSubmit}
		    	/> : ''
		    }
		    {(this.state.burgerListIsVisible) ?
		 		<div className="row">

			 		<div className="row">
			 		  <div className="col-lg-12">
			 		  	<h3>Popular Burgers</h3>
			 		  </div>
			 		</div>
			 		<div className="row">
			 			{this.state.burgers.map((burger, index) => (
		        			<div key={index} className="col-md-3 col-sm-6">
		        				<div className="thumbnail"> 
		        					<img className="img" src={burger.image} onClick={()=> {this.getBurger(burger); this.toggleState('burgerListIsVisible', 'burgerIsVisible')}}/>
		        					<div className="caption">
		        						<h4>{burger.name}</h4>
		        						<h4>{burger.comments.author}</h4>
		        					</div>
		        				</div>       

				             	<button className='button is-danger is-small' onClick={() => this.deleteBurger(burger, index)}>Delete</button>
				    		</div>
			      			))}
				 	</div>
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
