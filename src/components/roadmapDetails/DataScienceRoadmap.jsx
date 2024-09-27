import ImageScientist from "../../assets/data-scientist.png";

function DataScienceRoadmap() {
  const roadmapSteps = [
    {
      title: "Introduction to Data Science",
      description:
        "Learn the importance and methodology (CRISP-DM) of data science.",
      details: [
        "Definition and Importance of Data Science",
        "CRISP-DM Methodology",
        "Business Understanding",
        "Data Understanding",
        "Data Preparation",
        "Modelling",
        "Evaluation",
        "Deployment",
        "Use Case",
      ],
    },
    {
      title: "Basic Foundation Mathematics",
      description:
        "Build a strong foundation in Linear Algebra, Calculus, and Statistics.",
      details: [
        "Linear Algebra",
        "Calculus",
        "Probability",
        "Statistics",
        "Use Case",
      ],
    },
    {
      title: "Fundamental Programming (Python)",
      description:
        "Get familiar with Python and write basic scripts for data handling.",
      details: [
        "Introduction to Programming Language",
        "Variable and Data Types",
        "Data Operations: List, Tuple, Dictionary",
        "Conditional Statements",
        "Looping and Iteration",
        "Functions and Error Handling",
        "Use Case",
      ],
    },
    // {
    //   title: "Manipulation Data Using Pandas",
    //   description: "Learn how to manipulate and analyze data using Pandas.",
    //   details: [
    //     "Data Frame Operations",
    //     "Filtering, Aggregating, and Pivoting Data",
    //     "Data Manipulation and Combination",
    //     "Use Case",
    //   ],
    // },
    // {
    //   title: "Fundamentals SQL",
    //   description: "Understand the basics of SQL and relational databases.",
    //   details: [
    //     "What is RDBMS, Database, Table, Attribute, Type Data",
    //     "Query DDL and DML",
    //     "Use Case",
    //   ],
    // },
    // {
    //   title: "Advanced SQL",
    //   description: "Dive deeper into SQL with advanced techniques.",
    //   details: [
    //     "Normalization",
    //     "Function Queries",
    //     "Inner Join, Left Join, Right Join, Full Outer Join",
    //     "Subquery",
    //     "Use Case",
    //   ],
    // },
    // {
    //   title: "Data Collection and Cleaning",
    //   description: "Learn techniques for collecting and cleaning data.",
    //   details: [
    //     "Data Source and Data Understanding",
    //     "Data Cleaning Techniques and Data Preparation",
    //     "Data Transformation",
    //     "Use Case",
    //   ],
    // },
    // {
    //   title: "Data Analysis & Visualization",
    //   description: "Explore data visualization and analysis techniques.",
    //   details: [
    //     "Exploratory Data Analysis (EDA)",
    //     "Matplotlib and Seaborn Visualization",
    //     "Report Visualization",
    //     "Dashboard Visualization",
    //     "Best Practices for Storytelling",
    //     "Use Case",
    //   ],
    // },
    // {
    //   title: "Supervised Learning",
    //   description: "Introduction to supervised learning techniques.",
    //   details: [
    //     "Introduction to Supervised Learning",
    //     "Linear Regression, Logistic Regression",
    //     "Decision Trees, Random Forests",
    //     "Use Case",
    //   ],
    // },
    // {
    //   title: "Unsupervised Learning",
    //   description: "Understand the techniques used in unsupervised learning.",
    //   details: [
    //     "Introduction to Unsupervised Learning",
    //     "Clustering Techniques (K-means, Hierarchical)",
    //     "Dimensionality Reduction (PCA, t-SNE)",
    //     "Use Case",
    //   ],
    // },
    // {
    //   title: "Advanced Topics",
    //   description: "Explore advanced topics in data science.",
    //   details: [
    //     "Introduction to Deep Learning (Neural Networks)",
    //     "Basics of Natural Language Processing (NLP)",
    //     "Time Series Analysis",
    //     "Use Case",
    //   ],
    // },
    // {
    //   title: "Soft Skills",
    //   description: "Develop essential soft skills for data science.",
    //   details: [
    //     "Communication",
    //     "Problem-Solving",
    //     "Critical Thinking",
    //     "Methodology Project",
    //     "Use Case",
    //   ],
    // },
    // {
    //   title: "Hands-On Projects",
    //   description: "Apply your knowledge through hands-on projects.",
    //   details: [
    //     "Individual or Group Projects",
    //     "Application of Full Data Science Lifecycle",
    //     "Presentation and Critique of Results",
    //   ],
    // },
  ];

  const courseInfo = {
    duration: [
      "This program has 6 meetings",
      "Meeting once a week, every Saturday at 09.00 – 17.00 WIB",
      "Monday-Friday self-learning online",
      "Capstone-Project 2 meetings",
    ],
    methodOfDelivery: [
      "Lectures and Tutorials: Detailed explanation of theoretical concepts.",
      "Hands-on Labs: Practical sessions to implement learned concepts.",
      "Projects: Real-world projects to apply data science techniques.",
      "Quizzes and Exams: Regular assessments to gauge understanding.",
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
          Data Science Course Information
        </h2>
        <p className="mb-8 text-center">
          In this bootcamp, you will learn about Python, Machine Learning, Data
          Visualization, and more. Below is the detailed roadmap to becoming a
          Data Science Expert.
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
            src={ImageScientist}
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
          href="https://www.dropbox.com/scl/fi/3jrd59ox64sosggrg9d04/Data-Science-Expert.pdf?rlkey=ksnvzzz5k8tfvz16nxvzxz961&st=ra8q9go0&dl=0"
          className="inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition duration-300"
          target="_blank"
        >
          Download Course Materials
        </a>
      </div>
    </div>
  );
}

export default DataScienceRoadmap;
