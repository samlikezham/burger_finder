class BurgerForm extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
  		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			name: '',
			description:'',
			image: ''
		}
	}
	componentDidMount(){
		if(this.props.burger){
	      this.setState({
		      name: this.props.burger.name,
		      description: this.props.burger.description,
		      image: this.props.burger.image
		})
    }
	}
	// onChange listeners for input fields
	handleChange(event) {
		console.log(event.target.id, this)
		this.setState({[event.target.id]: event.target.value})
	}
	// passed down handleCreateSubmmit from parent component
	handleSubmit(event) {
		event.preventDefault();
		this.props.handleUpdateSubmit(this.state)
		console.log(this.state)
	}
	render(){
		return (
      <div className='field container newBurger'>
      <button className='button is-warning' onClick={()=> this.props.toggleState('burgerListIsVisible', 'addBurgerIsVisible')}>Back</button>
      <br />
        <form onSubmit={this.handleSubmit}>
          <label className='label' for='name'>Name</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='name'
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <label className='label' for='description'>Description</label>
          <div className='control'>
            <textarea
              className='input'
              type='text'
              onChange={this.handleChange}
              value={this.state.description}
              id='description'
            />
          </div>
          <label className='label' for='image'>Image</label>
          <div className='control'>
            <input className='input'
              type='text'
              id='image'
              onChange={this.handleChange}
              value={this.state.image}
            />
          </div>
          <div className='control'>
            <input className='button is-primary' type='submit' />
          </div>
        </form>
      </div>
    )
	}
}
