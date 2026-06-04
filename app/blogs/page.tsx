import { BLOG_POSTS } from "./blogs.data"

import styles from "./blogs.module.css";

export default function Blogs() {
  return (
    <main className={styles.container}>
      <div className={styles.containerInner}>
        <section className="space-y-4">
          {BLOG_POSTS.map((post) => (
            <div key={post.href} className={styles.card}>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.description}>{post.description}</p>
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cta}
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
