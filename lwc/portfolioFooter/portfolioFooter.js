import { LightningElement } from 'lwc';
import PortfolioAssets from "@salesforce/resourceUrl/PortfolioAssets";

export default class PortfolioFooter extends LightningElement {
    twitterIcon = PortfolioAssets + '/PortfolioAssets/twitter.png';
    linkedInIcon = PortfolioAssets + '/PortfolioAssets/linkedin.png';
    githubIcon = PortfolioAssets + '/PortfolioAssets/github.png';
    instagramIcon = PortfolioAssets + '/PortfolioAssets/instagram.png';
    trailheadIcon = PortfolioAssets + '/PortfolioAssets/salesforce.png';

    twitterUrl = 'https://x.com/PC___TWEETS';
    linkedinUrl = 'https://www.linkedin.com/in/parthpchaudhari/';
    githubUrl = 'https://github.com/PCgithub-ux';
    instagramUrl = 'https://www.instagram.com/parth._01/';
    trailheadUrl = 'https://www.salesforce.com/trailblazer/pchaudhari87';
}