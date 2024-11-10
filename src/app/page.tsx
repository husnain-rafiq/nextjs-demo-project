import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto py-4 px-6 flex justify-between items-center">
          <Link href="/">
            My Website
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">
                About
              </Link>
            </li>
            <li>
              <Link href="/products">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Website</h1>
        <p className="text-gray-600 mb-8">
          This is a basic homepage with a navigation menu built using NextJS and Tailwind CSS.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 mb-4">
              Learn more about our company and our mission.
            </p>
            <Link href="/about">
              <div className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                Read More
              </div>
            </Link>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Products</h2>
            <p className="text-gray-600 mb-4">
              Check out the products we offer to our clients.
            </p>
            <Link href="/products">
              <div className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                Learn More
              </div>
            </Link>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Contact us for more information or to get started.
            </p>
            <Link href="/contact">
              <div className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                Contact Us
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
