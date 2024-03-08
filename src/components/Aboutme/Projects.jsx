import React from 'react'

const Projects = () => {
  return (
    <div className="mt-4">
        {/* <h1 className="underline underline-offset-4 text-lg">Projects</h1> */}
        <p>
          I have a proven track record of successfully delivering impactful
          projects. One notable project is the E-commerce Shoppers Behaviour
          Understanding, where I developed a predictive model to analyze user
          session data and predict purchase behavior with an accuracy of 62%.
          Another innovative project is the creation of a Chatbot to give
          answers from PDFs, showcasing my expertise in Natural Language
          Processing. Additionally, I have contributed to the development of the
          Tasker App, a task management application designed to enhance
          productivity and workflow efficiency. Moreover, my experience in
          Business Analysis of Smartphone Shop demonstrates my ability to
          solve real-world problems using data-driven insights and analytics
          tools.
        </p>
        <div className="project-container">
          <div className="project">
            <h2>E-commerce Shopper's Behaviour Understanding</h2>
            <p>
              Developed a predictive model to determine purchase behavior based
              on user session data.
            </p>
            <p>Accuracy achieved: 62%</p>
            <a href="https://www.kaggle.com/competitions/e-commerce-shoppers-behaviour-understanding/overview" className="project-link">
              View Project
            </a>
          </div>

          <div className="project">
            <h2>Chatbot to give answers from PDFs</h2>
            <p>Created a chatbot to extract answers from uploaded PDF files.</p>
            <a href="https://github.com/dudegangwar/ChatWithPDF" className="project-link">
              View Project
            </a>
          </div>

          <div className="project">
            <h2>Tasker App</h2>
            <p>
              Designed a task management app for efficient organization and
              productivity.
            </p>
            <a href="https://github.com/dudegangwar/tasker" className="project-link">
              View Project
            </a>
          </div>

          <div className="project">
            <h2>Business Analysis of Smartphone Shop</h2>
            <p>
              Utilized data analysis and visualization to optimize pricing
              strategies and identify growth opportunities.
            </p>
            <a href="https://www.linkedin.com/posts/dudegangwar_bdm-ppt-activity-7062113769811849216--oM1?utm_source=share&utm_medium=member_desktop" className="project-link">
              View Project
            </a>
          </div>
        </div>
      </div>

  )
}

export default Projects
