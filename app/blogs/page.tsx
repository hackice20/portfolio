import { BLOG_POSTS } from "./blogs.data"

import { blogsClasses as classes } from "./blogs.styles";

export default function Blogs() {
  return (
    <main className={classes.container}>
      <div className={classes.containerInner}>
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
