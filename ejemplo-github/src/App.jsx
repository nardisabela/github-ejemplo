import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

export default function App() {
  const tips = [
    {
      title: "Create a Repo Together",
      text: "Start by creating a shared GitHub repository so everyone can contribute!",
    },
    {
      title: "Make Branches",
      text: "Each teammate creates their own branch to keep the main code clean and conflict‑free.",
    },
    {
      title: "Commit Often",
      text: "Small, frequent commits make it easy to track progress and fix issues.",
    },
    {
      title: "Open Pull Requests",
      text: "PRs help your team review changes, discuss ideas, and merge safely.",
    },
    {
      title: "Communicate!",
      text: "Use issues, comments, and messages to stay connected and aligned.",
    }
  ];

  const [index, setIndex] = useState(0);

  const nextTip = () => setIndex((i) => (i + 1) % tips.length);

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center p-6 text-gray-800">
      <header className="flex gap-6 mt-6">
        <img src={reactLogo} alt="React Logo" className="w-20 drop-shadow-xl animate-spin-slow" />
      </header>

      <h1 className="text-4xl font-bold mt-6 text-pink-600">Working Together with GitHub + React</h1>
      <p className="mt-2 text-lg text-center max-w-xl">
        Teamwork becomes magical when everyone collaborates smoothly! Here are some cute tips to help your group work together using GitHub and React.
      </p>

      <div className="mt-10 bg-white rounded-2xl shadow-xl p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-pink-500">✨ {tips[index].title} ✨</h2>
        <p className="mt-3 text-gray-700">{tips[index].text}</p>
        <button
          onClick={nextTip}
          className="mt-6 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-xl shadow-md transition-all"
        >
          Next Tip →
        </button>

        <a href="About.jsx"><p>Click me</p></a>

      </div>

      <footer className="mt-10 text-sm opacity-70">Made with ❤️ using React</footer>
    </div>
  );
}
