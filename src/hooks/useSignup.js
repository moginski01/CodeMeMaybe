import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)

        // i hope że to zadziała
        const response = await fetch('/api/user/signup',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const json = await response.json() //informacja o json-webtoken

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            // zapis użytkownika w local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update na authConext
            dispatch({type: 'LOGIN', payload: json})
            
            setIsLoading(false)
        }
    }

    return { signup, isLoading, error }
}

