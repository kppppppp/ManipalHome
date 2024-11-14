import React from 'react';
import './css/StudentR.css';

const cardData = [
    
  { id: 1, image: 'https://via.placeholder.com/400', name: 'Sarita Yadav', program: 'ONLINE MBA, MA', batch: 'BATCH 1', description: 'I currently work in the pharmaceutical domain. However, I wanted to gain new skills, which is why I decided to pursue this...' },
  { id: 2, image: 'https://via.placeholder.com/400', name: 'Nishank Govil', program: 'ONLINE BBA, MUJ', batch: 'BATCH 1', description: 'After 6 years of monkhood, I returned to the materialistic life and wanted to build my own career. When I started working, I...' },   
  { id: 3, image: 'https://via.placeholder.com/400', name: 'Sonali Seth', program: 'ONLINE MSC IN D...', batch: 'BATCH 1', description: 'I enrolled in this online master’s degree program to enhance my skills in data science. The mentors’ support has been...' },
  { id: 4, image: 'https://via.placeholder.com/400', name: 'Sarita Yadav', program: 'ONLINE MBA, MA', batch: 'BATCH 1', description: 'I currently work in the pharmaceutical domain. However, I wanted to gain new skills, which is why I decided to pursue this...' },
  { id: 5, image: 'https://via.placeholder.com/400', name: 'Nishank Govil', program: 'ONLINE BBA, MUJ', batch: 'BATCH 1', description: 'After 6 years of monkhood, I returned to the materialistic life and wanted to build my own career. When I started working, I...' },
  { id: 1, image: 'https://via.placeholder.com/400', name: 'Sarita Yadav', program: 'ONLINE MBA, MA', batch: 'BATCH 1', description: 'I currently work in the pharmaceutical domain. However, I wanted to gain new skills, which is why I decided to pursue this...' },
  { id: 2, image: 'https://via.placeholder.com/400', name: 'Nishank Govil', program: 'ONLINE BBA, MUJ', batch: 'BATCH 1', description: 'After 6 years of monkhood, I returned to the materialistic life and wanted to build my own career. When I started working, I...' },   
  { id: 3, image: 'https://via.placeholder.com/400', name: 'Sonali Seth', program: 'ONLINE MSC IN D...', batch: 'BATCH 1', description: 'I enrolled in this online master’s degree program to enhance my skills in data science. The mentors’ support has been...' },
  { id: 4, image: 'https://via.placeholder.com/400', name: 'Sarita Yadav', program: 'ONLINE MBA, MA', batch: 'BATCH 1', description: 'I currently work in the pharmaceutical domain. However, I wanted to gain new skills, which is why I decided to pursue this...' },
  { id: 5, image: 'https://via.placeholder.com/400', name: 'Nishank Govil', program: 'ONLINE BBA, MUJ', batch: 'BATCH 1', description: 'After 6 years of monkhood, I returned to the materialistic life and wanted to build my own career. When I started working, I...' },
];

const StudentR = () => {
  
  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 300;  // Adjusted scroll logic
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 300;  // Adjusted scroll logic
  };

  return (
    <>
    <h1> Student Speaks</h1>
    <div className="student-carousel-container">
        
      <button className="scroll-button-left" onClick={scrollLeft}>&lt;</button>
      <div className="student-card-container" ref={scrollRef}>
        {cardData.map((card) => (
          <div className="student-card" key={card.id}>
            <img src={card.image} alt={card.name} className="student-card-img" />
            <div className="student-card-body">
              <h5 className="student-name">{card.name}</h5>
              <p className="student-program">{card.program}</p>
              <p className="student-batch">{card.batch}</p>
              <p className="student-description">{card.description}</p>
              <a href="#" className="student-read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
      <button className="scroll-button-right" onClick={scrollRight}>&gt;</button>
    </div>
    </>
  );
};

export default StudentR;
