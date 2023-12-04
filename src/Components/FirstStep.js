import React, { useContext } from 'react'
import {Button, TextField} from '@mui/material'
import { multiStepContext } from '../StepContext'

export default function FirstStep(props) {
    
    const {setCurrentStep, userData, setUserData} = useContext(multiStepContext)

    return (
        <>
            <TextField label="First Name" value={userData['firstname']} onChange={(e) => setUserData({...userData, 'firstname': e.target.value})} margin='normal' variant='outlined' color='secondary' />
            <TextField label="Last Name" value={userData['lastname']} onChange={(e) => setUserData({...userData, 'lastname': e.target.value})}  margin='normal' variant='outlined' color='secondary' />
            <TextField label="Contact Number" value={userData['contact']} onChange={(e) => setUserData({...userData, 'contact': e.target.value})}  margin='normal' variant='outlined' color='secondary' />
            <Button variant='contained' color='primary' onClick={() => setCurrentStep(2)}>Next</Button>
        </>
    )
}
