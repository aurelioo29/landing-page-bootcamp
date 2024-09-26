import { useState } from "react";
import { Link } from "react-router-dom";
import Step1 from "../assets/step1.png";
import Step2 from "../assets/step2.png";
import Step3 from "../assets/step3.png";
import Step4 from "../assets/step4.png";
import Step5 from "../assets/step5.png";
import Step6 from "../assets/step6.png";
import Step7 from "../assets/step7.png";

function Roadmap() {
  const [selectedStep, setSelectedStep] = useState(null);

  const steps = [
    {
      title: "Step 1: Open Registration",
      image: Step1,
      detail:
        "At the beginning of the program, registration is opened for participants who want to register for training. Registration can be done by sending invitations, posting announcements on internal communication channels, or creating an online registration form. Next, participants provide basic information and express interest in participating in the program.",
    },
    {
      title: "Step 2 : Pre-Test",
      image: Step2,
      detail:
        "Before the official training begins, participants take a pre-test to assess their basic knowledge and skills related to the training topics. The pre-test helps the trainer understand each participant's starting point and adjust the training content accordingly.",
    },
    {
      title: "Step 3 : Bootcamp",
      image: Step3,
      detail:
        "The main program of the journey on this program section. This could span over multiple sessions or days, depending on the complexity of the material and the availability of participants. During the training program, participants engage in various learning activities, such as lectures, workshops, group discussions, and hands-on exercises. Trainers deliver the content, provide guidance, and facilitate discussions to ensure that participants grasp the concepts and skills being taught.",
    },
    {
      title: "Step 4 : Quiz in The Class",
      image: Step4,
      detail:
        "Participants will receive a quiz, the purpose of which is to reinforce learning, measure participant understanding, and the quiz is held in class. This quiz can be written or oral, covering the main topics discussed in the training session.",
    },
    {
      title: "Step 5 : Post Test",
      image: Step5,
      detail:
        "After completing the training program, participants take a post-test to evaluate their knowledge and skills gained throughout the training. The post-test is similar to the pre-test but focuses on measuring the progress and improvement achieved as a result of the training. By comparing pre-test and post-test scores, you can assess the effectiveness of the training program and measure the learning outcomes.",
    },
    {
      title: "Step 6: Capstone Project",
      image: Step6,
      detail:
        "Following the completion of the training program and assessments, participants engage in a capstone project. The capstone project allows participants to apply the knowledge and skills they've acquired during the training to a real-world scenario or problem relevant to their work or industry. Participants work individually or in groups to conceptualize, plan, execute, and present their capstone projects, demonstrating their understanding and ability to apply the training concepts in practical",
    },
    {
      title: "Step 7: Assessment and Replacement Work",
      image: Step7,
      detail:
        "As part of our commitment to ensuring participants' career success, the Data Analytics Expert Bootcamp focuses not only on learning and skill development, but also on job placement after the program is completed. With this comprehensive approach, the Data Analytics Expert Bootcamp ensures that each participant not only acquires the necessary data analysis skills, but also gets full support in starting and developing their careers at reputable companies.",
    },
  ];

  const handleOpenModal = (step) => {
    setSelectedStep(step);
  };

  const handleCloseModal = () => {
    setSelectedStep(null);
  };

  return (
    <section id="program" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-0 space-y-16">
        {/* Our Journey Program Section */}
        <div className="space-y-6">
          <h1 className="text-center text-3xl font-bold mb-10 text-green-600">
            Our Journey Program&apos;s
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kiri 4 */}
            <div className="space-y-4">
              {steps.slice(0, 4).map((step, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-green-200 transition duration-300"
                  onClick={() => handleOpenModal(step)}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-15 h-12 mr-4 rounded-full"
                  />
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
              ))}
            </div>

            {/* Kanan 3 */}
            <div className="space-y-4">
              {steps.slice(4).map((step, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-green-200 transition duration-300"
                  onClick={() => handleOpenModal(step)}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-15 h-12 mr-4 rounded-full"
                  />
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bootcamp Roadmaps Section */}
        <Program />
      </div>

      {/* Modal for Step Details */}
      {selectedStep && (
        <CardDetail onClose={handleCloseModal}>
          <div className="p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">
              {selectedStep.title}
            </h2>
            <img
              src={selectedStep.image}
              alt={selectedStep.title}
              className="w-20 sm:w-25 h-25 sm:h-30 mb-5 rounded-full mx-auto"
            />
            <p className="text-sm sm:text-lg md:text-xl text-justify">
              {selectedStep.detail}
            </p>
          </div>
        </CardDetail>
      )}
    </section>
  );
}

function Program() {
  return (
    <section id="program" className="bg-white">
      <div className="container mx-auto px-6 md:px-0 space-y-16">
        <div className="space-y-6">
          <h1 className="text-center text-3xl font-bold mb-10">
            Bootcamp Program
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RoadmapItem
              title="Data Science Expert"
              description="Learn Python, Machine Learning, Data Visualization, and much more."
              link="/datascience-roadmap"
            />
            <RoadmapItem
              title="Data Analytics Expert"
              description="Master analytics, data visualization, and business intelligence."
              link="/dataanalytics-roadmap"
            />
            <RoadmapItem
              title="Data Engineering Expert"
              description="Understand ETL, data warehouses, cloud platforms, and big data processing."
              link="/dataengineering-roadmap"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line react/prop-types
function RoadmapItem({ title, description, link }) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg p-6 text-center">
      <h3 className="text-xl font-bold mb-2 ">{title}</h3>
      <p>{description}</p>
      <Link to={link} className="block mt-4 text-blue-600">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Detail Programs
        </button>
      </Link>
    </div>
  );
}

function CardDetail({ onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        {/* Tombol Close di sebelah kiri dengan bentuk X */}
        <button
          onClick={onClose}
          className="absolute top-1.5 right-4 text-red-600 text-5xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Roadmap;
