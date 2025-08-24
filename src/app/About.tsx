export default function About() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
        About Me
      </h2>

      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <p>
          I am currently a graduate student in Computer Science at Villanova
          University, pursuing my master&apos;s degree with a focus on AI/ML and
          software development. I also work as a Graduate Assistant in the
          Department of Computing Sciences. My experience includes research and
          model development in NLP, where I have designed, developed, and
          deployed ETL pipelines for large-scale multilingual data, as well as
          reproduced and experimented with various machine learning models, NLP
          tools, and small language models.
        </p>
        <p>
          In addition, I have worked on web development projects using front-end
          technologies such as HTML, CSS, and JavaScript. I also have experience
          in database design — from requirement analysis and ER diagram creation
          to implementing relational schemas and developing application code to
          interact with the database.
        </p>
        <p>
          I enjoy tackling challenges in language processing and analysis. My
          work spans building and deploying machine learning models to designing
          complete web applications that support those systems.
        </p>
        <p>
          Beyond technical skills, I value collaboration, continuous learning,
          and effective communication. I am actively seeking opportunities where
          I can apply my knowledge, grow professionally, and contribute to
          meaningful projects that make a positive impact.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full text-blue-800 dark:text-blue-300 text-sm font-medium">
            Problem Solving
          </div>
          <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full text-blue-800 dark:text-blue-300 text-sm font-medium">
            Machine Learning
          </div>
          <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full text-blue-800 dark:text-blue-300 text-sm font-medium">
            Web Development
          </div>
          <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full text-blue-800 dark:text-blue-300 text-sm font-medium">
            Data Analysis
          </div>
          <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full text-blue-800 dark:text-blue-300 text-sm font-medium">
            Open Source
          </div>
        </div>
      </div>
    </div>
  );
}
