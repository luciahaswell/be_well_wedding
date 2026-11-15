const CREAM    = "#DDD5BF";
const OLIVE    = "#464719";
const BURGUNDY = "#591e2a";
const GOLD     = "#C4A870";
const SAGE     = "#7A8A42";

const chapters = [
  {
    year: "The beginning",
    title: "A little bit of plotting",
    text: [
      "Lucia and Etienne met at the Pi Beta Phi house in 2019, where Etienne worked in the kitchen and Lucia lived. Etienne planned a night out with mutual friends, with one very specific plan: to court Lucia.",
      "He spent the whole night putting straws in her hair at the bar and somehow, against all odds, charmed her.",
    ],
    photos: [
      { src: "/about_us/IMG_4134.jpg", alt: "Lucia and Etienne at a UCF tailgate", date: "UCF · 2019" },
    ],
  },
  {
    year: "2020",
    title: "Finding each other again",
    text: [
      "They kept in touch after meeting, but neither of them understood yet what it might become. Then, in March 2020, COVID brought their paths back together. When Lucia had to move out of the sorority house, they met up in Orlando and started to realize this could be something real.",
      "Etienne was living in Orlando while Lucia was in the Keys, so they drove back and forth to see each other whenever they could. The distance made the choice feel clear: this was worth showing up for.",
    ],
    photos: [
      { src: "/about_us/pict0175.jpg", alt: "Lucia and Etienne in Orlando", date: "Orlando · December 2020" },
      { src: "/about_us/IMG_8913.jpg", alt: "Lucia and Etienne in the Keys", date: "The Keys · May 2021" },
    ],
  },
  {
    year: "July 2021",
    title: "A new life out west",
    text: [
      "A year later, they moved to Colorado together in search of new opportunities and a new kind of everyday life. Colorado quickly became home.",
    ],
    photos: [{ src: "/about_us/IMG_9354.jpg", alt: "Moving to Colorado", date: "Colorado · July 2021" }],
  },
  {
    year: "September 2021",
    title: "Finding our rhythm",
    text: [
      "The first few months in Denver were about learning a new city and building a life from scratch. We fell in love with the Denver music scene, and trips to Red Rocks and Mission Ballroom quickly became our way of making friends and enjoying weekends in Colorado.",
    ],
    photos: [{ src: "/about_us/IMG_0724.jpg", alt: "Lucia and Etienne at a Denver concert", date: "Denver · September 2021" }],
  },
  {
    year: "October 2021",
    title: "Our first Colorado fall",
    text: [
      "By fall, Colorado was beginning to feel less like a move and more like home. We settled into the season and into our new everyday life together.",
    ],
    photos: [{ src: "/about_us/IMG_1379.jpg", alt: "Lucia and Etienne in Denver in the fall", date: "Denver · October 2021" }],
  },
  {
    year: "April 2022",
    title: "Meet Aragorn",
    text: [
      "Then Aragorn arrived and made our Colorado life considerably more adventurous. He was our first dog and quickly became part of every plan.",
    ],
    photos: [{ src: "/about_us/IMG_3715.jpg", alt: "Aragorn adoption day", date: "Aragorn · April 2022" }],
  },
  {
    year: "June 2022",
    title: "Into the mountains",
    text: [
      "We started exploring the landscape around us, finding hikes, waterfalls, and the kind of views that make moving across the country feel like a very good idea.",
    ],
    photos: [{ src: "/about_us/IMG_5889.jpg", alt: "Lucia and Etienne hiking in Colorado", date: "Colorado · June 2022" }],
  },
  {
    year: "July–September 2022",
    title: "Good music, good people",
    text: [
      "That summer brought Bonnaroo and more Denver nights. We were finding our people, our favorite places, and the shape of this new life.",
    ],
    photos: [
      { src: "/about_us/39043613.jpg", alt: "Lucia and Etienne at Bonnaroo", date: "Bonnaroo · July 2022" },
      { src: "/about_us/39043591.jpg", alt: "Lucia and Etienne at a Denver concert", date: "Denver · September 2022" },
    ],
  },
  {
    year: "August 2023",
    title: "Our people",
    text: [
      "Colorado became home not just to us, but to the friends who made the new place feel like ours. There were weekends by the water, camping trips, and plenty of reasons to stay awhile.",
    ],
    photos: [
      { src: "/about_us/IMG_4943.jpg", alt: "Camping with friends in Colorado", date: "Colorado · August 2023" },
    ],
  },
  {
    year: "Over the years",
    title: "Travelling together",
    text: [
      "Travelling is one of our favorite hobbies, and we’ve gone on a lot of trips together over the years. From city streets to mountain trails, we love finding somewhere new and making a story out of it.",
    ],
    photos: [
      { src: "/about_us/IMG_0076.jpg", alt: "Lucia and Etienne in Paris", date: "Paris · September 2024" },
      { src: "/about_us/BECE5DE3-A8C2-4D7B-B0C5-2520ACA4E547-58415-00002D9A633F9CD1.jpg", alt: "Lucia and Etienne in Switzerland", date: "Switzerland · October 2024" },
    ],
  },
  {
    year: "April 2025",
    title: "Go bro",
    text: [
      "On the Ha Giang Loop in Vietnam, Etienne was trying to convince the tour guide to ride next to Lucia’s guide on the motorbike tour. The guide didn’t speak English — or chose to ignore him — and took them to a scenic outlook instead.",
      "Etienne had also forgotten to bring a lock for his hostel bag, which contained the engagement ring. He kept slipping the bag into Lucia’s hostel locker instead, repeatedly risking that she would find it.",
      "That morning they had been swimming in caves, so when Lucia spotted a stray dog and stopped to pet it at the scenic overlook, she was wearing soaking-wet clothes and her bike helmet. Etienne realized it was the perfect opportunity, got down on one knee behind her, and proposed.",
      "On the way, the guide had picked some flowers and handed them to Etienne. Then he gave Etienne the only advice he needed: “Go bro.” The mountains, the flowers, the stray dog, and one very persuasive tour guide became part of the story.",
    ],
    photos: [
      { src: "/about_us/IMG_4090.jpg", alt: "Lucia and Etienne with flowers in Ha Giang", date: "Ha Giang · April 2025" },
      { src: "/about_us/IMG_4020.jpg", alt: "Etienne proposing in Vietnam", date: "The proposal · April 2025" },
    ],
  },
  {
    year: "October 2026",
    title: "Meet Baker",
    text: [
      "And then Baker joined the family. Two dogs, one very full house, and still more stories to come.",
    ],
    photos: [{ src: "/about_us/IMG_5220.jpg", alt: "Baker adoption day", date: "Baker · October 2026" }],
  },
];

