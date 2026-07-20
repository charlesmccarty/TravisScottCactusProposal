import Deck from "./components/Deck.jsx";
import Slide01Title from "./slides/Slide01Title.jsx";
import Slide06OurWork from "./slides/Slide06OurWork.jsx";
import Slide02Opportunity from "./slides/Slide02Opportunity.jsx";
import Slide03Dashboard from "./slides/Slide03Dashboard.jsx";
import Slide04AgeVerification from "./slides/Slide04AgeVerification.jsx";
import Slide05Closing from "./slides/Slide05Closing.jsx";
import Slide07Machine from "./slides/Slide07Machine.jsx";

const slides = [
  { id: "title", Component: Slide01Title },
  { id: "our-work", Component: Slide06OurWork },
  { id: "opportunity", Component: Slide02Opportunity },
  { id: "age-verification", Component: Slide04AgeVerification },
  { id: "dashboard", Component: Slide03Dashboard },
  { id: "closing", Component: Slide05Closing },
  { id: "machine", Component: Slide07Machine },
];

export default function App() {
  return <Deck slides={slides} />;
}
