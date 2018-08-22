class Greeting extends React.Component {
	render() {
		return(
			<div className="container">
			<h3>Welcome, {this.props.username}!</h3>
			<a href="javascript:;" onClick={()=> {
					this.props.signOut()}}>Sign Out</a>
			</div>
		)
	}
}