const travelGroups = [
  {
    label: "Across the United States",
    places: "Austin, Texas · New York City · Chicago · North Carolina · Tennessee · Milwaukee · Albuquerque · Elijay, Georgia · Los Angeles · San Francisco · the Colorado sand dunes",
  },
  {
    label: "Europe",
    places: "Paris · Ledbury · London · Birmingham · Rome · Peschici · Bologna · Verona · Polignano a Mare · Strasbourg · Munich · Murren · Zurich · Dublin · Mallorca",
  },
  {
    label: "Asia",
    places: "Hanoi · Ninh Binh · Ha Long Bay · Ha Giang · Chiang Mai · Bangkok",
  },
  {
    label: "Mexico & Hawaii",
    places: "Puerto Escondido · Mexico City · Kauai",
  },
];

export default function OurStoryTab() {
  return (
    <div style={{ backgroundColor: CREAM, color: OLIVE }}>
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-24 md:pt-36">
        <p className="font-syne text-xs tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>
          Our Story
        </p>
        <h2 className="font-display text-5xl md:text-7xl leading-tight mb-8" style={{ color: BURGUNDY }}>
          The long way here
        </h2>
        <p className="font-body text-xl leading-relaxed max-w-2xl mb-16" style={{ opacity: 0.75 }}>
          A carefully planned night, two dogs, and a lot of miles between here and there.
        </p>

        <div className="space-y-16">
          {chapters.map((chapter, index) => (
            <article key={chapter.year} className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="order-2 md:order-1">
                {chapter.photos && (
                  <div className="space-y-5">
                    {chapter.photos.map((photo) => (
                      <figure key={photo.src}>
                        <img src={photo.src} alt={photo.alt} className="w-full rounded-xl" />
                        <figcaption className="font-syne text-[9px] tracking-[0.12em] uppercase mt-2" style={{ color: SAGE }}>
                          {photo.date}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </div>
              <div className="order-1 md:order-2 border-l pl-6" style={{ borderColor: "rgba(70,71,25,0.18)" }}>
                <p className="font-syne text-xs tracking-[0.2em] uppercase mb-4" style={{ color: SAGE }}>
                  {chapter.year}
                </p>
                <h3 className="font-heading text-3xl mb-4" style={{ color: BURGUNDY }}>
                  {chapter.title}
                </h3>
                <div className="space-y-4 font-body text-lg leading-relaxed" style={{ opacity: 0.85 }}>
                  {chapter.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-20 pt-12 border-t" style={{ borderColor: "rgba(70,71,25,0.2)" }}>
          <p className="font-syne text-xs tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>
            The long way around
          </p>
          <h3 className="font-display text-4xl md:text-5xl mb-6" style={{ color: BURGUNDY }}>
            Places we&apos;ve gone together
          </h3>
          <p className="font-body text-lg leading-relaxed mb-10" style={{ opacity: 0.75 }}>
            Since moving to Colorado, we&apos;ve collected passports stamps, road-trip snacks, and stories from all over the world.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            {travelGroups.map((group) => (
              <div key={group.label} className="rounded-2xl p-6" style={{ backgroundColor: "rgba(122,138,66,0.12)" }}>
                <p className="font-syne text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: SAGE }}>
                  {group.label}
                </p>
                <p className="font-body leading-relaxed" style={{ opacity: 0.8 }}>
                  {group.places}
                </p>
              </div>
            ))}
          </div>
        </section>


      </div>
    </div>
  );
}
