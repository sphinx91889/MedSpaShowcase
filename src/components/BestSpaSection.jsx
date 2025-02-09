import React from 'react'

const BestSpaSection = () => {
  const mapEmbedHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.7222406566093!2d-118.39148178829592!3d33.8194803298726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd4b56c300d84f%3A0x96620e6f02c97947!2sSpade%20Skin%20Care%20%26%20More%20Inc.!5e0!3m2!1sen!2sus!4v1739140193534!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

  return (
    <div className="w-screen bg-white/10 min-h-[300px] flex flex-col items-center justify-center pt-8 px-4 mb-8">
      <h2 className="text-4xl md:text-5xl text-light-brown font-display font-semibold text-center mb-4">
        Rated Best Medical Spa in Los Angeles
      </h2>
      <div className="flex items-center mb-2">
        <img 
          src="https://cdn.trustindex.io/assets/platform/Google/logo.svg"
          alt="Google Logo"
          className="h-8 mr-2"
        />
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <img 
            key={i}
            src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
            alt="Star"
            className="h-6 w-6"
          />
        ))}
      </div>
      <img 
        src="https://cdn.worldspaawards.com/logos/brands/3/site-logo.png"
        alt="World Spa Awards Logo"
        className="h-20 filter brightness-0 sepia-100 hue-rotate-330 saturate-50"
      />
      {/* Google Map Embed inserted exactly as provided */}
      <div className="mt-6 overflow-x-auto">
        <div dangerouslySetInnerHTML={{ __html: mapEmbedHTML }} />
      </div>
    </div>
  )
}

export default BestSpaSection
