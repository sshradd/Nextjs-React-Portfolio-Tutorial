import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      
      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Blog</h2>
            <p className="text-xl mb-12 text-purple-100">
              Here are my blogs!
            </p>
            
            <div className="space-y-3">
              <Link 
                href="/blog/2024/september/learning-nextjs"
                className="block bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded transition-colors"
              >
                Learning Next.js
              </Link>
              <Link 
                href="/blog/2024/september/typescript-benefits"
                className="block bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded transition-colors"
              >
                TypeScript Benefits
              </Link>
              <Link 
                href="/blog"
                className="block bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded transition-colors font-semibold"
              >
                View All Posts
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
    </div>
  );
}
