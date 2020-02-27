import React, { useState } from 'react';
import ButtonGroup from "./ButtonGroup";
import Button from "../Button/Button";

const Sandbox = () => {
  const [ toggleActive, setActive ] = useState(true);

  return (
    <>
      <ButtonGroup>
        <Button>
          A1
        </Button>
        <Button>
          A2
        </Button>
        <Button>
          A3
        </Button>
      </ButtonGroup>

      <ButtonGroup
        vertical
      >
        <Button>
          A1
        </Button>
        <Button>
          A2
        </Button>
        <Button>
          A3
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button
          onClick={()=>setActive(true)}
          active={toggleActive}
        >
          ON
        </Button>
        <Button
          onClick={()=>setActive(false)}
          active={!toggleActive}
        >
          OFF
        </Button>

      </ButtonGroup>
    </>
  );
};

export default Sandbox;