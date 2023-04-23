import { Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "../types.d.ts";
import { listPosts } from "../utils/posts.ts";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await listPosts();

    return ctx.render(posts);
  },
};

export default function Home({ data: posts }: PageProps<Post[]>) {
  return (
    <main class="m-4">
      <h1 class="text-4xl font-bold">Mi blog</h1>
      {posts.map((post: Post) => (
        <article class="p-4">
          <h2 class="text-2xl font-bold">
            <a class="hover:text-blue-600" href={`/blog/${post.id}`}>
              {post.title}
            </a>
          </h2>
          <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
        </article>
      ))}
    </main>
  );
}
