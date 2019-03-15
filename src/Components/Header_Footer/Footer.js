import React from 'react';
import { IndiaLogo } from '../ui/icons';

const Footer = () => {

  return(
    <footer className="bck_blue">
      <div className="footer_logo">
        <IndiaLogo
          link={true}
          width="70px"
          height="70px"
          linkTo="/"
        />
      </div>
      <div className="footer_discl">
        Board of Control for Cricket in India 2019. All rights reserved.
      </div>
    </footer>
  )

}

export default Footer;
