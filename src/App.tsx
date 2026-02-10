import { Header, Footer } from "./components/layout";
import {
  Hero,
  About,
  Services,
  Testimonials,
  CTA,
} from "./components/sections";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
