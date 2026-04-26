import Image from "next/image";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Header() {
  return (
    <section className="py-6 md:py-10 flex flex-col sm:flex-row items-center sm:items-start">
      <Image
        src="/images/sjoerd.jpg"
        width={160}
        height={160}
        className="h-32 md:h-40 w-auto mb-4 sm:mb-0 object-cover"
        alt="Sjoerd Vink"
        priority
      />
      <div className="flex flex-col sm:ml-4 text-center sm:text-left">
        <h1 className="text-3xl md:text-4xl font-light">Sjoerd Vink</h1>
        <span className="font-light">
          PhD Student in CS at Utrecht University
        </span>
        <span className="font-light">sjoerdvink@icloud.com</span>
        <div className="mt-3 flex justify-center sm:justify-start">
          <a
            href="https://github.com/sjoerdvink99"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`${base}/images/icons/github.svg`}
              className="mr-1 hover:-translate-y-1 transition-all duration-150 ease-in-out"
              alt="GitHub profile"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sjoerdvink/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`${base}/images/icons/linkedin.svg`}
              className="mr-1 hover:-translate-y-1 transition-all duration-150 ease-in-out"
              alt="LinkedIn profile"
            />
          </a>
          <a
            href="https://sjoerdvink.medium.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`${base}/images/icons/medium.svg`}
              className="mr-1 hover:-translate-y-1 transition-all duration-150 ease-in-out"
              alt="Medium"
            />
          </a>
          <a
            href="mailto:sjoerdvink@icloud.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`${base}/images/icons/mail.svg`}
              className="hover:-translate-y-1 transition-all duration-150 ease-in-out"
              alt="Email"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
