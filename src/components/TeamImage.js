import React from 'react';

export default function TeamImage({name, src}){
    if(src){
        return (
            <img src={src} alt={name} width="200rem" height="200rem" style={{ marginTop : 15 }}/>
        );
    }else{
        return null;
    }
}