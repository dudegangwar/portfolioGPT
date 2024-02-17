import React from "react";

const Aboutme = () => {
  return (
    <div>
      <div className="flex items-center w-full justify-between border rounded-2xl p-4">
        <div>
          <h1 className="text-xl">Name: Anuj Kumar</h1>
          <h2 className="text-xl">Data Science Aspirant</h2>
          <h2 className="text-xl">Email: anujgangwar2050@gmail.com</h2>
        </div>
        <img
          className="rounded-full w-[150px] h-[150px]"
          src="https://avatars.githubusercontent.com/u/86113409?v=4"
        />
      </div>
      <div className="mt-4">
        <h1 className="underline underline-offset-4 text-lg">About Me</h1>
        <p>I am Anuj Kumar, a dedicated and passionate Data Science enthusiast with a keen interest in leveraging technology to solve real-world problems. Currently pursuing a Bachelor's degree in Data Science and Applications from the prestigious Indian Institute of Technology, Madras, I have a solid foundation in computer science, complemented by practical experience and a strong academic background.</p>
      </div>
      <div className="mt-4">
        <h1 className="underline underline-offset-4 text-lg">Education</h1>
        <p>My educational journey began with a Diploma in Computer Science and Engineering from Government Polytechnic, Shahjahanpur, where I achieved a commendable CGPA of 7.5. Prior to that, I completed my intermediate education from SV Inter College, Bareilly, and high school from Sanatan Dharam HSS School, Bareilly, demonstrating consistent academic excellence.</p>
      </div>
      <div className="mt-4">
        <h1 className="underline underline-offset-4 text-lg">Technical Skills</h1>
        <p>Proficient in a wide array of technical skills, I specialize in Data Science, with expertise in Machine Learning, Deep Learning, and Natural Language Processing. My programming prowess includes languages such as Python, JavaScript, HTML/CSS, and SQL. Additionally, I am well-versed in frameworks like Vue.js, Flask, and WordPress, along with a range of libraries including Scikit-learn, TensorFlow, PyTorch, and NLTK.</p>
      </div>
      <div className="mt-4">
        <h1 className="underline underline-offset-4 text-lg">Experience</h1>
        <p>As an SEO Analyst at Aphex Media, I honed my skills in developing and implementing effective SEO strategies to improve website rankings and increase organic traffic. Utilizing tools such as Google Analytics, SEMrush, and Ahrefs, I conducted comprehensive keyword research, tracked rankings, and identified opportunities for optimization.</p>
      </div>
      <div className="mt-4">
        <h1 className="underline underline-offset-4 text-lg">Projects</h1>
        <p>I have a proven track record of successfully delivering impactful projects. One notable project is the "E-commerce Shopper’s Behaviour Understanding," where I developed a predictive model to analyze user session data and predict purchase behavior with an accuracy of 62%. Another innovative project is the creation of a "Chatbot to give answers from PDFs," showcasing my expertise in Natural Language Processing. Additionally, I have contributed to the development of the "Tasker App," a task management application designed to enhance productivity and workflow efficiency. Moreover, my experience in "Business Analysis of Smartphone Shop" demonstrates my ability to solve real-world problems using data-driven insights and analytics tools.</p>
      </div>
    </div>
  );
};

export default Aboutme;
