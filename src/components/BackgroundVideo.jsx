import React, { useEffect, useState } from 'react'

const videos = [
  'https://videos.pexels.com/video-files/6446060/6446060-hd_1080_1920_25fps.mp4',
  'https://videos.pexels.com/video-files/8131885/8131885-uhd_1440_2732_25fps.mp4',
  'https://videos.pexels.com/video-files/8131887/8131887-uhd_1440_2732_25fps.mp4',
  'https://videos.pexels.com/video-files/4772527/4772527-uhd_1440_2560_24fps.mp4',
  'https://videos.pexels.com/video-files/3761687/3761687-uhd_1440_2560_25fps.mp4'
]

export const BackgroundVideo = () => {
  const [currentVideo, setCurrentVideo] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      {videos.map((video, index) => (
        <video
          key={video}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentVideo ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
      ))}
    </div>
  )
}
