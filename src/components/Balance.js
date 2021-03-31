import React, {useContext} from 'react';
import { GlobalContext}  from '../context/GlobalState';
import { Transaction } from './Transaction';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(Transaction => Transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <>
        <h4>Your Balance</h4>
        <h1>${total}</h1>
            
        </>
    )
}
