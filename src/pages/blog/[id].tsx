import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "../../components/layout";
import { DateString } from "../../components/date";
import { getAllBlogIds, getBlogFromId, Blog } from "../../lib/blog-fetch";
import Markdown from "markdown-to-jsx";
import styles from "../../scss/pages/blog/markdown.module.scss";

type BlogPostPageProps = {
  post: Blog;
};

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post }) => (
  <Layout pageName={`限界開発鯖 - ブログ - ${post.title}`}>
    <h1 className={styles.title}>{post.title}</h1>
    <DateString dateString={post.date} />
    <div className={styles.markdown}>
      <Markdown>{post.content}</Markdown>
    </div>
  </Layout>
);

type BlogPostPagePathProps = {
  id: string;
};

export const getStaticProps: GetStaticProps<BlogPostPageProps, BlogPostPagePathProps> = async ({
  params,
}) => {
  if (params == null) {
    throw new Error("invalid params");
  }

  const post = await getBlogFromId(params.id);
  return { props: { post } };
};

export const getStaticPaths: GetStaticPaths<BlogPostPagePathProps> = async () => {
  const paths = await getAllBlogIds();
  return { paths, fallback: false };
};

export default BlogPostPage;
