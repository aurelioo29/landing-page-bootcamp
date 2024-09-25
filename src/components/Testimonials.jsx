import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "This bootcamp helped me land my dream job!",
    },
    { name: "Jane Smith", feedback: "The hands-on projects were invaluable." },
    {
      name: "Alice Cooper",
      feedback: "The curriculum was comprehensive and up-to-date.",
    },
  ];

  return (
    <section id="testimonials" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Alumni Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic">&quot;{testimonial.feedback}&quot;</p>
              <p className="mt-4 font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
