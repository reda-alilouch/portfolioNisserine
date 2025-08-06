import Hero from "../components/Hero"
import FeaturedProjects from "../components/FeaturedProjects"
import ServicesPreview from "../components/ServicesPreview"

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <FeaturedProjects />
      <ServicesPreview />
    </div>
  )
}
