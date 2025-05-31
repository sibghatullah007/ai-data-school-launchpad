
import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Courses from '../components/Courses';
import Certification from '../components/Certification';
import ProjectShowcase from '../components/ProjectShowcase';
import RegistrationForm from '../components/RegistrationForm';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <Benefits />
      <Courses />
      <Certification />
      <ProjectShowcase />
      <RegistrationForm />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
