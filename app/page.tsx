import Hero from "@/components/Hero";
import Aboutme from "@/components/Aboutme";
export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <section className="max-w-4xl mx-auto">
      <Hero/>

        <Aboutme/>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">Project 1</h3>
              <p className="text-gray-600">A full-stack web application built with Next.js and MongoDB.</p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">Project 2</h3>
              <p className="text-gray-600">An e-commerce platform using React and Stripe integration.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Contact</h2>
          <div className="flex justify-center gap-6">
            <a href="https://github.com" className="text-blue-600 hover:text-blue-800">GitHub</a>
            <a href="https://linkedin.com" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
            <a href="mailto:john@example.com" className="text-blue-600 hover:text-blue-800">Email</a>
          </div>
        </section>
      </section>
    </main>
  );
}
