import React, { useState } from 'react';
import App from './App';
export const multiStepContext = React.createContext();

const StepContext = () => {
    
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);

    function submitData(){
        setFinalData(finalData => [...finalData, userData])
        setUserData('')
        setCurrentStep(1)
    }

    return (
        <>
            <multiStepContext.Provider value={{currentStep, setCurrentStep, userData, setUserData, finalData, setFinalData, submitData}}>
                <App />
            </multiStepContext.Provider>
        </>
    )
}

export default StepContext

