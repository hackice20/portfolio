import { BLOG_POSTS } from "./blogs.data"

const classes = {
  container: "h-screen flex items-start justify-center pt-[114px] md:pt-[98px] p-4 md:p-8 font-mono",
  card: "p-4 md:p-6 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200",
  title: "text-xl md:text-2xl font-semibold mb-3 md:mb-4",
  description: "text-sm md:text-base mb-3 md:mb-4",
  cta: "px-3 md:px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors duration-200 text-sm md:text-base font-medium",
}

export default function Blogs() {
  return (
    <main className={classes.container}>
      <div className="max-w-3xl mx-auto w-full">
        <section className="space-y-4">
          {BLOG_POSTS.map((post) => (
            <div key={post.href} className={classes.card}>
              <h3 className={classes.title}>{post.title}</h3>
              <p className={classes.description}>{post.description}</p>
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.cta}
              >
                {post.cta}
              </a>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
