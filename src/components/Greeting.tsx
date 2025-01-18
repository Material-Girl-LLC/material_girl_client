import React from 'react'

type Props = {
    name: string
}

const Greeting = (props: Props) => {
    console.log(props);
    return (
        <div>
            <h1>Hello {props.name}</h1>
        </div>
    );
}

export default Greeting