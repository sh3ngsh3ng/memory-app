import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import './CountdownTimer.css';


export default function CountdownTimer() {
    const [count, setCount] = useState(3)

    useEffect(() => {
        if (count > 0) {
            setTimeout(() => {
                setCount(count - 1)
            }, 1000)
        }
    }, [count])

    return (
        <div style={{position:'relative'}}>
            <div className='load'></div>
            <span id='count-down-number'>{count}</span>
        </div>
    )
}