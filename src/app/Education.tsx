export default function Education() {
  return (
    <section id="education">
      <h2 className="text-2xl font-semibold mb-6">Education</h2>
      <div className="flex flex-col gap-6">
        {/* Villanova University Block */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xl font-bold">
              Master of Science in Computer Science
            </span>
            <span className="italic text-base text-gray-700 dark:text-gray-300">
              Expected May 2026
            </span>
          </div>
          <div className="text-base font-semibold mb-1">
            Villanova University
          </div>
          <div className="mt-2">
            <span className="font-semibold">Relevant Courseworks:</span>
            <span className="italic text-base ml-2">
              Machine Learning, Software Studio, Design and Analysis of
              Algorithms, Database Systems, AI & Data Science in Health
              Informatics
            </span>
          </div>
        </div>

        {/* Tribhuvan University Block */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xl font-bold">
              Bachelor’s in Computer Engineering
            </span>
            <span className="italic text-base text-gray-700 dark:text-gray-300">
              Apr 2023
            </span>
          </div>
          <div className="text-base font-semibold mb-1">
            Tribhuvan University
          </div>
          <div className="mt-2">
            <span className="font-semibold">Relevant Courseworks:</span>
            <span className="italic text-base ml-2">
              Artificial Intelligence, Data Mining, Object Oriented Programming
              and Design, Computer Graphics, Operating Systems, Software
              Engineering, Big Data Technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
