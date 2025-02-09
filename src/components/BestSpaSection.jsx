import React, { useEffect } from 'react'

const BestSpaSection = () => {
  useEffect(() => {
    // Dynamically load the external script for map authorization.
    const script = document.createElement('script')
    script.src = "https://embedmaps.com/google-maps-authorization/script.js?id=327d86f0388a494678b41ab0d16e308d2505298c"
    script.async = true
    document.body.appendChild(script)

    // Cleanup script on component unmount.
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="w-screen bg-white/10 min-h-[300px] flex flex-col items-center justify-center pt-8 px-4">
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
      {/* Responsive Map Embed */}
      <div className="mt-6 flex flex-col items-center w-full">
        <div className="w-full max-w-xl">
          {/* Container maintains the aspect ratio: 520 x 400 ~ 1.3 ratio (77% padding-bottom) */}
          <div className="relative w-full" style={{ paddingBottom: '77%', height: 0 }}>
            <iframe 
              title="Google Map"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0" 
              scrolling="no" 
              marginHeight="0" 
              marginWidth="0" 
              id="gmap_canvas" 
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Los%20Angeles+()&amp;t=k&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
          </div>
        </div>
        <a 
          href="https://www.easybooking.eu/produkte/julia-hotelsoftware" 
          className="mt-2 text-sm underline text-light-brown"
        >
          Hotelprogramm Buchungen
        </a>
      </div>
    </div>
  )
}

export default BestSpaSection
