import React from 'react';
import { CmsImageSlot } from './common/CmsImageSlot';
import { siteImageKeyFromBlogSlug } from '../lib/blogSlugToSiteImage';

interface Post {
  slug: string;
  image: {
    src: string;
    alt: string;
  };
  category: string;
  title: string;
  fullContent: string;
}

interface BlogPostProps {
  post: Post;
  content: {
    backToBlog: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post, content }) => {
  const siteKey = siteImageKeyFromBlogSlug(post.slug);

  return (
    <article className="bg-white">
      <header className="relative h-[50vh] min-h-[400px]">
        {siteKey ? (
          <CmsImageSlot
            siteKey={siteKey}
            alt={post.image.alt}
            className="absolute inset-0 w-full h-full object-cover"
            wrapperClassName="absolute inset-0"
          />
        ) : (
          <img src={post.image.src} alt={post.image.alt} className="absolute inset-0 w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-6 z-10">
          <p className="text-lg font-semibold tracking-widest uppercase text-amber-200/95">{post.category}</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mt-4 max-w-4xl">{post.title}</h1>
        </div>
      </header>
      <div className="container mx-auto px-6 max-w-3xl py-12 md:py-20">
        <div
          className="prose lg:prose-xl max-w-none text-stone-700 leading-loose"
          dangerouslySetInnerHTML={{ __html: post.fullContent }}
        />

        <div className="mt-12 text-center">
          <a href="/#blog" className="text-lg font-semibold custom-text hover:underline">
            &larr; {content.backToBlog}
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
