"use client";

import Experience from "./Experience";
import Education from "./Education";
import Publications from "./Publications";
import About from "./About";
import DepartmentDatabase from "./projects/DepartmentDatabase";
import ImageCaptionGeneration from "./projects/ImageCaptionGeneration";
import HandwrittenDevanagariCharacterRecognition from "./projects/HandwrittenDevanagariCharacterRecognition";
import BrainTumorClassification from "./projects/BrainTumorClassification";
import Slaabur from "./projects/Slaabur";
import FitnessFlow from "./projects/FitnessFlow";
import RanabhoomiAFiremanGame from "./projects/RanabhoomiAFiremanGame";
import SnakeAndLadder3D from "./projects/SnakeAndLadder3D";
import Perceparator from "./projects/Perceparator";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Navigation - shown only on mobile */}
      <nav className="md:hidden bg-gradient-to-r from-blue-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 p-4 shadow-md sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="images/photo.jpeg"
              alt="Sankalpa Rijal profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-blue-400 dark:border-blue-300 shadow"
            />
            <h1 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Sankalpa Rijal
            </h1>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 dark:text-gray-300 p-2"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            <ul className="flex flex-col gap-4 text-base font-medium text-gray-700 dark:text-gray-300">
              <li>
                <a
                  href="#about"
                  className="block py-2 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="block py-2 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="block py-2 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block py-2 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#publications"
                  className="block py-2 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Publications
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4 justify-center">
              <a
                href="https://linkedin.com/in/rijalsankalp"
                target="_blank"
                rel="noopener"
                className="hover:text-blue-600 text-gray-700 dark:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.599 2.001 3.599 4.601v5.595z" />
                </svg>
              </a>
              <a
                href="https://github.com/rijalsankalp"
                target="_blank"
                rel="noopener"
                className="hover:text-blue-600 text-gray-700 dark:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 7.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.339-.012 2.421-.012 2.749 0 .268.18.579.688.481C19.138 20.175 22 16.427 22 12.012 22 6.484 17.523 2 12 2z" />
                </svg>
              </a>
            </div>
            <div className="text-center mt-3 text-xs text-gray-500 dark:text-gray-400">
              <p>Bryn Mawr, PA</p>
              <a
                href="mailto:sankalpa.rijal239@gmail.com"
                className="underline"
              >
                sankalpa.rijal239@gmail.com
              </a>
              <p className="font-medium">(484) 582-9330</p>
            </div>
          </div>
        )}
      </nav>

      <div className="flex">
        {/* Desktop Sidebar - hidden on mobile */}
        <aside className="hidden md:flex w-64 min-h-screen bg-gradient-to-br from-blue-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 shadow-lg flex-col items-center py-10 px-6 gap-8 border-r border-blue-200 dark:border-gray-700 sticky top-0 h-screen">
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-full bg-blue-200 dark:bg-gray-700 flex items-center justify-center mb-2">
              <img
                src="images/photo.jpeg"
                alt="Sankalpa Rijal profile"
                className="w-20 h-20 rounded-full object-cover border-2 border-blue-400 dark:border-blue-300 shadow"
              />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Sankalpa Rijal
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-400">
              Computer Science Student
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Bryn Mawr, PA
              <br />
              <a
                href="mailto:sankalpa.rijal239@gmail.com"
                className="underline"
              >
                sankalpa.rijal239@gmail.com
              </a>
              <br />
              <span className="font-medium">(484) 582-9330</span>
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="https://linkedin.com/in/rijalsankalp"
                target="_blank"
                rel="noopener"
                className="hover:text-blue-600 text-gray-700 dark:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.599 2.001 3.599 4.601v5.595z" />
                </svg>
              </a>
              <a
                href="https://github.com/rijalsankalp"
                target="_blank"
                rel="noopener"
                className="hover:text-blue-600 text-gray-700 dark:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 7.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.339-.012 2.421-.012 2.749 0 .268.18.579.688.481C19.138 20.175 22 16.427 22 12.012 22 6.484 17.523 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 w-full">
            <ul className="flex flex-col gap-4 text-base font-medium text-gray-700 dark:text-gray-300">
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-600 transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="hover:text-blue-600 transition-colors"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-blue-600 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-600 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#publications"
                  className="hover:text-blue-600 transition-colors"
                >
                  Publications
                </a>
              </li>
            </ul>
          </div>
          {/* End Sidebar */}
        </aside>
        {/* Main Content */}
        <main className="flex-1 px-8 py-10">
          <section id="about" className="mb-16">
            <About />
          </section>
          <section id="education" className="mb-16">
            <Education />
          </section>
          <section id="experience" className="mb-16">
            <Experience />
          </section>
          <section id="projects" className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Projects</h2>
            <div className="grid gap-8 sm:grid-cols-2">
              <DepartmentDatabase />
              <ImageCaptionGeneration />
              <Perceparator />
              <HandwrittenDevanagariCharacterRecognition />
              <BrainTumorClassification />
              <FitnessFlow />
              <Slaabur />
              <RanabhoomiAFiremanGame />
              <SnakeAndLadder3D />
            </div>
          </section>
          <section id="publications">
            <Publications />
          </section>
        </main>
      </div>
    </div>
  );
}
