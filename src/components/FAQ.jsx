import React from "react";

function FAQ() {
  const faqs = [
    {
      question:
        "What prior knowledge do I need before enrolling in this program?",
      answer:
        "A basic understanding of data concepts is essential for success in this program. Familiarity with terms and principles related to data will help you grasp the course material more effectively.",
    },
    {
      question: "What tools will I learn?",
      answer:
        "You will learn Python, SQL, data visualization tools, and much more.",
    },
    {
      question: "How long does the bootcamp last?",
      answer: "The bootcamp lasts for 12 weeks of intensive learning.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes, upon completion of the course, you will receive a certificate.",
    },
    {
      question: "Do I need to have programming skills to participate?",
      answer:
        "While basic programming and algorithm knowledge can be beneficial, they are not mandatory for enrollment. However, being open to learning programming concepts will enhance your experience.",
    },
    {
      question:
        "What personal qualities should I have to succeed in this program?",
      answer:
        "Commitment and perseverance are crucial. Data-related fields can be challenging, and having the determination to overcome obstacles will greatly contribute to your success in this program.",
    },
  ];

  return (
    <section id="faq" className="py-10 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-8 text-left text-green-600">
          Frequently Asked Questions
        </h2>

        {/* FAQ Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-green-50 hover:shadow-xl transition duration-300 ease-in-out"
            >
              <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
