import React, { useContext } from 'react'
import {Button, TextField} from '@mui/material'
import { multiStepContext } from '../StepContext'

export default function ThirdStep(props) {
    
    const {setCurrentStep, userData, setUserData, submitData} = useContext(multiStepContext)

    return (
        <>
            <TextField label="City" value={userData['city']} onChange={(e) => setUserData({...userData, 'city': e.target.value})}  margin='normal' variant='outlined' color='secondary' />
            <TextField label="Landmark" value={userData['landmark']} onChange={(e) => setUserData({...userData, 'landmark': e.target.value})}  margin='normal' variant='outlined' color='secondary' />
            <TextField label="Postal Code" value={userData['postcode']} onChange={(e) => setUserData({...userData, 'postcode': e.target.value})}  margin='normal' variant='outlined' color='secondary' />
            <Button variant='contained' color='secondary' onClick={() => setCurrentStep(2)}>Back</Button>
            <Button variant='contained' color='primary' onClick={submitData}>Submit</Button>
        </>
    )
}
