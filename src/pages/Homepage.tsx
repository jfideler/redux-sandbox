import React, { Component } from "react";
import DataGrid, { SelectColumn } from 'react-data-grid';
import Button from '../components/CounterButton';

interface Props {
    increment: () => void;
    decrement: () => void;
    count: number;
    name: string;
    reverseName: () => void;
}

export default class HomePage extends Component {

    /** uncomment this next block to induce data-grid error */
    
    // recipientColumns = [
    //     SelectColumn,
    //     { key: 'name', name: 'Name' },
    //     { key: 'email', name: 'Email' },
    // ];

    render() {
        // Automagically inject => because provider??
        const { count, increment, decrement, name, reverseName } = this.props as Props;

        return (
            <>
                <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '2rem' }} >
                    <h1>clix: <span>{count}</span></h1>
                   
                    <Button handleClick={increment} color={'lightgreen'} > [+]</Button>
                    <Button handleClick={decrement} color={'orange'} > [-]</Button>
                </div>
                <div style={{ cursor: 'pointer', textAlign: 'center', marginTop: '40px', fontSize: '2rem' }} >
                    My name is [{name}]
                    <Button handleClick={reverseName} color='red'>[reverse] </Button>
                </div>
            </>
        )
    }
}