import React, { useEffect } from 'react';
import instagramGetUrl from 'instagram-url-direct';
import { InstagramEmbed } from 'react-social-media-embed';

const Marketplace = () => {
  useEffect(() => {
    const fetchInstagramUrl = async () => {
      try {
        const links = await instagramGetUrl('https://www.instagram.com/tv/CdmYaq3LAYo/');
        console.log(links);
        // Process the links or update the component state with the retrieved data
      } catch (error) {
        console.error('Failed to fetch Instagram URL:', error);
      }
    };

    fetchInstagramUrl();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <InstagramEmbed
      embedPlaceholder={<div style={{backgroundColor: 'lightsteelblue', padding: '300px 0', textAlign: 'center', width: 328}}>mulyosarigroup!</div>}
      url="https://www.instagram.com/p/Cubc-sVASGE/" width={328}  />
    </div>
    
  );
};

export default Marketplace;
