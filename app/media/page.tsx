import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { Camera, Video, ImageIcon } from "lucide-react"

const photoGallery = [
  {
    title: "South Beach",
    location: "Miami, Florida",
    description: "Sunset views along the iconic Miami coastline",
  },
  {
    title: "Banff National Park",
    location: "Alberta, Canada",
    description: "Mountain landscapes and pristine wilderness",
  },
  {
    title: "Galapagos Islands",
    location: "Ecuador",
    description: "Wildlife and natural wonders of Puerto Ayora",
  },
  {
    title: "Haeundae Beach",
    location: "Busan, South Korea",
    description: "Coastal beauty and urban landscapes",
  },
  {
    title: "East Rock",
    location: "New Haven, Connecticut",
    description: "Views from Yale's iconic hiking spot",
  },
  {
    title: "Bar Harbor",
    location: "Maine",
    description: "New England coastal charm",
  },
]

const videoProjects = [
  {
    title: "Greater Miami Youth Symphony",
    description: "Performance highlights and behind-the-scenes footage",
    year: "2017",
  },
  {
    title: "Odyssey of the Mind World Finals",
    description: "Creative problem-solving competition journey",
    year: "2018",
  },
  {
    title: "Jazz Band Performances",
    description: "Saxophone and clarinet performances",
    year: "2017-2018",
  },
]

export default function MediaPage() {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main className="min-h-screen pt-24 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="animate-fade-in mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-6 h-6 text-primary" />
              <p className="text-sm text-muted-foreground">Visual Stories</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">Media</h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl text-pretty leading-relaxed">
              Capturing moments and experiences through photography and video, documenting travels, performances, and
              creative projects.
            </p>
          </div>

          {/* Photography Section */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <ImageIcon className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground">Photography</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photoGallery.map((photo, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="w-12 h-12 text-primary/30 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors">
                      {photo.title}
                    </h3>
                    <p className="text-sm text-primary mb-2">{photo.location}</p>
                    <p className="text-sm text-muted-foreground">{photo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Video className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground">Video Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoProjects.map((video, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Video className="w-12 h-12 text-primary/30 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-medium group-hover:text-primary transition-colors">{video.title}</h3>
                      <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">{video.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
