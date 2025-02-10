import React, { useState } from 'react'

const ServiceCard = ({ imageUrl, title, services }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)
  const handleTouchStart = () => setIsHovered(!isHovered)

  return (
    <div
      className="relative w-48 h-48 md:w-48 md:h-48 overflow-hidden transition-transform duration-300 hover:scale-105 group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <h3 className={`text-lg font-semibold mb-1 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>{title}</h3>
        <ul className={`transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} text-sm`}>
          {services.map((service, index) => (
            <li key={index} className="text-center">{service}</li>
          ))}
        </ul>
      </div>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </div>
  )
}

export default ServiceCard
