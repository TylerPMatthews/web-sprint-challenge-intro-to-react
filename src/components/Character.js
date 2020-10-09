import React from 'react';
import styled from 'styled-components';

export  function Character(props){

   


    return (
        <>
            <h1>People</h1>
            {props.data.results.map((item,i)=>{
                debugger;
                return(
                    <div id={i}>
                    <h1>{item.name}</h1>
                    </div>
                    
                )
            })}

        </>
    )
}
