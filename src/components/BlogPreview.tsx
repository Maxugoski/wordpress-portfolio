import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const BlogPreview = () => {
  const posts = [
    {
      title: "Building Scalable Web Applications",
      excerpt: "Learn the key principles and best practices for creating applications that grow with your business.",
      date: "March 15, 2024",
      category: "Development"
    },
    {
      title: "Modern CSS Techniques",
      excerpt: "Explore the latest CSS features that make styling more powerful and maintainable than ever.",
      date: "March 10, 2024",
      category: "Design"
    },
    {
      title: "Performance Optimization Tips",
      excerpt: "Discover practical strategies to make your website load faster and provide better user experience.",
      date: "March 5, 2024",
      category: "Performance"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Latest Articles</h2>
          <Link to="/blog">
            <Button variant="ghost" className="group">
              View all posts
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card 
              key={index}
              className="hover:shadow-elegant transition-all duration-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="text-sm text-primary font-medium mb-2">{post.category}</div>
                <CardTitle className="story-link">
                  <Link to="/blog">{post.title}</Link>
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
  );
};
