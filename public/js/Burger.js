class Burger extends React.Component {
	render() {
    return(
      <div>
        <div className='tile is-ancestor'>
          <div className='tile is-2'>
            <div>
              <img className="img" src={this.props.burger.image} alt={this.props.burger.name} />
            </div>
          </div>
          <div className='tile is-2'></div>
          <div className='tile'>
            <div>
              <h3 className='tile is-child box'><span>Name:</span> {this.props.burger.name} </h3>
              <p className='tile is-child box'><span>Description:</span> {this.props.burger.description} </p>
            </div>
            <div className='tile'>
            </div>
          <div className='tile'>
            <button className='button is-warning' onClick={()=> this.props.toggleState('burgerListIsVisible', 'burgerIsVisible')}>Back</button>
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