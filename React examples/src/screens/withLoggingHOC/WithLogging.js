import React, { useEffect } from 'react'

const withLogging = (Component) => {
    
    return function withLogging(props) {
        useEffect(() => {
            console.log("Mounted");

            return ()=>{
                console.log("Unmounted");
            }
        })

        return <Component {...props} />
    }
} 

export default withLogging