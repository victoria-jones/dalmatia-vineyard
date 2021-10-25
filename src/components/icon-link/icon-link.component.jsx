import React from 'react';

import './icon-link.styles.scss';

//social media icons
import { ReactComponent as FacebookIcon } from '../../assets/SVG/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/SVG/instagram.svg';
import { ReactComponent as MailIcon } from '../../assets/SVG/mail.svg';
import { ReactComponent as TwitterIcon } from '../../assets/SVG/twitter.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/SVG/youtube.svg';
import { ReactComponent as PinterestIcon } from '../../assets/SVG/pinterest.svg';

const IconLink = ({ icon, link }) => {

    const socialIcon = {
        'facebook': FacebookIcon,
        'instagram': InstagramIcon,
        'email': MailIcon,
        'twitter': TwitterIcon,
        'youtube': YoutubeIcon,
        'pinterest': PinterestIcon
    };

    const Icon = socialIcon[icon];

    return(
        <div className="icon-text-link">
            <a href={link} className="icon-text-link--link">
                <div className="icon-text-link--icon">
                    <Icon className="icon-text-link--svg" />
                </div>
            </a>
        </div>
    );
}

export default IconLink;