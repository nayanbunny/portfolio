import { experiences } from "@/data/experience";


export function WorkContent() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {experiences.map((experience) => (
        <div 
          key={experience.title} 
          className="flex flex-col group rounded-4xl px-10 py-5 pb-10 bg-neutral-900/50 transition-all hover:bg-neutral-900/70"
        >
          <div className="flex flex-row justify-start items-center">
            <span className="mt-5 mr-3">{experience.icon}</span>
            {/* Title */}
            <h3 className="mt-5 text-center text-base font-semibold font-headings text-neutral-200">
              {experience.title}
            </h3>
          </div>
          <ul className="mt-4 space-y-2">
            {experience.description_items.map((item, index) => (
              <li key={index} className="text-base text-neutral-400 list-disc list-inside">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
