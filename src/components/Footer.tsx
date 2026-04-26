export default function Footer() {
  return (
    <footer className="py-4 text-center text-xs text-gray-400">
      <p>
        © {new Date().getFullYear()} Sjoerd Vink · Design inspiration from{" "}
        <a
          href="https://faculty.washington.edu/msaveski/"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-gray-500 transition"
        >
          Martin Saveski
        </a>
      </p>
    </footer>
  );
}
