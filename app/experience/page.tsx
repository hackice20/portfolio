import { EXPERIENCES, type Experience as ExperienceItem } from './experience.data';

const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
  return (
    <div className="p-6 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <h3 className="text-2xl font-semibold">{item.role}</h3>
        <span className="text-sm text-muted-foreground">{item.company}</span>
      </div>
      {item.points?.length > 0 && (
        <ul className="mt-2 text-muted-foreground list-disc pl-5">
          {item.points.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function Experience() {
  return (
    <main className="min-h-screen flex items-start justify-center pt-[114px] md:pt-[98px] p-4 md:p-8 font-mono">
      <div className="max-w-3xl mx-auto w-full space-y-6">
        <section className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">experience</h1>
          <p className="text-muted-foreground">Places I have worked and what I did there.</p>
        </section>

        <section className="space-y-4">
          {EXPERIENCES.map((e) => (
            <ExperienceCard key={e.id} item={e} />
          ))}
        </section>
      </div>
    </main>
  );
}
