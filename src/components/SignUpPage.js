import React, {useState} from 'react'
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'

import {StyledSignUp} from './styles/StyledSignUp'

export const SignUpPage = () => {
    const { register, handleSubmit, errors, reset, formState } 
    = useForm({
        mode: 'onChange',
        defaultValues: {
            username: '',
            password: ''
        }
    });

    const [error, setError] = useState(false)

    const onSubmit = (newUser) => {
        console.log("this is the new user data", newUser)
        postNewUser(newUser)
        reset()
    };

    const history = useHistory()

    const postNewUser = newUser => {
        axios
            .post('https://pintereach-backend-ajg.herokuapp.com/users/signup', newUser)
            .then(res => {
                history.push('/')
            })
            .catch(err => {
                console.log(err)
                setError(true)
            })
    }

    return (
        <StyledSignUp onSubmit={handleSubmit(onSubmit)}>
            <div className='mainBody'>
                <div className='welcome'>
                    <h1>Get Started with Pintereach.</h1>
                </div>
                <form className='form'>
                    <h2>Sign Up</h2>                
                    {error ? <p>The username already exists.</p> : null}
                    <input 
                        type="text"
                        placeholder="Username" 
                        name="username" 
                        ref={register({
                            required: true, 
                            minLength: 4})
                        } 
                    />
                    {errors.username && <p className='errorMessage'>*Username must be a minimum of 4 characters</p>}                                    
                    <input 
                        type="password"
                        placeholder="Password" 
                        name="password" 
                        ref={register({required: true, minLength: 6})} 
                    />
                    {errors.password && <p className='errorMessage'>*Password must be a minimum of 6 characters</p>}                                    
                    <input 
                        className='submitButton'
                        type="submit" 
                        value="Sign Up" 
                        disabled={!formState.isValid}
                    />                    
                    <Link to='/'>Already have an account?</Link>
                </form>
        </div>
        </StyledSignUp>
    )
}

