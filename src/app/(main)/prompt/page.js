"use client"

import React, { useState } from 'react';



const DynamicContentPrompt = () => {
    // State to manage dynamic statement and user input
    const [dynamicStatement, setDynamicStatement] = useState('');

    const [variableValues, setVariableValues] = useState({
        recipient: "",
        purpose: "",
        points: "",
        c_title: "",
        c_description: "",
        u_title: "",
        u_description: "",
        n_title: "",
        n_description: "",
        newsIndustry: ""
    });

    // Handle dynamic statement change
    const handleStatementChange = (e) => {
        setDynamicStatement(e.target.value);
    };

    // Handle variable value change
    const handleVariableValueChange = (e) => {
        const { name, value } = e.target
        setVariableValues((pre) => ({ ...pre, [e.target.name]: e.target.value }));

    };

    // Handle button click to replace variables in statement
    const handleReplaceVariables = (variable , value) => {
        console.log("which varibale==>>", variable,value)
        let newStatement =  `${dynamicStatement} ${value}`

        console.log("newStatement=>", newStatement)
        setDynamicStatement(newStatement);
    };

    return (
        <>
            <textarea
            onChange={handleStatementChange}
            value={ dynamicStatement }
            ></textarea>
        </>
        // <div>
        //     <div>
        //         <label>Enter Dynamic Statement:</label>
        //         <input type="text" value={dynamicStatement} onChange={handleStatementChange} />
        //     </div>

        //     <div>
        //         {
        //             Object.entries(variableValues).map(([keys, values]) =>
        //                 <>
        //                     <label>{keys}:</label>
        //                     <input type="text" value={values} name={`${keys}`} onChange={handleVariableValueChange} />
        //                     <br />
        //                 </>

        //             )
        //         }
        //     </div>

        //     <div>
        //         <p>Select variable</p>
        //         <div>
        //             {
        //                 Object.entries(variableValues).map(([keys, values]) =>
        //                     <p onClick={ ()=> handleReplaceVariables(keys, values)}>{keys}</p>
        //                 )
        //             }
        //         </div>
        //         <button onClick={handleReplaceVariables}></button>
        //     </div>

        //     <div>
        //         <p>Result: {dynamicStatement}</p>
        //     </div>
        // </div>
    );
};

export default DynamicContentPrompt;
