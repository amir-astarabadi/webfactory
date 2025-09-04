import { useRef, useEffect } from 'react';

export default function Landing() {
  const scrollRef = useRef(null);

  // Reusable Button component
  const Button = ({ children, className = '', ...props }) => (
    <button {...props} className={`px-5 py-3 rounded-lg font-semibold transition ${className}`}>{children}</button>
  );

  // Reusable Card and CardContent components
  const Card = ({ children, className = '' }) => (
    <div className={`shadow-lg rounded-2xl bg-white ${className} flex-shrink-0 w-80`}>{children}</div>
  );

  const CardContent = ({ children, className = '' }) => (
    <div className={`p-6 text-center space-y-2 ${className}`}>{children}</div>
  );

  // Auto-scroll effect for Sample Works
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 1; // pixels per interval
    const intervalTime = 20; // ms

    const interval = setInterval(() => {
      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
        container.scrollLeft = 0;
      } else {
        scrollAmount += scrollStep;
        container.scrollLeft = scrollAmount;
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">We Build, Maintain & Deploy Web Apps</h1>
        <p className="max-w-2xl mb-6 text-lg md:text-xl">
          From legacy systems to modern full-stack solutions – we deliver scalable, secure, and production-ready applications.
        </p>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">Request a Call</Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 mx-auto lg:mx-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-700">Our Services</h2>
        <div className="px-12 md:px-0 grid md:grid-cols-2 lg:grid-cols-3 grid-1 md:gap-8 lg:gap-24 gap-y-8 justify-items-center">
          <Card className="border-t-4 border-indigo-500 w-full">
            <CardContent>
              <h3 className="text-xl font-semibold mb-3 text-indigo-700">Web Development</h3>
              <p>We develop apps with Go, PHP, Python, JavaScript, React, and Next.js.</p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-teal-500 w-full">
            <CardContent>
              <h3 className="text-xl font-semibold mb-3 text-teal-600">Legacy Code Maintenance</h3>
              <p>We refactor, debug, and modernize existing codebases to improve performance and reliability.</p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-blue-500 w-full">
            <CardContent>
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Deployment & DevOps</h3>
              <p>We handle staging, CI/CD, monitoring, and scaling to keep your app production-ready.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portfolio Section with horizontal scroll */}
    <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-700">Sample Works</h2>
        <div ref={scrollRef} className="flex gap-6 overflow-hidden px-4 justify-center">
          <Card>
            <CardContent className="p-4">
              <div className="h-40 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded mb-4"></div>
              <h3 className="text-lg font-semibold text-indigo-700">E-Commerce Demo</h3>
              <p className="text-sm text-gray-600">A sample online store with cart, checkout, and payment integration.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="h-40 bg-gradient-to-r from-teal-400 to-cyan-500 rounded mb-4"></div>
              <h3 className="text-lg font-semibold text-teal-600">Task Manager</h3>
              <p className="text-sm text-gray-600">A project management tool with authentication and role-based access.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="h-40 bg-gradient-to-r from-blue-400 to-indigo-500 rounded mb-4"></div>
              <h3 className="text-lg font-semibold text-blue-600">API Service</h3>
              <p className="text-sm text-gray-600">A scalable REST API with Go and PostgreSQL.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="h-40 bg-gradient-to-r from-purple-400 to-pink-500 rounded mb-4"></div>
              <h3 className="text-lg font-semibold text-purple-700">Blog Platform</h3>
              <p className="text-sm text-gray-600">A multi-user blogging platform with rich text editor and comments.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="h-40 bg-gradient-to-r from-yellow-400 to-orange-500 rounded mb-4"></div>
              <h3 className="text-lg font-semibold text-yellow-700">Analytics Dashboard</h3>
              <p className="text-sm text-gray-600">A real-time analytics dashboard with charts and metrics visualization.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">Let’s Talk</h2>
        <p className="mb-6 text-lg text-gray-700">Tell us a bit about your project and we’ll get back to you.</p>
        <form className="grid gap-4">
          <input type="text" placeholder="Your Name" className="p-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" />
          <input type="email" placeholder="Your Email" className="p-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" />
          <textarea placeholder="Your Project Brief" className="p-3 rounded-lg border border-gray-300 h-32 focus:border-indigo-500 focus:ring focus:ring-indigo-200"></textarea>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Submit</Button>
        </form>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500 bg-gray-50">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </footer>
    </main>
  )
}