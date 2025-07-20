import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { blogPosts } from '../../data/mockData';
import NewsletterSignup from '../../components/shared/NewsletterSignup';

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }
  
  return {
    title: `${post.title} | Chocolate_drop Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

// Generate static routes at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// @ts-ignore - Next.js TypeScript issue with params typing
export default function BlogPostPage({ params }: any) {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  // If post doesn't exist, return 404
  if (!post) {
    notFound();
  }
  
  return (
    <>
      {/* Blog Post Header */}
      <header className="relative bg-gray-900 text-white pt-20 pb-10">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="mb-6 flex items-center text-purple-200">
            <Link href="/blog" className="flex items-center hover:text-white transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Blog
            </Link>
          </div>
          <div className="space-y-2 mb-8">
            <div className="flex flex-wrap gap-4">
              <span className="bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-purple-200 text-sm font-medium">
                {post.date} • {post.readTime}
              </span>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            {post.excerpt}
          </p>
        </div>
      </header>
      
      {/* Blog Post Content */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* Blog post content - this would normally come from a CMS */}
          <div className="prose prose-lg max-w-none">
            <p>
              In today&apos;s fast-paced world, the ability to adapt, overcome challenges, and maintain a 
              positive outlook is more important than ever. This article explores practical strategies 
              for developing these essential skills.
            </p>
            <h2>Understanding the Challenge</h2>
            <p>
              We all face obstacles in our personal and professional lives. What sets successful people 
              apart isn&apos;t the absence of challenges, but rather how they respond to them.
            </p>
            <p>
              Research shows that resilience isn&apos;t just an innate quality—it&apos;s a skill that can be 
              developed and strengthened over time. By adopting specific mindsets and practices, 
              anyone can build their capacity to bounce back from setbacks.
            </p>
            <h2>Key Strategies for Growth</h2>
            <p>
              Here are five evidence-based approaches that can help you develop unshakeable resilience:
            </p>
            <ol>
              <li>
                <strong>Cultivate a growth mindset</strong>: View challenges as opportunities to learn 
                and grow rather than as threats or reflections of your worth.
              </li>
              <li>
                <strong>Build strong support networks</strong>: Surround yourself with people who 
                believe in you and can provide emotional support during difficult times.
              </li>
              <li>
                <strong>Practice mindfulness and presence</strong>: Develop the ability to stay 
                present and manage emotional reactions during stressful situations.
              </li>
              <li>
                <strong>Focus on what you can control</strong>: Identify aspects of your situation 
                that you can influence and direct your energy there.
              </li>
              <li>
                <strong>Develop personal wellness rituals</strong>: Establish daily practices that 
                support your physical and mental health.
              </li>
            </ol>
            <p>
              Implementing these strategies consistently can transform how you experience and respond 
              to life&apos;s challenges. Remember, resilience isn&apos;t about avoiding difficulties—it&apos;s 
              about developing the inner resources to face them with confidence and grace.
            </p>
            <blockquote>
              &quot;The oak fought the wind and was broken, the willow bent when it must and survived.&quot;
              – Robert Jordan
            </blockquote>
            <h2>Moving Forward</h2>
            <p>
              As you work to strengthen your resilience, be patient with yourself. Like any meaningful 
              skill, developing resilience takes time and practice. Celebrate small victories along 
              the way and remember that setbacks are often the foundation for your greatest growth.
            </p>
            <p>
              In my own journey, I&apos;ve found that the most challenging experiences ultimately 
              became my greatest teachers. I invite you to share your own resilience stories 
              and strategies in the comments below.
            </p>
          </div>
          
          {/* Author section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-6">
                <Image 
                  src="/images/speaker-profile.jpg" 
                  alt="Chocolate_drop" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">Chocolate_drop</h3>
                <p className="text-gray-600">
                  Professional motivational speaker and author specializing in resilience, personal growth, and leadership development.
                </p>
              </div>
            </div>
          </div>
          
          {/* Social share buttons */}
          <div className="mt-8 flex items-center">
            <span className="mr-4 text-gray-600 font-medium">Share this article:</span>
            <div className="flex space-x-3">
              <button className="text-blue-600 hover:text-blue-800">
                <span className="sr-only">Share on Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
              <button className="text-blue-800 hover:text-blue-900">
                <span className="sr-only">Share on Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="text-blue-500 hover:text-blue-700">
                <span className="sr-only">Share on LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related posts */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">You May Also Like</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts
              .filter(relatedPost => relatedPost.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link 
                  href={`/blog/${relatedPost.slug}`} 
                  key={relatedPost.id} 
                  className="group"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="relative h-48 w-full">
                      <Image 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3 text-sm">
                        <span className="text-purple-600 font-medium">{relatedPost.category}</span>
                        <span className="text-gray-500">{relatedPost.readTime}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-purple-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <NewsletterSignup 
        title="Get More Insights" 
        subtitle="Join my newsletter for exclusive content on motivation, leadership, and personal growth"
      />
    </>
  );
}
