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
	// onChange listeners for input fields
	handleChange(event) {
		console.log(event.target.id, this)
		this.setState({[event.target.id]: event.target.value})
	}
	// passed down handleCreateSubmmit from parent component
	handleSubmit(event) {
		event.preventDefault();
		this.props.handleSubmit(this.state)
		console.log(this.state)
	}
	render(){
		return (
      <div className='field'>
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
            <input
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
        	<button className="button is-link" onClick={()=> this.props.toggleState('burgerListIsVisible', 'addBurgerIsVisible')}>Cancel</button>
      </div>
    )
	}
}
