import { Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "../../types.d.ts";
import { loadPost } from "../../utils/posts.ts";
import { CSS } from "$gfm/mod.ts";

export const handler: Handlers<Post | null> = {
  async GET(_, ctx) {
    const { id } = ctx.params;
    const post = await loadPost(id);

    return ctx.render(post);
  },
};

export default function PagePost({ data: post }: PageProps<Post | null>) {
  return (
    <article class="p-4">
      <h1 class="text-2xl font-bold">{post?.title}</h1>
      <time>{Intl.DateTimeFormat("es").format(post?.date)}</time>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div
        class="markdown-body"
        dangerouslySetInnerHTML={{ __html: post?.body as string }}
      >
      </div>
    </article>
  );
}
