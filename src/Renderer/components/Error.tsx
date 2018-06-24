import * as React from 'React'

interface Props{
    errorMessage:string
}

function Error({errorMessage}:Props){
    return <div style={{width:'200px',height:'200px',color:'red'}}>{errorMessage}</div>
}

export default Error