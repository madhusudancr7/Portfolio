import React from 'react';
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL, MEDIUM_URL, INSTAGRAM_URL, EMAIL } from '../constants';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import TwitterIcon from './icons/TwitterIcon';
import MediumIcon from './icons/MediumIcon';
import InstagramIcon from './icons/InstagramIcon';
import MailIcon from './icons/MailIcon';

const socialLinks = [
  { href: `mailto:${EMAIL}`, icon: MailIcon, name: 'Email' },
  { href: LINKEDIN_URL, icon: LinkedInIcon, name: 'LinkedIn' },
  { href: GITHUB_URL, icon: GitHubIcon, name: 'GitHub' },
  { href: TWITTER_URL, icon: TwitterIcon, name: 'Twitter' },
  { href: MEDIUM_URL, icon: MediumIcon, name: 'Medium' },
  { href: INSTAGRAM_URL, icon: InstagramIcon, name: 'Instagram' },
];

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 text-center text-text-secondary dark:text-dark-text-secondary">
        <div className="flex justify-center items-center space-x-6 mb-6">
          {socialLinks.map(({ href, icon: Icon, name }) => (
            <a 
              key={name}
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              data-interactive="true"
              className="text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-accent transition-colors"
              aria-label={name}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <p className="font-mono text-sm">
          <a href={GITHUB_URL} data-interactive="true" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            Designed & Built by Madhusudan R S
          </a>
        </p>
        <p className="text-xs mt-2">
          &copy; {new Date().getFullYear()} Madhusudan R S. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;