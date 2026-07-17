import Deck from "./components/Deck.jsx";
import Slide01Title from "./slides/Slide01Title.jsx";
import Slide02Opportunity from "./slides/Slide02Opportunity.jsx";
import Slide03Dashboard from "./slides/Slide03Dashboard.jsx";
import Slide04AgeVerification from "./slides/Slide04AgeVerification.jsx";
import Slide05Closing from "./slides/Slide05Closing.jsx";

const slides = [
  { id: "title", Component: Slide01Title },
  { id: "opportunity", Component: Slide02Opportunity },
  { id: "age-verification", Component: Slide04AgeVerification },
  { id: "dashboard", Component: Slide03Dashboard },
  { id: "closing", Component: Slide05Closing },
];

export default function App() {
  return <Deck slides={slides} />;
}
