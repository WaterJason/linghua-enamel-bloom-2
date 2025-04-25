
import MainLayout from "@/components/Layout/MainLayout";
import { Link } from "react-router-dom";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  image: string;
}

const News = () => {
  const newsItems: NewsItem[] = [
    {
      id: "news-1",
      title: "聆花文化携手苏州博物馆推出限量掐丝珐琅文创",
      date: "2024-04-10",
      category: "品牌动态",
      summary: "聆花文化与苏州博物馆合作，以馆藏《十二月花神图》为灵感，推出限量掐丝珐琅文创系列，融合江南美学与非遗技艺。",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-2",
      title: "聆花创始人邓汕受邀出席国际工艺美术论坛",
      date: "2024-03-21",
      category: "媒体报道",
      summary: "聆花创始人邓汕女士受邀参加在巴黎举办的国际工艺美术论坛，分享中国非物质文化遗产的创新实践与全球化发展。",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-3",
      title: "【工艺解读】掐丝珐琅的天然矿物釉料之美",
      date: "2024-02-15",
      category: "工艺解读",
      summary: "探索传统掐丝珐琅工艺中使用的天然矿物釉料，了解不同矿物如何呈现出丰富多变的色彩表现与视觉效果。",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-4",
      title: "聆花掐丝珐琅艺术展即将在深圳南头古城开幕",
      date: "2024-01-25",
      category: "展览活动",
      summary: "「光华流转——聆花掐丝珐琅艺术展」将于2024年2月1日至3月15日在深圳南头古城西集景之蓝空间展出。",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = [...new Set(newsItems.map(item => item.category))];

  return (
    <MainLayout>
      <section className="pt-20 pb-16 bg-beige-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 opacity-0 animate-fade-in">
              资讯
              <span className="block text-xl font-garamond mt-2 text-beige-600">News</span>
            </h1>
            <p className="text-lg text-beige-700 mb-8 opacity-0 animate-fade-in-delayed">
              传承之声
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Sidebar with categories */}
            <div className="w-full md:w-1/4">
              <div className="sticky top-24">
                <h3 className="text-lg mb-4 font-medium">资讯分类</h3>
                <ul className="space-y-2">
                  <li>
                    <button className="text-beige-800 hover:text-seal-600 font-medium">全部分类</button>
                  </li>
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="text-beige-600 hover:text-seal-600">{category}</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* News list */}
            <div className="w-full md:w-3/4">
              <div className="grid gap-8">
                {newsItems.map((item, index) => (
                  <Link 
                    to={`/news/${item.id}`} 
                    key={item.id}
                    className="group bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 md:col-span-2">
                        <span className="text-sm text-seal-600 mb-2 inline-block">{item.category}</span>
                        <h3 className="text-xl mb-2 group-hover:text-seal-600 transition-colors">{item.title}</h3>
                        <p className="text-beige-700 mb-4 line-clamp-2">{item.summary}</p>
                        <time className="text-sm text-beige-500">{item.date}</time>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default News;
