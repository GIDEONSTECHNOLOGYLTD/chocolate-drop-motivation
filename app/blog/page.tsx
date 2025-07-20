import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Blog & Resources | Chocolate_drop Motivational Speaker',
  description: 'Articles, tips, and resources on motivation, leadership, and personal development by Chocolate_drop.',
};

export default function Blog() {
  // Mock blog posts
  const blogPosts = [
    {
      id: 1,
      title: '5 Strategies to Build Resilience in Challenging Times',
      excerpt: 'Learn proven techniques to bounce back from setbacks and thrive in the face of adversity.',
      image: '/images/hero-background.jpg',
      date: 'March 15, 2024',
      category: 'Resilience',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Finding Your Purpose: A Guide to Discovering What Drives You',
      excerpt: 'Uncover your unique talents and passions to create a life filled with meaning and fulfillment.',
      image: '/images/hero-background.jpg',
      date: 'February 28, 2024',
      category: 'Personal Growth',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'The Power of Positive Self-Talk: Transforming Your Inner Dialogue',
      excerpt: 'How the way you speak to yourself shapes your reality and practical tips to develop empowering self-talk.',
      image: '/images/hero-background.jpg',
      date: 'February 10, 2024',
      category: 'Mindset',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'Leadership Lessons from Unexpected Places',
      excerpt: 'What everyday experiences can teach us about becoming more effective and inspiring leaders.',
      image: '/images/hero-background.jpg',
      date: 'January 22, 2024',
      category: 'Leadership',
      readTime: '6 min read'
    }
  ];

  return (
    <div className="pt-8 pb-20">
      {/* Hero Section */}
      <section className="relative bg-purple-900 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero-background.jpg"
            alt="Background pattern"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog & Resources</h1>
          <p className="text-xl max-w-3xl mx-auto text-purple-100">
            Insights, tips, and resources to help you grow and thrive in all areas of life.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Featured Article</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/hero-background.jpg"
                alt="Featured post image"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">Motivation</span>
                <span className="text-gray-500 text-sm">April 5, 2024</span>
                <span className="text-gray-500 text-sm">8 min read</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                How to Stay Motivated When Progress Seems Slow
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                In this comprehensive guide, I share practical strategies for maintaining momentum 
                and motivation during those inevitable plateaus in your personal and professional journey.
                Learn how to reframe challenges, celebrate small wins, and keep your eyes on the bigger picture.
              </p>
              <Link href="#">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition duration-300">
                  Read Full Article
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1 duration-300">
                <div className="relative h-60">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">{post.category}</span>
                    <span className="text-gray-500 text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 leading-snug">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                    <Link href="#">
                      <span className="text-purple-600 hover:text-purple-800 font-medium text-sm flex items-center">
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-md font-medium transition duration-300">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Free Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Resource 1 */}
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-8 rounded-lg">
              <div className="mb-6">
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Goal-Setting Workbook</h3>
              <p className="text-gray-700 mb-6">
                A comprehensive 20-page workbook to help you clarify your vision, set meaningful goals, 
                and create an actionable plan to achieve them.
              </p>
              <Link href="#">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition duration-300 flex items-center">
                  Download Free
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                </button>
              </Link>
            </div>
            
            {/* Resource 2 */}
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-8 rounded-lg">
              <div className="mb-6">
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Morning Motivation Audio Series</h3>
              <p className="text-gray-700 mb-6">
                A series of 5 audio meditations (10 minutes each) designed to energize your morning
                and set a positive tone for your day.
              </p>
              <Link href="#">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition duration-300 flex items-center">
                  Access Free Series
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Subscribe to the Newsletter</h2>
              <p className="text-lg text-purple-200 mb-6">
                Get weekly motivation, exclusive content, and early access to new resources
                delivered straight to your inbox.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Weekly motivational insights
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Exclusive subscriber-only content
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Early access to new resources
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Enter your email"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md font-medium transition duration-300"
                >
                  Subscribe Now
                </button>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
