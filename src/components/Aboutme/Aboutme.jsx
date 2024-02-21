import React from "react";
import AnujPhoto from "../../assets/anuj.jpg";
import Popover from "@mui/material/Popover";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
const Aboutme = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selected, setSelected] = React.useState(null);
  console.log(selected);

  const handleClick = (event, item) => {
    setAnchorEl(event.currentTarget);
    setSelected(item);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelected(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const image = [
    {
      title: "HTML",
      description:
        "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
      img: "https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/html-5.svg",
    },
    {
      title: "CSS",
      description:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML.",
      img: "https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/css-3.svg",
    },
    {
      title: "JavaScript",
      description:
        "JavaScript is a programming language that enables you to create dynamically updating content, control multimedia, animate images, and much more.",
      img: "https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/javascript.svg",
    },
    {
      title: "Bootstrap",
      description:
        "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
      img: "https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/bootstrap.svg",
    },
    {
      title: "React",
      description:
        "React is a JavaScript library for building user interfaces, particularly single-page applications where data can change over time.",
      img: "https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/react.svg",
    },
    {
      title: "Vue.js",
      description:
        "Vue.js is an open-source model-view-viewmodel JavaScript framework for building user interfaces and single-page applications.",
      img: "https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/vue.svg",
    },
    {
      title: "Python",
      description:
        "Python is an interpreted, high-level and general-purpose programming language known for its simplicity and versatility.",
      img: "https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/python.svg",
    },
    {
      title: "SQLite",
      description:
        "SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.",
      img: "https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/sqlite.svg",
    },
  ];
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
      <div className="flex w-full mt-2 rounded overflow-hidden">
        <div className="overflow-hidden w-1/2">
          <img
            className="w-full h-full object-cover hover:scale-110 transition-all duration-200 ease-in-out"
            src={AnujPhoto}
            alt="Image 1"
          />
        </div>
        <div className="w-1/2">
          <div className="overflow-hidden w-full">
            <img
              className="hover:scale-110 transition-all duration-200 ease-in-out"
              src={AnujPhoto}
              alt="Image 2"
            />
          </div>
          <div className="overflow-hidden w-full">
            <img
              className="hover:scale-110 transition-all duration-200 ease-in-out"
              src={AnujPhoto}
              alt="Image 3"
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="underline underline-offset-4 text-lg">About Me</h1>
        <p>
          I am Anuj Kumar, a dedicated and passionate Data Science enthusiast
          with a keen interest in leveraging technology to solve real-world
          problems. Currently pursuing a Bachelors degree in Data Science and
          Applications from the prestigious Indian Institute of Technology,
          Madras, I have a solid foundation in computer science, complemented by
          practical experience and a strong academic background.
        </p>
      </div>
      <div className="mt-4">
        <h1 className="underline underline-offset-4 text-lg">Education</h1>
        <table>
          <tr>
            <th>Education Level</th>
            <th>Institution</th>
            <th>Duration</th>
            <th>CGPA/Percentage</th>
          </tr>
          <tr>
            <td>Bachelors in Data Science and Applications</td>
            <td>Indian Institute of Technology, Madras</td>
            <td>Jan 2021 - Present</td>
            <td>7 (CGPA)</td>
          </tr>
          <tr>
            <td>Diploma in Computer Science and Engineering</td>
            <td>Government Polytechnic, Shahjahanpur</td>
            <td>2017 - 2020</td>
            <td>7.5 (CGPA)</td>
          </tr>
          <tr>
            <td>Intermediate</td>
            <td>SV Inter College, Bareilly</td>
            <td>2016 - 2017</td>
            <td>61.4%</td>
          </tr>
          <tr>
            <td>High School</td>
            <td>Sanatan Dharam HSS School, Bareilly</td>
            <td>2014 - 2015</td>
            <td>79%</td>
          </tr>
        </table>
      </div>
      <div className="mt-4">
        <h1 className="underline underline-offset-4 text-lg">
          Technical Skills
        </h1>
        <p>I have become confident using the following technologies.</p>
        <div className="flex items-center justify-between bg-white p-4 rounded-2xl m-2">
          {image.map((item, index) => {
            return (
              <img
                key={index}
                className="w-16 h-16 hover:cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out"
                src={item.img}
                // onMouseOver={(e) => handleClick(e, item)}
                onClick={(e) => handleClick(e, item)}
                // onMouseLeave={()=>handleClose()}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-between bg-white p-4 rounded-2xl m-2">
          <img
            className="w-16 h-16"
            src="https://seeklogo.com/images/A/ahrefs-logo-F4E31FB5C2-seeklogo.com.png"
          />
          <img
            className="w-16 h-16"
            src="https://cdn.freelogovectors.net/wp-content/uploads/2023/10/semrush-icon-freelogovectors.net_.png"
          />
          <img
            className="w-16 h-16"
            src="https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/flask.svg"
          />
          <img
            className="w-16 h-16"
            src="https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/redis.svg"
          />
          <img
            className="w-16 h-16"
            src="https://www.vectorlogo.zone/logos/wordpress/wordpress-tile.svg"
          />
          <img
            className="w-16 h-16"
            src="https://elementor.com/marketing/wp-content/uploads/2021/10/Elementor-Logo-Symbol-Red.svg"
          />
          <img
            className="w-16 h-16"
            src="https://www.drupal.org/files/project-images/gutenberg_pattern_drupal_720_0_0.png"
          />
        </div>
        <p>
          Proficient in a wide array of technical skills, I specialize in Data
          Science, with expertise in Machine Learning, Deep Learning, and
          Natural Language Processing. My programming prowess includes languages
          such as Python, JavaScript, HTML/CSS, and SQL. Additionally, I am
          well-versed in frameworks like Vue.js, Flask, and WordPress, along
          with a range of libraries including Scikit-learn, TensorFlow, PyTorch,
          and NLTK.
        </p>
      </div>
      <div className="mt-4">
        <h1 className="underline underline-offset-4 text-lg">Experience</h1>
        <p>
          As an SEO Analyst at Aphex Media, I honed my skills in developing and
          implementing effective SEO strategies to improve website rankings and
          increase organic traffic. Utilizing tools such as Google Analytics,
          SEMrush, and Ahrefs, I conducted comprehensive keyword research,
          tracked rankings, and identified opportunities for optimization.
        </p>
      </div>
      <div className="mt-4">
        <h1 className="underline underline-offset-4 text-lg">Projects</h1>
        <div className="project-container">
          <div className="project">
            <h2>E-commerce Shopper’s Behaviour Understanding</h2>
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
      </div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {selected && (
          <div className="p-4 max-w-sm">
            <h2 className="text-lg font-semibold mb-2">{selected.title}</h2>
            <p className="text-base">{selected.description}</p>
          </div>
        )}
      </Popover>
    </div>
  );
};

export default Aboutme;
