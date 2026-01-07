import { recognitions } from "@/data/experience";


export function RecognitionsContent() {
  return (
    <div className="grid grid-cols-1 sm:lg-grid-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
    {recognitions.map((recognition) => (
      <div
        key={recognition.title}
        className="group rounded-4xl cursor-default bg-neutral-900/50 p-6 transition-all hover:bg-neutral-900/70"
      >
        <div className="flex items-center justify-around gap-4">
          {/* LEFT : Title */}
          <h3 className="text-base sm:text-lg font-medium text-neutral-200">
            {recognition.title}
          </h3>

          {/* RIGHT : Image / Icon */}
          <span className="text-3xl sm:text-4xl shrink-0">
            {recognition.image}
          </span>
        </div>
      </div>
    ))}
    </div>
  );
}

