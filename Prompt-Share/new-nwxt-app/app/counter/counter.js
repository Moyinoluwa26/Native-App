"use client";
import React, { useState } from 'react'


export function PageForCounter() {
    const [counter, addCounter] = useState(0);
    return (
        <div>

            <h1> Count : {counter}</h1>
            <p onClick={() => {
                addCounter(counter + 1)
            }}> Add Counter </p>
        </div>
    )
}
