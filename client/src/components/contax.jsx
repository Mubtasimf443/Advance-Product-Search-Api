//  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ
//  InshaAllah, By his marcy I will Gain Success

import React, { createContext, useContext } from 'react';

const mainContext = createContext();
export default function Contex({ children }) {
    function addValue(event = new CustomEvent('keypress')) {
        
    }
    const host = 'http://localhost:4000';
    return <mainContext.Provider children={children} value={{ host }} />
}
export function getContextData() {
    return useContext(mainContext)
}