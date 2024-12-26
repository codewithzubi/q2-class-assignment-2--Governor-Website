// pages/index.js

import Navbar from '@/Component/Header';
import HeroSection from '@/Component/HeroSection';
import HeroSection2 from '@/Component/HeroSection2';
import Courses from '@/Component/Courses';
import Footer from '@/Component/Footer';

export default function Home() {
  
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HeroSection2 />
      <Courses />
      <Footer />
    </div>
  );
}
