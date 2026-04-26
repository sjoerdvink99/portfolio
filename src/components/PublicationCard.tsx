import Link from "next/link";
import { Publication } from "@/lib/types";
import { Fragment } from "react";

function highlightName(authors: string) {
  const name = "Sjoerd Vink";
  const parts = authors.split(name);
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && (
        <span className="underline font-semibold">{name}</span>
      )}
    </Fragment>
  ));
}

export default function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <li
      className={`border-l-4 ${
        pub.selected ? "border-blue-500" : "border-gray-300"
      } pl-4`}
    >
      <div className="flex items-center gap-2 flex-wrap">
        <Link
          href={`/publications/${pub.slug}/`}
          className="font-semibold text-lg text-gray-900 hover:underline"
        >
          {pub.title}
        </Link>
        {pub.bestPaperAward && (
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-300 whitespace-nowrap">
            Best Paper Award
          </span>
        )}
      </div>
      <p className="text-sm text-gray-600">{highlightName(pub.authors)}</p>
      <p className="text-sm italic text-gray-500 mb-1">
        {pub.venue}, {pub.year}
      </p>
      <div className="flex space-x-4 text-sm">
        {pub.paperLink !== "#" && (
          <a
            href={pub.paperLink}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Paper
          </a>
        )}
        {pub.codeLink && (
          <a
            href={pub.codeLink}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        )}
        <Link href={`/publications/${pub.slug}/`} className="text-blue-600 hover:underline">
          Details
        </Link>
      </div>
    </li>
  );
}
