import * as React from 'React'

type Props = {
    lines:string[]
}

export default function Stdout({lines}:Props){
        return <div style={{whiteSpace:"pre-wrap"}}>{lines.join('\n')}</div>;
  }