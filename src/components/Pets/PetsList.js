import React from 'react';

import PetItem from './PetItem';

function PetsList (props){
    const {copyArr,handleDelete} = props;
    return (
        <ul className="list">
            {copyArr.map((pet,i)=>{
                return (
                    <PetItem key={i} {...pet} handleDelete={()=> {handleDelete(i)}}/>
                )
            })}
        </ul>
    );

}

export default PetsList;