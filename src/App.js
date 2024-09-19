const roommate = [
  {
    Name: "Sai Nayan",
    photo: "photo/nayan.jpg",
    intro:
      "I am a 5th semester BTech student with a strong interest in web development and competitive programming. I have experience working with React.js and am focused on frontend development, while also expanding my knowledge in backend development and machine learning.",
    skills: ["HTML", "CSS", "Javascript", "ReactJS", "c++", "DSA"],
  },
  {
    Name: "Sai Nayan",
    photo: "photo/nayan.jpg",
    intro:
      "I am a 5th semester BTech student with a strong interest in web development and competitive programming. I have experience working with React.js and am focused on frontend development, while also expanding my knowledge in backend development and machine learning.",
    skills: ["HTML", "CSS", "Javascript", "ReactJS", "c++", "DSA"],
  },
  {
    Name: "Sai Nayan",
    photo: "photo/nayan.jpg",
    intro:
      "I am a 5th semester BTech student with a strong interest in web development and competitive programming. I have experience working with React.js and am focused on frontend development, while also expanding my knowledge in backend development and machine learning.",
    skills: ["HTML", "CSS", "Javascript", "ReactJS", "c++", "DSA"],
  },
  {
    Name: "Sai Nayan",
    photo: "photo/nayan.jpg",
    intro:
      "I am a 5th semester BTech student with a strong interest in web development and competitive programming. I have experience working with React.js and am focused on frontend development, while also expanding my knowledge in backend development and machine learning.",
    skills: ["HTML", "CSS", "Javascript", "ReactJS", "c++", "DSA"],
  },
];

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <Data />
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img src="photos/nayan.jpg" alt="nayan" />
    </div>
  );
}

function Data() {
  return (
    <div className="data">
      <Intro />
      <Skillset />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>SAI NAYAN</h1>
      <p>
        I am a 5th semester BTech student with a strong interest in web
        development and competitive programming. I have experience working with
        React.js and am focused on frontend development, while also expanding my
        knowledge in backend development and machine learning.
      </p>
    </div>
  );
}
function Skillset() {
  return (
    <ul className="skill-list">
      {roommate[0].skills.map((skill) => (
        <Skill skill={skill} color="red" />
      ))}
    </ul>
  );
}

function Skill({ skill, color }) {
  return (
    <div className="skill">
      <p>
        <span>{skill}</span>
      </p>
    </div>
  );
}
