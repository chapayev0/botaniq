import React from 'react';
import { Card } from 'primereact/card';
import Header from '../Header/Header';

const MyMapComponent = () => {
  return (
    <div>
      <Header />

      {/* Top Section with Paragraph */}
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <p>
         Throught main gate turn left and go to the cantin. Near the cantin you can see Kohomba tree
        </p>
      </div>

      {/* Bottom Section with Google Map in a Card */}
      <div style={{ padding: '20px' }}>
        <Card
          title="Google Map Location"
          style={{ width: '100%', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
        >
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.4567785486689!2d80.03652411699332!3d7.090197672998444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fc38cd905f15%3A0x1a97ab77dcece9d5!2z4Lac4La44LeK4La04LeEIOC3gOC3kuC2muC3iuKAjeC2u-C2uOC3j-C2u-C2oOC3iuC2oOC3kiDgtq_gt5rgt4Hgt5Pgtrog4LeA4Leb4Lav4LeK4oCN4La6IOC3gOC3kuC3geC3iuC3gOC3gOC3kuC2r-C3iuKAjeC2uuC3j-C2veC2ug!5e0!3m2!1ssi!2slk!4v1705955693086!5m2!1ssi!2slk"
            width="100%"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Card>
      </div>
    </div>
  );
};

export default MyMapComponent;
