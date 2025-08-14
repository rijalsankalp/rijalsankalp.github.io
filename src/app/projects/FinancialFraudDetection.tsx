export default function FinancialFraudDetection() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 rounded-2xl shadow-lg p-6 flex flex-col gap-3 border border-blue-200 dark:border-gray-700">
      <div className="flex items-center gap-2 mb-1">
        <h3 className="font-bold text-lg">
          Financial Fraud Detection Using Apache Spark
        </h3>
        <a
          href="https://github.com/rijalsankalp/FinancialFraudDetection-UsingApacheSpark"
          target="_blank"
          rel="noopener"
          className="ml-1"
          aria-label="GitHub Repository"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
          >
            <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 7.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.339-.012 2.421-.012 2.749 0 .268.18.579.688.481C19.138 20.175 22 16.427 22 12.012 22 6.484 17.523 2 12 2z" />
          </svg>
        </a>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Jupyter Notebook | Python | Apache Spark | Spark Streaming | Machine
        Learning
      </p>
      <p className="text-sm">
        Developed a real-time financial fraud detection system leveraging Apache
        Spark and Spark Streaming to process large-scale transaction data.
        Integrated machine learning models for anomaly detection, feature
        engineering, and pattern recognition. Includes scalable data pipelines,
        distributed computation, and visualization of fraud analytics.
      </p>
    </div>
  );
}
