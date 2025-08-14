export default function Experience() {
  return (
    <section id="experience">
      <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
      <div className="flex flex-col gap-6">
        {/* Software Developer */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xl font-bold">Web Developer</span>
            <span className="italic text-base text-gray-700 dark:text-gray-300">
              July 2025 - August 2025
            </span>
          </div>
          <div className="text-base font-semibold italic mb-1">
            VITAL Minigrant Research Assistant
          </div>
          <div className="text-base font-semibold mb-1">
            Villanova University
          </div>
          <div className="mt-2">
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>
                Developed and maintained website for the courses:{" "}
                <i>
                  <a
                    href="https://github.com/rweldzius/data-science-site"
                    className="text-blue-500 hover:underline"
                  >
                    Intro to Data Science,
                  </a>
                </i>{" "}
                and{" "}
                <i>
                  <a
                    href="https://github.com/rweldzius/quant-social-science"
                    className="text-blue-500 hover:underline"
                  >
                    Quantitative Social Science
                  </a>
                </i>{" "}
                for Department of Political Science, Villanova University.
              </li>
              <li>
                Collaborated with faculty to integrate multimedia elements into
                course websites, enhancing user experience, and accessibility.
              </li>
              <li>
                Developed deployment pipelines using GitHub Actions to automate
                deployment processes for course websites.
              </li>
            </ul>
          </div>
        </div>

        {/* Graduate Assistant Summer */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xl font-bold">Summer Graduate Assistant</span>
            <span className="italic text-base text-gray-700 dark:text-gray-300">
              May 2025 - August 2025
            </span>
          </div>
          <div className="text-base font-semibold mb-1">
            Villanova University
          </div>
          <div className="mt-2">
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>
                Prepared core teaching materials for courses:{" "}
                <i>
                  Python Programming, Data Structures & Algorithms, Computer
                  Organization & Architecture
                </i>{" "}
                including coding exercises, and assessments.
              </li>
              <li>
                Conducted and managed office hours, providing support to the
                department and ensuring smooth course pro- gression.
              </li>
            </ul>
          </div>
        </div>

        {/* GA Aug 2024 to May 2025 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xl font-bold">
              Graduate Research and Teaching Assistant
            </span>
            <span className="italic text-base text-gray-700 dark:text-gray-300">
              Aug 2024 - May 2025
            </span>
          </div>
          <div className="text-base font-semibold mb-1">
            Villanova University
          </div>
          <div className="mt-2">
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>
                Investigated the application of ML and LLMs to extract
                contextual insights from large-scale, multilingual textual
                datasets.
              </li>
              <li>
                Designed and implemented scalable data pipelines for the
                collection, cleansing, and preprocessing of unstructured text to
                support reproducible research.
              </li>
              <li>
                Analyzed and visualized feature distributions (Seaborn,
                Matplotlib) to inform hypothesis generation and refined data
                labeling protocols.
              </li>
              <li>
                Served as a Teaching Assistant for CSC 1300: Discrete
                Structures, mentoring students on foundational concepts in logic
                and mathematics.
              </li>
              <li>
                Assistant for CSC 1300: Discrete Structures, mentoring students
                on foundational concepts in logic and mathematics.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
