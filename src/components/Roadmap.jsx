import React from "react";
import { Link } from "react-router-dom";
import RoadmapImage from "../assets/roadmap.png";

function Roadmap() {
  return (
    <section id="program" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Image */}
        <div className="text-center md:text-left">
          <img
            src={RoadmapImage}
            alt="Marketing Toolkit"
            className="w-full md:w-3/4 mx-auto"
          />
        </div>

        {/* Right Column - Bootcamp Cards */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-center pb-4">Bootcamp Roadmaps</h2>
          <div className="grid grid-cols-1 gap-6">
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

function RoadmapItem({ title, description, link }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg hover:bg-green-200 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-4">{description}</p>
      <Link to={link} className="text-blue-600 mt-4 block">
        View Full Roadmap
      </Link>
    </div>
  );
}

export default Roadmap;
