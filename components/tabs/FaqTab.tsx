const CREAM = "#DDD5BF";
const OLIVE = "#464719";
const BURGUNDY = "#591e2a";
const GOLD = "#C4A870";

const faqs = [
  {
    question: "Do I have to share a room?",
    answer: "To make room for all of our closest friends and family, each room must accommodate at least two people. We appreciate your understanding and will do our best to ensure comfortable arrangements for everyone.",
  },
  {
    question: "What if I need to cancel my booking?",
    answer: "We understand that life can be unpredictable. If you need to cancel your attendance, please inform us as soon as possible so that we may extend the invitation to others. Your payment covers costs for accommodation and non-event meals.",
  },
  {
    question: "Can I bring a plus one?",
    answer: "Sorry, but we do not allow plus ones. Please check your invite, as all names listed are those individuals who are invited to attend.",
  },
  {
    question: "Can I bring a pet?",
    answer: "Please leave pets at home. Beyul is a wilderness retreat, and we are not able to accommodate guest pets on the property.",
  },
  {
    question: "Why is capacity limited?",
    answer: "We would love to accommodate everyone, but this unique experience has very limited capacity, and we want to ensure that we can fit all our dearest friends and family. We appreciate your understanding.",
  },
  {
    question: "How do I get to the venue?",
    answer: "Beyul Retreat is nestled in the mountains, northeast of Aspen. The closest airport is Aspen/Pitkin County Airport, which is about a one-hour drive from the venue. Another great option is Denver International Airport (DIA), where you might find more affordable direct flights. Although it is a bit more of a drive, around four to four and a half hours, the route is incredibly scenic. We are coordinating carpools with people who live in Colorado so no one, hopefully, has to rent a car for the weekend.",
  },
  {
    question: "How is cell reception and Wi-Fi up there?",
    answer: "Beyul is a mountain retreat designed to offer an escape. There is no cell reception anywhere on the property, and Wi-Fi is available only in the Main Lodge.",
  },
];

export default function FaqTab() {
  return (
    <div style={{ backgroundColor: CREAM, minHeight: "100svh", color: OLIVE }}>
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-24 md:pt-36">
        <p className="font-syne text-sm tracking-[0.25em] uppercase mb-4" style={{ color: GOLD }}>
          Questions
        </p>
        <h2 className="font-heading text-5xl md:text-7xl font-semibold leading-tight mb-8" style={{ color: BURGUNDY }}>
          FAQ
        </h2>
        <p className="font-body text-xl leading-relaxed max-w-2xl mb-12" style={{ opacity: 0.75 }}>
          A few helpful details about the weekend, travel, and staying at Beyul.
        </p>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <section key={faq.question} className="rounded-2xl px-6 py-7 md:px-8" style={{ backgroundColor: "rgba(70,71,25,0.07)", border: "1px solid rgba(70,71,25,0.15)" }}>
              <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-3" style={{ color: BURGUNDY }}>
                {faq.question}
              </h3>
              <p className="font-body text-base md:text-lg leading-relaxed" style={{ opacity: 0.8 }}>
                {faq.answer}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
