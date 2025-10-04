import { useState, useEffect, useRef } from 'react';
import Image1 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.19_09defb00.jpg";
import Image2 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.19_54a26d31.jpg";
import Image3 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.21_01bba0e1.jpg";
import Image4 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.20_20f7c421.jpg";
import Image5 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.20_5445f709.jpg";
import Image6 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.20_e33bb9b8.jpg";
import Image7 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.21_520022bc.jpg";
import Image8 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.21_a3ad66e6.jpg";
import Image9 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.22_2acff57e.jpg";
import Image10 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.22_6b803c02.jpg";
import Image11 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.22_d4f4c0c8.jpg";
import Image12 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.23_4812ade5.jpg";
import Image13 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.23_27606244.jpg";

const AllPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sliderRef = useRef(null);
  
  // Group images into slides (3 per slide for desktop, 1 for mobile)
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13];
  const slidesPerView = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, images.length - slidesPerView);
  
  // Calculate slide width based on viewport
  const getSlideWidth = () => {
    if (isMobile) return '100%';
    return '100%';
  };
  
  // Calculate image container width
  const getImageContainerWidth = () => {
    if (isMobile) return '100%';
    return `calc(${100 / slidesPerView}% - ${(20 * (slidesPerView - 1)) / slidesPerView}px)`;
  };
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-update slides when mobile state changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clamped);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Our Portfolio</h1>
      
      <div style={styles.sliderWrapper}>
        <button 
          onClick={prevSlide} 
          style={styles.arrowButton} 
          aria-label="Previous slide"
        >
          &larr;
        </button>
        
        <div style={styles.sliderContainer} ref={sliderRef}>
          <div
            style={{
              ...styles.track,
              transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  ...styles.item,
                  width: isMobile ? '100%' : `${100 / slidesPerView}%`,
                  padding: isMobile ? '12px' : '14px',
                }}
              >
                <div style={styles.card}>
                  <img src={image} alt={`Portfolio item ${index + 1}`} style={styles.image} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={nextSlide} 
          style={styles.arrowButton}
          aria-label="Next slide"
        >
          &rarr;
        </button>
      </div>
      
      {/* Pagination Dots */}
      <div style={styles.pagination}>
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            style={{
              ...styles.dot,
              ...(index === currentIndex ? styles.activeDot : {})
            }}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    overflow: 'hidden',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '30px',
    color: '#d4af37',
  },
  sliderWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
  },
  sliderContainer: {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  track: {
    display: 'flex',
    transition: 'transform 0.45s ease',
    willChange: 'transform',
  },
  item: {
    flex: '0 0 auto',
    boxSizing: 'border-box',
  },
  card: {
    width: '100%',
    aspectRatio: '1',
    overflow: 'hidden',
    borderRadius: '12px',
    background: '#0e0e0e',
    boxShadow: '0 8px 20px rgba(0,0,0,0.6)',
    border: '1px solid rgba(255,255,255,0.08)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  arrowButton: {
    background: 'none',
    border: 'none',
    color: '#d4af37',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0 10px',
    lineHeight: '1',
    transition: 'all 0.3s ease',
    // hover styling can be done via CSS class if desired
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#444',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  activeDot: {
    background: '#d4af37',
    transform: 'scale(1.2)',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    marginTop: '16px',
  },
  // Note: inline media queries are not supported in React style objects. Use CSS if needed.
};

export default AllPage;

