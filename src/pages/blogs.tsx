import { motion } from "framer-motion";

import { Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Marketing in 2025",
    description:
      "Explore the latest trends and strategies that will shape the digital marketing landscape in the coming year.",
    image: "./Core industries section/tile 1.png",
    date: "January 15, 2025",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "How AI is Transforming Business Operations",
    description:
      "Discover how artificial intelligence is revolutionizing the way businesses operate and compete in the modern market.",
    image: "./Core industries section/tile 2.png",
    date: "January 12, 2025",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Building a Strong Brand Identity",
    description:
      "Learn the essential steps to create a memorable brand that resonates with your target audience.",
    image: "./Core industries section/tile 3.png",
    date: "January 10, 2025",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "The Rise of Sustainable Business Practices",
    description:
      "Understanding why sustainability is no longer optional but essential for modern businesses.",
    image: "./Core industries section/tile 1.png",
    date: "January 8, 2025",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Data-Driven Decision Making",
    description:
      "How to leverage analytics and insights to make better business decisions and drive growth.",
    image: "./Core industries section/tile 2.png",
    date: "January 5, 2025",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "Customer Experience in the Digital Age",
    description:
      "Strategies for creating exceptional customer experiences that build loyalty and drive retention.",
    image: "./Core industries section/tile 3.png",
    date: "January 3, 2025",
    readTime: "5 min read",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background pt-24 sm:pt-28 lg:pt-32">
      <main className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-light text-foreground mb-4 sm:mb-6 leading-tight">
            Our Blog
          </h1>
          <p className="text-foreground/80 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            Insights, stories, and expert advice to help you grow your business
            and stay ahead in the digital world.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-border/50 transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-grow">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl lg:text-[28px] font-light text-foreground mb-3 sm:mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
                    {post.description}
                  </p>

                  {/* Read More Link */}
                  <div className="mt-4 sm:mt-5">
                    <span className="text-sm sm:text-base text-primary font-medium group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
