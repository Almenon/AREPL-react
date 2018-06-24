import * as React from 'React'

interface Props{
    vars:Object
}

function VariableView({vars}:Props){
    return <div style={{width:'200px',height:'200px'}}>{JSON.stringify(vars)}</div>
}

export default VariableView