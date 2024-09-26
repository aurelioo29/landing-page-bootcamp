import { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

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

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-green-600">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
              >
                <span
                  className={`font-semibold text-lg ${
                    activeIndex === index ? "text-orange-600" : ""
                  }`}
                >
                  {faq.question}
                </span>
                <span className="ml-4">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="pb-4 pl-4 text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
