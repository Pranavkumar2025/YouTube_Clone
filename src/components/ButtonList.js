import React from 'react';
import Button from './Button';

const List = ["All","Live","Gaming","Songs","Socer","Cricket","Cooking","Valentines","Sports"];

const ButtonList = () => {
  return (
    <div className='flex'>
      {List.map((val,index) => (
        <Button name ={val} key={index} />
      ))} 
     
    </div>
  )
}

export default ButtonList;
