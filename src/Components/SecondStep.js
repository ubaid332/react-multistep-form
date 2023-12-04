import React, { useContext } from 'react'
import {Button, TextField} from '@mui/material'
import { multiStepContext } from '../StepContext'

export default function SecondStep(props) {
    
    const {setCurrentStep, userData, setUserData} = useContext(multiStepContext)

    return (
        <>
            <TextField label="Email" value={userData['email']} onChange={(e) => setUserData({...userData, 'email': e.target.value})}  margin='normal' variant='outlined' color='secondary' />
            <TextField label="Country" value={userData['country']} onChange={(e) => setUserData({...userData, 'country': e.target.value})}  margin='normal' variant='outlined' color='secondary' />
            <TextField label="District" value={userData['district']} onChange={(e) => setUserData({...userData, 'district': e.target.value})}  margin='normal' variant='outlined' color='secondary' />
            <Button variant='contained' color='secondary' onClick={() => setCurrentStep(1)}>Back</Button>
            <Button variant='contained' color='primary' onClick={() => setCurrentStep(3)}>Next</Button>
        </>
    )
}
