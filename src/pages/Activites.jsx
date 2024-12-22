import React from 'react';
import { Link } from 'react-router-dom';

const Activities = () => {
  return (
    <div className="bg-gray-100 text-gray-900">

      {/* Header Section */}
      <header className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold">Our Activities</h1>
          <p className="mt-4 text-xl">See how we are making an impact in the community</p>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Our Mission in Action</h2>
          <p className="mt-6 text-lg text-gray-600 text-center">
            We are committed to making a meaningful impact through our various initiatives. Our work focuses on helping orphans and widows, providing free education, empowering women, and supporting the community in various ways.
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Key Activities</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Activity 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-primary-color">Helping Orphans and Widows</h3>
              <p className="mt-4 text-gray-600">
                We provide financial assistance, emotional support, and essential resources to orphans and widows, helping them build a brighter future.
              </p>
              <a href="#" className="mt-4 inline-block text-primary-color hover:underline">Learn More</a>
            </div>

            {/* Activity 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-primary-color">Free Education & Accommodation</h3>
              <p className="mt-4 text-gray-600">
                Our schools and hostel facilities provide free education and safe accommodations to underprivileged children, giving them a chance at a better life.
              </p>
              <a href="#" className="mt-4 inline-block text-primary-color hover:underline">Learn More</a>
            </div>

            {/* Activity 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-primary-color">Vocational Training for Women</h3>
              <p className="mt-4 text-gray-600">
                We empower women by offering vocational training in sewing, crafting, and other skills that help them become self-sufficient.
              </p>
              <a href="#" className="mt-4 inline-block text-primary-color hover:underline">Learn More</a>
            </div>

            {/* Activity 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-primary-color">Freelancing Training Center</h3>
              <p className="mt-4 text-gray-600">
                We equip people with skills to earn a living online. Our freelancing training center teaches skills such as web development, graphic design, and digital marketing.
              </p>
              <a href="#" className="mt-4 inline-block text-primary-color hover:underline">Learn More</a>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Get Involved and Make a Difference</h2>
          <p className="mt-6 text-lg text-gray-600">
            You can help us expand our reach and create more positive impacts. Join us today and become a part of the change we are striving to make in our community.
          </p>
          <Link to="/contact" className="mt-8 inline-block px-6 py-2 bg-primary-color text-white rounded-md hover:bg-primary-color-dark">Support Our Cause</Link>
        </div>
      </section>

     
    </div>
  );
};




export default Activities
