const videos = [
  { src: "/videos/video-1.mp4", alt: "Velas Candea en movimiento 1" },
  { src: "/videos/video-2.mp4", alt: "Velas Candea en movimiento 2" },
  { src: "/videos/video-3.mp4", alt: "Velas Candea en movimiento 3" },
];

const VideoGallery = () => {
  return (
    <section className="py-16 px-0 bg-background overflow-hidden">
      <div className="w-full">
        <div className="flex gap-6 overflow-x-auto scrollbar-hide px-6 snap-x snap-mandatory">
          {videos.map((video, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] snap-center"
            >
              <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                <video
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  aria-label={video.alt}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default VideoGallery;
