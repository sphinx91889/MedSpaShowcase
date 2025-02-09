import React, { useEffect } from 'react'

const BestSpaSection = () => {
  useEffect(() => {
    // Dynamically load the external script needed for the map embed.
    const script = document.createElement('script')
    script.src = "https://embedmaps.com/google-maps-authorization/script.js?id=327d86f0388a494678b41ab0d16e308d2505298c"
    script.async = true
    document.body.appendChild(script)

    // Cleanup the script when component unmounts.
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="w-screen bg-white/10 min-h-[300px] flex flex-col items-center justify-center pt-8">
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
      {/* Map Embed */}
      <div className="mt-6 flex flex-col items-center">
        <iframe 
          width="520" 
          height="400" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight="0" 
          marginWidth="0" 
          id="gmap_canvas" 
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Los%20Angeles+()&amp;t=k&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe>
        <a 
          href="https://www.easybooking.eu/produkte/julia-hotelsoftware" 
          className="mt-2 text-sm underline text-light-brown"
        >
          
        </a>
      </div>
    </div>
  )
}

export default BestSpaSection
