import React from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Languages', href: '#languages' },
  { name: 'Hobbies', href: '#hobbies' },
];

const Header: React.FC = () => {
  return (
    <nav className="hidden md:flex justify-center items-center gap-3 p-2 bg-card-bg backdrop-blur-lg border border-border-color rounded-full">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="relative rounded-full py-2 px-5 text-text-secondary hover:text-text-primary transition-all duration-300 font-medium group"
        >
          <span className="relative z-10">{link.name}</span>
          {/* Use a pseudo-element for the hover background effect */}
          <span className="absolute inset-0 bg-accent/20 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></span>
        </a>
      ))}
    </nav>
  );
};

export default Header;