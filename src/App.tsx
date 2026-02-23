import { Header, Footer } from "./components/layout";
import { Hero, About, Services, CTA } from "./components/sections";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
