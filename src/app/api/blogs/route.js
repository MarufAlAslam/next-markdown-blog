import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  const blogsDir = path.join(process.cwd(), 'public', 'blogs');
  const files = fs.readdirSync(blogsDir).filter(file => file.endsWith('.md'));

  const blogs = files.map((filename, idx) => {
    const filePath = path.join(blogsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    const stats = fs.statSync(filePath);
    return {
      id: idx,
      title: data.title || filename.replace('.md', ''),
      slug: filename.replace('.md', ''),
      ...data,
      excerpt: content.slice(0, 200) + (content.length > 200 ? '...' : ''),
      content, // full markdown content
      uploadDate: stats.birthtime,
    };
  });

  return Response.json(blogs);
}
