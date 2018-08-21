class Landing extends React.Component {
	render(){
		return <div>
			Welcome to the Burger Finder!
			<p>
				<a href="javascript:;" onClick={this.props.accessHome}>Click here to see all Burgers</a>
			</p>
		</div>
	}
}