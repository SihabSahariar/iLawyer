import React from 'react';

const HireUs = () => {
  return (
    <section id="hire-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Hire Us</h2>
        <p className="text-center mb-10">Please fill out the form below, and we will get back to you shortly.</p>
        <div className="w-full h-full">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdXtITVNmg0XvX_7av2mh_GsOHsaXS3Ax3wb1hn7R04m7wGlw/viewform?embedded=true"
            width="100%"
            height="1200px"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Hire Us Form"
            className="w-full border-0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default HireUs;
