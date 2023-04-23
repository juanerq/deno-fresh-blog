import { assertEquals } from "$std/testing/asserts.ts";
import { loadPost } from "./posts.ts";

Deno.test("LoadPost() return null if post does not exists", async () => {
  const post = await loadPost("non-exists");

  assertEquals(post, null);
});

Deno.test("LoadPost() returns a post object if post does exists", async () => {
  const postId = "hello-world";
  const post = await loadPost(postId);

  assertEquals(post?.id, postId);
});
