import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Publications() {
  return (
    <section id="publications">
      <h2 className="text-2xl font-semibold mb-6">Publications</h2>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <p className="text-sm flex items-center gap-2">
          S. Rijal, R. Neupane, S. P. Mainali, S. K. Regmi, and S. Maharjan,
          &ldquo;Monaural Multi-Speaker Speech Separation Using Efficient
          Transformer Model,&rdquo; In Proc. International Conference on
          Technologies for Computer, Electrical, Electronics & Communication,
          2023, pp. 41-45.
          <a
            href="https://ictceel.khwopaconference.com/uploads/conferencepaper/fullpaper/1044.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View publication PDF"
            className="inline-block text-blue-600 hover:text-blue-800 ml-1"
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-base align-middle"
            />
          </a>
        </p>
      </div>
    </section>
  );
}
