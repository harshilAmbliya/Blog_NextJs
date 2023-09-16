// components/Testimonials.tsx
import prisma from '@/prisma/prismadb';
import React from 'react';

const Testimonials = async () => {
  const testimonials =await prisma.user.findMany()

  return (
    <section className=" py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">Users</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg hover:scale-90 transition-all duration-200">
            
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-2xl font-semibold">
                    {testimonial.username}
                  </span>
                </div>
                <div className="ml-4 px-10">
                  <p className="text-gray-800 font-semibold">{testimonial.username}</p>
                  <p className="text-gray-600">{testimonial.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
