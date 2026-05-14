import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'));
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const { data } = matter(fs.readFileSync(path.join(postsDirectory, fileName), 'utf8'));
    return { slug, ...data };
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory)
    .filter(f => f.endsWith('.md'))
    .map(f => ({ params: { slug: f.replace(/\.md$/, '') } }));
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const { remark }             = await import('remark');
  const { default: remarkHtml } = await import('remark-html');

  const processed = await remark()
    .use(remarkHtml, { sanitize: false })
    .process(content);

  const wordCount  = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return { slug, contentHtml: processed.toString(), readingTime, ...data };
}

export function getPostsByCategory(category) {
  const all = getAllPosts();
  if (category === 'all') return all;
  return all.filter(p => p.category === category);
}

export function getRelatedPosts(currentSlug, category, limit = 3) {
  return getAllPosts()
    .filter(p => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
}
