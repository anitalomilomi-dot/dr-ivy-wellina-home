import { createRoot } from "react-dom/client";
import ScentQuizPreview from "../app/new-architecture-preview/ScentQuizPreview";

const root = document.getElementById("scent-quiz-interactive-root");

if (root) {
  createRoot(root).render(<ScentQuizPreview />);
}
