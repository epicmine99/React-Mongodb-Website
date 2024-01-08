import { useEffect, useState } from 'react';
import ImageCarousel from '../components/ImageCarousel';

function Landing() {

    const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

    function handleGetBlogPosts(e: React.TouchEvent) {
        fetch("http://localhost:5000/blog", {
        method: "GET",
        
        })
    }
    return (
        <div className="page-container">
        <img 
        src="/avatars-KHCJysyj9xSJNBhs-hTFe8g-t500x500.jpg" 
        alt="Descriptive Text"
        className={`transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
        <ImageCarousel></ImageCarousel>
        </div>  
    );
}

export default Landing;
