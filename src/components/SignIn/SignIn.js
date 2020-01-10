import React, { Component } from 'react'
import './SignIn.scss'

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //kosongin field habis sumbit
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = (e) => {
        const {value, name} = e.target
        // console.log({[name]: value})
        this.setState({ [name] : value}) //---> [name]?
    }

    render() {
        const {email, password} = this.state
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name='email' value={email} required onChange={this.handleChange}/>
                    <label>Email</label>
                    <input type="password" name='password' value={password} required onChange={this.handleChange}/>
                    <label>Password</label>
                    <input type='submit' value='Submit Form'/>
                </form>
            </div>
        )
    }
}

export default SignIn
