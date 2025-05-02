import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import dsaimage from './images/h1.png';
import r from './images/h2.png';
import t from './images/h3.png';
import g from './images/h4.png';
import d from './images/h5.png';
import e from './images/h6.png';

interface CertificationProps {
  title: string;
  issuer: string;
  image: string;
  link: string;
  index: number;
}

const CertificateCard: React.FC<CertificationProps> = ({ title, issuer, image, link, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 * index }}
    className="certificate-card"
  >
    <div className="relative overflow-hidden h-[150px]">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-70"></div>
    </div>
    
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-400 text-sm mb-3">{issuer}</p>
      
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm"
      >
        <ExternalLink size={16} className="mr-1" />
        View Certificate
      </a>
    </div>
  </motion.div>
);

const Certifications: React.FC = () => {
  const certificates = [
    {
      title: 'Mastering Data Structures & Algorithms using C and C++',
      issuer: 'Udemy',
      image: d,
      link: 'https://www.udemy.com/certificate/UC-3c48778a-d6dc-488a-8e38-d9e1185bc626/',
      index: 0
    },
    
    {
      title: 'R Programming',
      issuer: 'Coursera',
      image: r,
      link: 'https://www.coursera.org/account/accomplishments/verify/BC4VDUNWNZDK',
      index: 1
    },
    {
      title: ' Data Analysis with Tableau',
      issuer: 'Coursera',
      image: t,
      link: 'https://www.coursera.org/account/accomplishments/verify/LCK4ZFRVQ162',
      index: 2
    },
    {
      title: 'Complete Interview Preparation',
      issuer: 'GFG',
      image: dsaimage,
      link: 'https://media.geeksforgeeks.org/courses/certificates/c80cd1a70977947df2e189b215e4517c.pdf',
      index: 3
    },
    {
      title: ' The Bits and Bytes of Computer Networking',
      issuer: 'Coursera',
      image: g,
      link: 'https://www.coursera.org/account/accomplishments/certificate/3SD42PDTE56S',
      index: 4
    },
    {
      title: ' Python Basics',
      issuer: 'Coursera',
      image: e,
      link: 'https://www.coursera.org/account/accomplishments/verify/Y1YDCLANBP6T',
      index: 4
    }
    
    
  ];

  return (
    <section id="certifications" className="py-20 bg-dark-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Certifications
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.title} {...certificate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;