import AboutHero from "../about/AboutHero";
import AboutIntro from "../about/AboutIntro";
import Team from "../about/Team";
import AboutFeatures from "../about/AboutFeatures";
import AboutTestimonials from "../about/AboutTestimonials";

import icon1 from "../../assets/images/ani-image1.webp";
import icon2 from "../../assets/images/ani-image2.webp";
import icon3 from "../../assets/images/ani-image3.webp";
import icon4 from "../../assets/images/ani-image4.webp";

const About = () => {
  return (
    <div className="relative overflow-hidden">

      {/* 🔹 Subtle Floating Icons (lighter than Home) */}
      <img 
        src={icon1} 
        className="absolute top-32 left-10 w-10 opacity-60 animate-float"
        data-aos="fade-down"
        data-aos-delay="100"
      />
      <img 
        src={icon2} 
        className="absolute bottom-40 left-20 w-12 opacity-60 animate-float delay-200"
        data-aos="fade-up"
        data-aos-delay="300"
      />
      <img 
        src={icon3} 
        className="absolute top-40 right-16 w-10 opacity-60 animate-float delay-500"
        data-aos="fade-down"
        data-aos-delay="500"
      />
      <img 
        src={icon4} 
        className="absolute bottom-20 right-20 w-12 opacity-60 animate-float delay-700"
        data-aos="fade-up"
        data-aos-delay="700"
      />

      {/* 🔹 Sections */}
      
      <div data-aos="fade-up" data-aos-delay="100">
        <AboutHero />
      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <AboutIntro />
      </div>

      {/* Team feels better with slightly stronger entry */}
    

      <div data-aos="fade-up" data-aos-delay="250">
        <AboutFeatures />
      </div>

      {/* Final section softer */}
     

    </div>
  );
};

export default About;