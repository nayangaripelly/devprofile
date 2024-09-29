const roommates = [
  {
    Name: "Sai Nayan",
    photo: "photos/nayan.jpg",
    intro:
      "I am a 5th semester BTech student with a strong interest in web development and competitive programming. I have experience working with React.js and am focused on frontend development, while also expanding my knowledge in backend development and machine learning.",
    skills: [
      { skill: "HTML", emoji: "💪", color: "orange" },
      { skill: "CSS", emoji: "💪", color: "skyblue" },
      { skill: "JavaScript", emoji: "💪", color: "yellow" },
      { skill: "React", emoji: "✌️", color: "skyblue" },
      { skill: "C++", emoji: "💪", color: "lightgreen" },
      { skill: "DSA", emoji: "✌️", color: "orangered" },
    ],
  },
  {
    Name: "Javvaji Venkata Koushik",
    photo: "photos/koushik.jpg",
    intro:
      "I am a 5th semester BTech student.I am highly skilled in competitive programming and data structures & algorithms, with a 4-star rating on CodeChef and a Specialist rank on Codeforces. I learned HTML,CSS and currently learning JavaScript and machine learning, and plans to explore backend development in the future.",
    skills: [
      { skill: "HTML", emoji: "💪", color: "orange" },
      { skill: "CSS", emoji: "💪", color: "skyblue" },
      { skill: "JavaScript", emoji: "👶", color: "yellow" },
      { skill: "machine learning", emoji: "👶", color: "skyblue" },
      { skill: "C++", emoji: "💪", color: "lightgreen" },
      { skill: "DSA", emoji: "💪", color: "orangered" },
    ],
  },
  {
    Name: "Mithilesh Tapkire",
    photo: "photos/mithilesh.jpg",
    intro:
      "I am a 5th semester BTech student with a strong interest in app development and competitive programming. I have experience working with flutter and building apps, i am a pupil on codeforces and 3 star on codechef .",
    skills: [
      { skill: "HTML", emoji: "💪", color: "orange" },
      { skill: "CSS", emoji: "✌️", color: "skyblue" },
      { skill: "JavaScript", emoji: "👶", color: "yellow" },
      { skill: "flutter", emoji: "💪", color: "skyblue" },
      { skill: "C++", emoji: "💪", color: "lightgreen" },
      { skill: "DSA", emoji: "✌️", color: "orangered" },
    ],
  },
  {
    Name: "Himanshu Singh",
    photo: "photos/himanshu.jpg",
    intro:
      "I am a 5th semester BTech student with a strong interest in web development. I am focused on frontend development. I am also a youtuber and dancer. I am very good at communication and team work.",
    skills: [
      { skill: "HTML", emoji: "💪", color: "orange" },
      { skill: "CSS", emoji: "💪", color: "skyblue" },
      { skill: "JavaScript", emoji: "✌️", color: "yellow" },
      { skill: "Dance", emoji: "💪", color: "skyblue" },
      { skill: "communication", emoji: "💪", color: "skyblue" },
      { skill: "SQL", emoji: "👶", color: "green" },
    ],
  },
];

export default function App() {
  return (
    <div className="app">
      {roommates.map((person) => (
        <div className="card">
          <Avatar photoName={person.photo} name={person.Name} />
          <Data details={person} />
        </div>
      ))}
    </div>
  );
}

function Avatar({ photoName, Name }) {
  return (
    <div className="avatar">
      <img src={photoName} alt={Name} />
    </div>
  );
}

function Data({ details }) {
  return (
    <div className="data">
      <Intro name={details.Name} intro={details.intro} />
      <Skillset skills={details.skills} />
    </div>
  );
}

function Intro({ name, intro }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{intro}</p>
    </div>
  );
}
function Skillset({ skills }) {
  return (
    <ul className="skill-list">
      {skills.map((el) => (
        <Skill skill={el.skill} emoji={el.emoji} color={el.color} />
      ))}
    </ul>
  );
}

function Skill({ skill, emoji, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <p>
        <span>{skill}</span>
        <span>{emoji}</span>
      </p>
    </div>
  );
}
