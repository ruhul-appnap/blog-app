import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Mdx } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import "@/styles/mdx.css";

export default async function Blog({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join("/");
  const post = allBlogs.find((post) => post.slugAsParams === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/blog"
        className={cn("absolute left-[-200px] top-14 hidden xl:inline-flex")}
      >
        See all posts
      </Link>

      <div>
        {post.date && (
          <time
            dateTime={post.date}
            className="block text-sm text-muted-foreground"
          >
            Published on {formatDate(post.date)}
          </time>
        )}
        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
      </div>

      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}

      <Mdx code={post.body.code} />
    </article>
  );
}
