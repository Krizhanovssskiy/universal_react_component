//style
import './icon.css'
//lib
import React, { useState } from 'react';

//components
import Icon from './Icon';
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";

const Sandbox = () => {

  const [valueBtn, setValueBtn] = useState('');

  return (
    <div className='container'>
      <div>
        <p>1. Base Icon</p>
        <Icon
          name='air-freshener'
          onClick={() => console.log('base icon')}
        />
      </div>
      <p>2. Icons Button Group</p>
      <ButtonGroup
        className='btnGroup__icon'
      >
        <Button
          active={valueBtn === 'align-right'}
          onClick={()=>setValueBtn('align-right')}
        >
          <Icon
            name='align-right'
          />
        </Button>
        <Button
          active={valueBtn === 'align-center'}
          onClick={() => setValueBtn('align-center')}
        >
          <Icon
            name='align-center'
          />
        </Button>
        <Button
          active={valueBtn === 'align-left'}
          onClick={() => setValueBtn('align-left')}
        >
          <Icon
            name='align-left'
          />
        </Button>
        <Button
          active={valueBtn === 'align-justify'}
          onClick={() => setValueBtn('align-justify')}
        >
          <Icon
            onClick={()=>console.log(';lk')}
            name='align-justify'
          />
        </Button>
      </ButtonGroup>

      <Icon
        name='allergies'
        disabled
      />
    </div>
  );
};

export default Sandbox;