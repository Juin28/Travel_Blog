import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"
import data from "./data"

export default function App() {
  const blogs = data.blogs;
  const lastID = data.numberOfBlogs - 1;
  const cards = blogs.map(place => {
    return (
      <Card
        key = {place.id}
        country = {place.country}
        title = {place.title}
        googleMapsUrl = {place.googleMapsUrl}
        startDate = {place.startDate}
        endDate = {place.endDate}
        description = {place.description}
        imageUrl = {place.imageUrl}
        last = {place.id === lastID}
        rating = {place.rating}
      />
    )
  })

  return (
    <div>
      <Header />
      <section className="cards">
        {cards}
      </section>
      <Footer />
    </div>
  )
}

