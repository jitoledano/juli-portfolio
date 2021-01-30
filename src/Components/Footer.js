import React from 'react';
import {SocialIcon} from 'react-social-icons';

const Footer = () => {
    return (
       <footer className="bg-gray-600">
           <div className="container mx-auto flex justify-around">
                 <div className="inline-flex py-3 px-3 my-3">
                    <SocialIcon url="https://twitter.com/earthtojuli" className="mx-6 sm:mx-24" target="_blank" fgColor="#fff" style={{ height: 50, width: 50}}/>
                    <SocialIcon url="https://earthtojuli.tumblr.com/" className="mx-6 sm:mx-24" target="_blank" fgColor="#fff" style={{ height: 50, width: 50}}/>
                    <SocialIcon url="https://www.instagram.com/earthtojuli/?hl=en" className="mx-6 sm:mx-24" target="_blank" fgColor="#fff" style={{ height: 50, width: 50}}/>
                </div> 
           </div>
       </footer>
    );
}

export default Footer
