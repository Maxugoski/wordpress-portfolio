import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Building Scalable Web Applications",
      excerpt: "Learn the key principles and best practices for creating applications that grow with your business. From architecture to deployment strategies.",
      date: "March 15, 2024",
      category: "Development",
      readTime: "8 min read"
    },
    {
      title: "Modern CSS Techniques for 2024",
      excerpt: "Explore the latest CSS features that make styling more powerful and maintainable. Container queries, cascade layers, and more.",
      date: "March 10, 2024",
      category: "Design",
      readTime: "6 min read"
    },
    {
      title: "Performance Optimization Tips",
      excerpt: "Discover practical strategies to make your website load faster and provide better user experience. Real-world examples included.",
      date: "March 5, 2024",
      category: "Performance",
      readTime: "10 min read"
    },
    {
      title: "Understanding React Server Components",
      excerpt: "A deep dive into React's new server components architecture and how it changes the way we build applications.",
      date: "February 28, 2024",
      category: "Development",
      readTime: "12 min read"
    },
    {
      title: "Accessibility Best Practices",
      excerpt: "Making the web accessible to everyone. Practical tips for creating inclusive digital experiences.",
      date: "February 20, 2024",
      category: "Accessibility",
      readTime: "7 min read"
    },
    {
      title: "TypeScript Tips and Tricks",
      excerpt: "Advanced TypeScript patterns that will make your code more type-safe and maintainable.",
      date: "February 15, 2024",
      category: "Development",
      readTime: "9 min read"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Thoughts, tutorials, and insights about web development, design, and technology.
            </p>
            
            <div className="relative max-w-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10"
              />
            </div>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-elegant transition-all duration-300 hover-scale cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="story-link">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <time className="text-sm text-muted-foreground">{post.date}</time>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
