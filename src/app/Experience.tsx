export default function Experience() {
  return (
    <section id="experience">
      <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
      <div className="flex flex-col gap-6">
        {/* Graduate Teaching Assistant */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xl font-bold">
              Graduate Research and Teaching Assistant
            </span>
            <span className="italic text-base text-gray-700 dark:text-gray-300">
              Aug 2025 - present
            </span>
          </div>
          <div className="text-base font-semibold mb-1">
            Villanova University
          </div>
          <div className="mt-2">
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>
                Teaching Assistant for courses: Theory of Computability, and
                Foundations of Data Structure and Algorithms.
              </li>
            </ul>
          </div>
        </div>

        {/* Software Developer */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xl font-bold">Software Developer</span>
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
                Developed and launched 2 interactive course websites for the
                Political Science department, serving as the primary educational
                hub for over 50 students per semester.
              </li>
              <li>
                Led the requirements gathering process for product
                accessibility, structuring stakeholder feedback into a
                prioritized roadmap that guided the implementation of friendly
                navigation and design.
              </li>
              <li>
                Automated all build and deployment processes by implementing
                CI/CD pipelines with GitHub Actions, reducing deployment time
                from 30 minutes to just 2 minutes.
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
                Benchmarked diverse NLP models for role classification,
                architecting and evaluating pipelines from traditional
                (FastText, Logistic Regression) to advanced transformer-based
                approaches (BERT, BART).
              </li>
              <li>
                Engineered feature engineering pipeline using NLP tools,
                applying advanced techniques; dependency parsing and coreference
                resolution to enrich the context of the entity and improve the
                accuracy of the downstream model.
              </li>
              <li>
                Developed and trained dual-language NLP models for English and
                Russian, managing distinct tokenization chal- lenges,
                multilingual datasets, and creating a unified pipeline for
                cross-lingual role classification.
              </li>
              <li>
                Instructed 40+ students in CSC 1300 Discrete Structure by
                leading weekly review sessions, evaluating hundreds of
                assignments. Developed new curriculum materials for Summer
                Python Programming, Intro to DSA, COA and System Architecture
                courses to enhance student learning outcomes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
