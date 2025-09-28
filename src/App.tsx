import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import TechStacks from "./components/TechStacks/TechStacks";

function App() {
  return (
    <div className="font-outfit min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-12 md:pt-0">
        {/* Profile Section */}
        <Profile />

        {/* Tech Stacks Section --> */}
        <TechStacks />

        {/* About Section */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
