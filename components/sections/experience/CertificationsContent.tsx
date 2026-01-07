import { certifications } from "@/data/experience";
import { getAssetPath } from "@/lib/utils";


export function CertificationsContent() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {certifications.map((certificate) => (
        <a
          key={certificate.title}
          href={certificate.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-4xl py-10 bg-neutral-900/50 p-5 transition-all hover:bg-neutral-900/70"
        >
          {/* Image */}
          <div className="flex items-center justify-center h-36">
            <img
              src={getAssetPath(certificate.image)}
              alt={certificate.title}
              className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Title */}
          <h3 className="mt-5 text-center text-base font-medium text-neutral-200">
            {certificate.title}
          </h3>
        </a>
      ))}
    </div>
  );
}
