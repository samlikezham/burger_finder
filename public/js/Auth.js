class Auth extends React.Component {
	render() {

    let formFields = {}
    return(
      <div className='landing container' >
      <div className='field'>
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <input
              className='input'
              ref={usernameInput => formFields.username = usernameInput}
              type='text'
              id='username' placeholder="username" />
          </div>
          <div>
            <input
              className='input'
              ref={passwordInput => formFields.password = passwordInput}
              type='password'
              id='password' placeholder="password" />
          </div>
            <input className='submit_login'
              onClick={()=>
                this.props.handleSubmit(formFields.username.value, formFields.password.value)}
            type='submit' value="Create Account"/>
        </form>
      </div>
      </div>
    )
    }
}