import Link from 'next/link';
import { usePosts } from '../hooks/useApi';

export default function PostList() {
  const { data: posts, isLoading } = usePosts();

  if (isLoading) return <div>Loading posts...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      
      <div className="space-y-4">
        {posts.map(post => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition cursor-pointer">
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-gray-600 line-clamp-2">{post.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}