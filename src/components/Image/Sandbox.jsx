//lib
import React from 'react';

//component
import Image from './Image';

const Sandbox = () => {

  return (
    <div>
      <Image />
      <Image
        width={150}
        height={150}
      />
      <Image
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoVewKNuiN5yS-Qd_QXiuYnB3I_eaMeLliDKpvIf43HOtfv6wa'
        width={120}
        height={120}
      />
      <Image
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaCPDJYXHkuqskeY4rpbvgE8IVfq44GVvw2iGpdATY6lfwIH3F'
        circle
      />
    </div>
  )
};

export default Sandbox;