import { LightningElement } from 'lwc';
import PortfolioAssets from "@salesforce/resourceUrl/PortfolioAssets";
export default class PortfolioAboutSection extends LightningElement {
    imageUrl = PortfolioAssets + '/PortfolioAssets/profilePicture.png';
    twitterIcon = PortfolioAssets + '/PortfolioAssets/twitter.png';
    linkedInIcon = PortfolioAssets + '/PortfolioAssets/linkedin.png';
    instagramIcon = PortfolioAssets + '/PortfolioAssets/instagram.png';

    twitterUrl = 'https://x.com/PC___TWEETS';
    linkedinUrl = 'https://www.linkedin.com/in/parthpchaudhari/';
    instagramUrl = 'https://www.instagram.com/parth._01/';
}