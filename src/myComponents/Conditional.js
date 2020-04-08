import React from "react"

function Conditional(props) {
    return (
        <div>

            <h1>navbar</h1>
        {props.isLoading ? <h1>loading...</h1> : <h1>conditional rendering</h1>
        }

        <h1>footer</h1>
        </div>
        
    )
    
    }
    


export default Conditional