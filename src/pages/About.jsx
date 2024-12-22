import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
            {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Who We Are</h2>
          <p className="mt-6 text-lg text-gray-600 text-center">
            Ummat Welfare Organization is a community-driven NGO based in Gilgit-Baltistan. We are dedicated to serving humanity through education, healthcare, and social welfare. Our mission is to help orphans and widows, offer free education and accommodations, and empower individuals with skills for self-reliance.
          </p>
          <p className="mt-4 text-lg text-gray-600 text-center">
            We believe in the power of community support and aim to create a sustainable, positive impact for the underprivileged in our region.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-6 text-lg text-gray-600">
            We strive to make a difference by providing support to those in need. Our mission is to empower individuals, uplift families, and contribute to the betterment of society through various initiatives and services.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Helping Orphans and Widows</h3>
              <p className="mt-4 text-gray-600">We provide financial assistance and support to orphans and widows in need.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Free Education & Accommodation</h3>
              <p className="mt-4 text-gray-600">We offer free schooling and hostel facilities to underprivileged children, ensuring they have a chance at a brighter future.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Vocational Training for Women</h3>
              <p className="mt-4 text-gray-600">Our sewing school center provides women with valuable vocational skills for financial independence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Join Us in Making a Difference</h2>
          <p className="mt-6 text-lg text-gray-600">Your support helps us continue to provide education, healthcare, and vocational training for those in need. Together, we can empower individuals to build a better future for themselves and their communities.</p>
          <Link to="#donate" className="mt-8 inline-block px-6 py-2 bg-primary text-white rounded-md ">Support Our Cause</Link>
        </div>
      </section>

      
    </div>
  );
};



export default About
