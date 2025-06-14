
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      date: "2024-01-15",
      title: "聆花掐丝珐琅馆盛大开业",
      summary: "全国首家掐丝珐琅主题体验馆在广州岭南印象园正式开业，为游客提供沉浸式非遗体验。",
      category: "品牌动态"
    },
    {
      date: "2024-01-10", 
      title: "与齐白石跨时空合作《荔枝图》荣获金奖",
      summary: "聆花文化创新演绎齐白石经典作品，获得国家工艺美术最高荣誉。",
      category: "获奖作品"
    },
    {
      date: "2024-01-05",
      title: "固釉掐丝珐琅工艺获国家专利认证",
      summary: "聆花独创的固釉工艺正式获得国家知识产权局专利认证，标志着传统工艺的创新突破。",
      category: "技术创新"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-tianqing-800">
            品牌动态 · 传承创新
          </h2>
          <p className="text-lg text-guanyao-700">
            关注聆花最新动态，见证非遗传承与创新之路
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {news.map((item, index) => (
            <article key={index} className="bg-ruyao-50 p-6 rounded-lg hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-2 text-sm text-guanyao-600 mb-3">
                <Calendar className="w-4 h-4" />
                <time>{item.date}</time>
                <span className="px-2 py-1 bg-tianqing-100 text-tianqing-700 rounded text-xs">
                  {item.category}
                </span>
              </div>
              <h3 className="text-lg mb-3 leading-tight text-tianqing-800">{item.title}</h3>
              <p className="text-guanyao-700 text-sm leading-relaxed">{item.summary}</p>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/news"
            className="btn-primary"
          >
            查看更多动态
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
