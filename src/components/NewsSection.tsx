import { news } from "@/data/news";

export default function NewsSection() {
  return (
    <section id="news" className="py-10 border-b-2">
      <h2 className="text-2xl mb-6">News</h2>
      <div className="space-y-6">
        {news.map((item, index) => (
          <div key={index} className="border-l-4 border-gray-300 pl-4">
            <p className="text-sm text-gray-500">{item.date}</p>
            <p className="text-base text-gray-800">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
