import React from "react";
import Link from "next/link";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      bio: "With over 15 years of industry experience, John leads our company vision and strategy.",
      imageUrl: "/api/placeholder/150/150",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      bio: "Jane brings technical excellence and innovation to our development processes.",
      imageUrl: "/api/placeholder/150/150",
    },
    {
      name: "Mike Johnson",
      role: "Design Director",
      bio: "Mike ensures our products meet the highest standards of user experience and design.",
      imageUrl: "/api/placeholder/150/150",
    },
    {
      name: "Sarah Wilson",
      role: "Marketing Manager",
      bio: "Sarah drives our marketing initiatives and builds strong customer relationships.",
      imageUrl: "/api/placeholder/150/150",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto py-4 px-6 flex justify-between items-center">
          <Link href="/">My Website</Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-6">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 mb-6">
            Founded in 2020, we are a passionate team dedicated to creating
            innovative solutions for our clients. Our mission is to deliver
            exceptional value through technology and creativity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <h3 className="text-2xl font-bold text-blue-500 mb-2">100+</h3>
              <p className="text-gray-600">Clients Served</p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-bold text-blue-500 mb-2">50+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-bold text-blue-500 mb-2">15+</h3>
              <p className="text-gray-600">Team Members</p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/api/placeholder/400/300"
                alt="Company office"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-500 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
