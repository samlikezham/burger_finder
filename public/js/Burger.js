class Burger extends React.Component {
  constructor(props){
    super(props)
    this.burgerFormIsVisible = this.burgerFormIsVisible.bind(this)
    this.state = {
      burgerFormIsVisible: false
    }
  }
  burgerFormIsVisible(){
    let form = this.state.burgerFormIsVisible
    this.setState({
      burgerFormIsVisible: !form
    })
    console.log(this.state)
  }
	render() {
    console.log(this.props.burger)
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
            <div className="container">
              <img className="img" src={this.props.burger.image} alt={this.props.burger.name} />
            </div>
          </div>
          <div className='tile container show'>
            <div>
              <h3 className='tile is-child box'> {this.props.burger.name} </h3>
              <p className='tile is-child box'><span><strong>Description:</strong></span> {this.props.burger.description} </p>
            </div>
            <div className='tile'>
              <h5>Comments:</h5>
              <p>{this.props.burger.comments}</p>
            </div>
          </div>
        </div>
        <a href="javascript:;" onClick={()=>{
          this.burgerFormIsVisible()}}>Edit Burger</a>
        {(this.state.burgerFormIsVisible) ?
        <BurgerForm
          inheritedState={this.state}
        	burger={this.props.burger}
        	handleUpdateSubmit={this.props.handleUpdateSubmit}
        /> : ''}
      </div>
    )
  }
}