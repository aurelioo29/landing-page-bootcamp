import ImageEngineer from "../../assets/data-engineer.png";

const DataEngineeringRoadmap = () => {
  const roadmapSteps = [
    {
      title: "Introduction to Data Engineering",
      description:
        "Discover the role of data engineers, tools they use, and the growing demand in the industry.",
      details: [
        "Overview of the data engineering landscape and its importance",
        "Career paths and opportunities in data engineering",
        "Use Case",
      ],
    },
    {
      title: "Mathematics for Data Engineers",
      description:
        "Key mathematical concepts: Algebra, Calculus, and Statistics for data analysis.",
      details: [
        "Key mathematical concepts: Algebra, Calculus",
        "Statistics and Probability for data analysis",
        "Use Case",
      ],
    },
    {
      title: "Programming Essentials",
      description:
        "Introduction to Python, Java, Scala, and the basics of SQL for data management.",
      details: [
        "Introduction to Python, Java, Scala",
        "Basics of SQL and its importance in data management",
        "Use Case",
      ],
    },
  ];

  const courseInfo = {
    duration: [
      "This program has 6 meetings",
      "Meeting once a week, every Saturday at 09.00 – 17.00 WIB",
      "Monday-Friday self-learning online",
      "Capstone-Project 2 meetings",
    ],
    methodOfDelivery: [
      "Lectures and Tutorials: Comprehensive sessions covering theoretical concepts.",
      "Hands-on Labs: Practical sessions to implement the learned concepts.",
      "Projects: Real-world projects to apply data engineering techniques in practical scenarios.",
      "Quizzes and Exams: Periodic assessments to evaluate understanding and progress.",
      "Peer Discussions and Support: Interactive sessions for collaborative learning.",
    ],
    technicalRequirements: [
      "Processor (CPU): Intel Core i5 or equivalent",
      "Memory (RAM): 8 GB",
      "Storage: 100 GB of free space on the hard drive",
      "Graphics Card (GPU): Integrated GPU (for basic tasks) (Optional)",
      "Operating System: Windows 10, macOS 10.13 or later, or a supported Linux distribution (e.g., Ubuntu 18.04 or later)",
      "Internet connection: Stable for downloading software and datasets and taking online courses",
    ],
  };

  return (
    <div className="container mx-auto py-16">
      {/* Course Information Section */}
      <div>
        <h2 className="text-3xl font-bold mb-4 text-center">
          Data Engineer Course Information
        </h2>
        <p className="mb-8 text-center">
          In this bootcamp, you will learn about Python, SQL, Data Pipelines,
          Java and more. Below is the detailed roadmap to becoming a Data
          Engineer Expert.
        </p>

        {/* Duration Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Duration</h3>
          <ul className="list-disc list-inside">
            {courseInfo.duration.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Method of Delivery Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Method of Delivery</h3>
          <ul className="list-disc list-inside">
            {courseInfo.methodOfDelivery.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Technical Requirements Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Course-specific Technical Requirements
          </h3>
          <ul className="list-disc list-inside">
            {courseInfo.technicalRequirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Roadmap Image with Hover Effect */}
      <div className="mt-16 text-center">
        <div className="relative inline-block transition-all duration-300 ease-in-out transform hover:scale-125">
          <img
            src={ImageEngineer}
            alt="Data Science Roadmap"
            className="mx-auto rounded-lg shadow-lg max-w-xs h-auto opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100"
          />
          <div className="absolute inset-0 opacity-30 rounded-lg transition-opacity duration-300 ease-in-out hover:opacity-0" />
        </div>
      </div>

      <div className="mt-16">
        <h1 className="text-3xl font-bold mb-8 text-center ">
          Our Program Modules
        </h1>
        {/* Roadmap Steps Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 transition-transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold mb-4">{step.title}</h2>
              <p className="mb-4 text-gray-700">{step.description}</p>
              <ul className="list-disc list-inside">
                {step.details.map((detail, i) => (
                  <li key={i} className="text-gray-600">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Download Link Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Download Additional Materials
        </h2>
        <p className="mb-8">
          For more comprehensive information, you can download the complete
          course materials in PDF format. Click the link below:
        </p>
        <a
          href="https://www.dropbox.com/scl/fi/qat4c9s59pdi0dgus7wxa/Data-Engineer-Expert.pdf?rlkey=vdlws51jidwy63uyx8aa2gvkz&st=8olh83r6&dl=0"
          className="inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition duration-300"
          target="_blank"
        >
          Download Course Materials
        </a>
      </div>
    </div>
  );
};

export default DataEngineeringRoadmap;
