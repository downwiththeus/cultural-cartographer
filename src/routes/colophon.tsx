import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const Route = createFileRoute("/colophon")({
  component: Colophon,
  head: () => ({
    meta: [
      { title: "Colophon — The Artifact Index" },
      {
        name: "description",
        content: "What the Artifact Index is, and what it refuses to be.",
      },
    ],
  }),
});

function Colophon() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <section className="relative z-10 mx-auto mt-16 max-w-[820px] px-8">
        <div className="font-mono text-[10px] smallcaps text-oxblood">Colophon</div>
        <h1 className="mt-3 font-display text-6xl leading-[1.02] text-vellum">
          What this is. What it isn't.
        </h1>

        <div className="mt-12 space-y-6 text-lg leading-relaxed text-vellum/90">
          <p>
            The Artifact Index is a <em>live reading of cultural intensity</em>.
            It does not score works, recommend works, or rank works. It
            describes the pressure they generate.
          </p>
          <p>
            We treat criticism as <em>signal archaeology</em>. The data is the
            open record — Reddit threads at three in the morning, Letterboxd
            diaries kept for years, marginalia in academic essays, the half-life
            of a meme. None of that is truth. All of it is evidence of how an
            object is being lived with.
          </p>
          <p>
            A high Obsession reading does not mean the work is good. A low
            Consensus reading does not mean the work is bad. A high Friction
            reading means the gap is open and probably will not close. That is
            information of a different kind than a percentage.
          </p>

          <div className="rule my-10" />

          <h2 className="font-display text-3xl text-vellum">What this is not</h2>
          <ul className="space-y-3 font-display text-lg italic text-vellum-dim">
            <li>— It is not a recommendation engine.</li>
            <li>— It is not a leaderboard.</li>
            <li>— It is not a verdict.</li>
            <li>— It is not certified, fresh, or otherwise approved.</li>
            <li>— It is not “people also liked.”</li>
          </ul>

          <h2 className="mt-12 font-display text-3xl text-vellum">A working principle</h2>
          <p>
            Art is not consumed evenly. Some works become shelters. Some become
            obsessions. Some become religions, wounds, identity systems,
            recurring dreams. Current review systems flatten all of that into
            percentages. We refuse the flattening, and accept the cost: the
            reading here is honest about being a reading.
          </p>

          <div className="rule my-10" />

          <h2 className="font-display text-3xl text-vellum">Method, briefly</h2>
          <p>
            Phase I, currently visible, presents twelve hand-curated artifacts
            with metric vectors set by the editors as a reference set. Phase II
            wires the vectors to live signal — Reddit and niche subreddits,
            Letterboxd diaries and lists, Rotten Tomatoes and Metacritic as
            consensus anchors, TMDb and the Criterion catalog for afterlife
            events. Language models are used only to cluster discourse and
            extract symbols, never to write criticism in the system's own
            voice.
          </p>
          <p>
            The full method document will sit alongside the catalogue when
            Phase II ships. Until then: read the Lexicon. Each axis is a claim
            stated in language. Disagree with the language.
          </p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
