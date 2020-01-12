import React, { Component } from 'react'
import './SignIn.scss'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import {signInWithGoogle} from '../../firebase/firebase'

class SignIn extends Component {

    state = {
        email: 'awdad@adwad.com',
        password: '123123'
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //kosongin field/input habis sumbit
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = (e) => {
        const {value, name} = e.target
        // console.log({[name]: value})
        this.setState({ [name] : value}) // salah satu cara akses properti objek pake []
    }

    render() {
        const {email, password} = this.state
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name='email' 
                        value={email} 
                        required 
                        handleChange={this.handleChange}
                        label='email'
                        />
                    <FormInput 
                        type="password" 
                        name='password' 
                        value={password} 
                        required 
                        handleChange={this.handleChange}
                        label='password'
                        />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
