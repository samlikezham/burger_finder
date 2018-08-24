class Landing extends React.Component {
	render(){
		return <div className="container landing">
			Welcome to the Burger Finder!
			<p>
				<a href="javascript:;" onClick={this.props.handleSubmit}>Click here to see all Burgers</a>
			</p>
		</div>
	}
}