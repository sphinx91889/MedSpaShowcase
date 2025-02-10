import React from 'react'
import { Navigation } from './components/Navigation'
import BestSpaSection from './components/BestSpaSection'
import ServiceCard from './components/ServiceCard'
import { BackgroundVideo } from './components/BackgroundVideo'
import HeroTextSection from './components/HeroTextSection';

function App() {
  const services = [
    {
      imageUrl: 'https://macflorida.com/assets/img/feature/home/skin-hair-rejuvenation.jpg',
      title: 'Skin Rejuvenation',
      services: ['Wrinkle Relaxers', 'Fillers', 'Fat Dissolvents'],
    },
    {
      imageUrl: 'https://macflorida.com/assets/img/feature/home/body.jpg',
      title: 'Body Contouring',
      services: ['CoolSculpting', 'Liposuction', 'Skin Tightening'],
    },
    {
      imageUrl: 'https://macflorida.com/assets/img/feature/home/laser-energy-for-face-body.jpg',
      title: 'Laser Treatments',
      services: ['Hair Removal', 'Skin Resurfacing', 'Tattoo Removal'],
    },
    {
      imageUrl: 'https://macflorida.com/assets/img/feature/home/injectables-fillers.jpg',
      title: 'Medical Facials',
      services: ['Acne Treatment', 'HydraFacial', 'Chemical Peels'],
    },
    {
      imageUrl: 'https://macflorida.com/assets/img/feature/home/wellness-services.jpg',
      title: 'Cosmetic Injectables',
      services: ['Botox', 'Juvederm', 'Restylane'],
    },
  ]

  return (
    <>
      <header className="relative h-screen overflow-hidden">
        <BackgroundVideo />
        {/* Dark overlay for improved text contrast */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
          <img 
            src="https://i.imghippo.com/files/hiJv8783zTg.png" 
            alt="Examplus Medical Spa Logo" 
            className="max-w-[300px] h-auto mb-4 filter brightness-0 invert drop-shadow-lg"
          />
          <h1 className="text-4xl max-w-2xl text-white drop-shadow-lg font-body italic mb-4">
            Experience the perfect blend of relaxation and rejuvenation.
          </h1>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-light-brown text-white rounded-full text-xl hover:bg-light-brown/90 transition duration-300"
          >
            Schedule a Consultation
          </a>
        </div>
        <Navigation />
      </header>

      <main>
        <BestSpaSection />

     <section className="text-center py-8">
  <h2 className="text-5xl font-semibold text-light-brown font-display tracking-widest mb-8">
    Accentuate Your Confidence
  </h2>
  <p className="text-3xl text-light-brown font-body italic mt-4">
    Our Aesthetic Treatments
  </p>
  <div className="mt-4 animate-bounce">
    <svg
      className="w-10 h-10 text-light-brown inline-block"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </div>
</section>

<section className="w-full bg-dark-brown/20 backdrop-blur-sm py-8">
          <div className="overflow-x-auto whitespace-nowrap p-4 md:flex md:justify-center">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="inline-block w-48 h-48 md:w-64 md:h-64 transform hover:scale-105 transition duration-300"
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </section>

        {/* Hero Text Section with reduced vertical padding if needed */}
<HeroTextSection />

<section className="flex items-center justify-center bg-gradient-to-b from-transparent to-dark-brown/10 p-0">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
    {/* Image Section */}
    <div className="w-full md:w-1/2 p-4">
      <img
        src="https://www.thinmdmedspa.com/wp-content/uploads/2019/04/weight-loss-programs-in-jacksonville-fl-5.png"
        alt="Overview of Weight Loss Program"
        className="w-full rounded-lg shadow-xl"
      />
    </div>

    {/* Content Section */}
    <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-center md:text-left font-body tracking-wide mb-4 text-light-brown">
        Committed to Aesthetics &amp; Wellness Excellence
      </h2>
      <p className="text-lg mb-4 text-center md:text-left">
        At Examplus Medical Spa, our passion is helping you shine through by merging innovative treatments with personalized care. Our dedicated team works with the latest technology to bring you safe, effective, and luxurious aesthetic and wellness solutions.
      </p>
      <ul className="list-disc list-inside mb-6 text-lg text-center md:text-left">
        <li>Expert Practitioners &amp; State-of-the-Art Technology</li>
        <li>Customized Treatment Plans for Your Unique Needs</li>
        <li>Holistic Approach to Beauty and Wellness</li>
        <li>Relaxing, Luxurious Environment</li>
      </ul>
      <div className="flex justify-center md:justify-start">
        <a
          href="#contact"
          className="px-6 py-3 bg-light-brown text-white rounded-full text-xl hover:bg-light-brown/90 transition duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

        


        
        

        
        {/* Image and Content Section with adjusted padding to reduce gap */}
       


        <section className="w-full bg-dark-brown backdrop-blur-sm py-12">
          <div className="flex flex-col items-center justify-center text-white">
            <h3 className="text-xl font-semibold mb-3 text-center uppercase tracking-widest">
              Now Accepting the Following Payment Services
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              <img 
                src="https://i.imghippo.com/files/eQuP8464A.png" 
                alt="Payment Service 1" 
                className="h-10 filter brightness-0 invert" 
              />
              <img 
                src="https://i.imghippo.com/files/uced5756dok.png" 
                alt="Payment Service 2" 
                className="h-10 filter brightness-0 invert" 
              />
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="w-full bg-dark-green text-white text-center py-6 text-sm">
        <div className="container mx-auto">
          <p>&copy; Examplus Medical Spa 2025. All Rights Reserved.</p>
          <p>Contact us: (123) 456-7890 | info@example.com</p>
        </div>
      </footer>
    </>
  )
}

export default App;
