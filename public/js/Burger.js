class Burger extends React.Component {
	render() {
    return(
      <div className="container">
        <div className='tile is-ancestor'>
          <div className='tile is-2'>
            <div className='tile'>
            <br />              
              <button className='button is-warning' onClick={()=> this.props.toggleState('burgerListIsVisible', 'burgerIsVisible')}>Back</button>
              <br />
              <br />
          </div>
            <div>
              <img className="img" src={this.props.burger.image} alt={this.props.burger.name} />
            </div>
          </div>
          <div className='tile'>
            <div>
              <h3 className='tile is-child box'><span>Name:</span> {this.props.burger.name} </h3>
              <p className='tile is-child box'><span>Description:</span> {this.props.burger.description} </p>
            </div>
            <div className='tile'>
            </div>
          </div>
        </div>
        <BurgerForm 
        	burger={this.props.burger}
        	handleSubmit={this.props.handleSubmit}
        />
      </div>
    )
  }
}