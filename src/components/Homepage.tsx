import React, { Component } from "react";
import Button from './CounterButton';

interface Props {
    increment: () => void;
    decrement: () => void;
    count: number;
    name: string;
    reverseName: () => void;
}

export default class HomePage extends Component {

    render() {
        // Automagically inject => because provider??
        const { count, increment, decrement, name, reverseName } = this.props as Props;

        return (
            <>
                <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '2rem' }} >
                    <span>{count}</span>
                    <Button handleClick={increment} color={'lightgreen'} >Increment</Button>
                    <Button handleClick={decrement} color={'orange'} >Decrement</Button>
                </div>
                <div style={{ cursor: 'pointer', textAlign: 'center', marginTop: '40px', fontSize: '2rem' }} >
                    <span onClick={reverseName}>My Name Is [{name}]</span>
                </div>
            </>
        )
    }
}