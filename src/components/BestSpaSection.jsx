import React, { useEffect, useRef } from 'react';

const BestSpaSection = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Create and append the external script manually in case it isn’t executed from the raw HTML.
    if (mapContainerRef.current) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://embedmaps.com/google-maps-authorization/script.js?id=327d86f0388a494678b41ab0d16e308d2505298c';
      script.async = true;
      mapContainerRef.current.appendChild(script);
    }
  }, []);

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
      <div className="mt-6 flex flex-col items-center w-full max-w-xl" ref={mapContainerRef}>
        <div className="relative w-full" style={{ paddingBottom: '77%', height: 0 }}>
          <div className="absolute top-0 left-0 w-full h-full"
            dangerouslySetInnerHTML={{
              __html: `
                <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Los%20Angeles+()&amp;t=k&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                <a href="https://www.easybooking.eu/produkte/julia-hotelsoftware">Hotelprogramm Buchungen</a>
                <script type="text/javascript" src="https://embedmaps.com/google-maps-authorization/script.js?id=327d86f0388a494678b41ab0d16e308d2505298c"></script>
              `
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BestSpaSection;
