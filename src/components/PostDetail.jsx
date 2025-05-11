import { usePost, useComments } from '../hooks/useApi';
import { useRouter } from 'next/router';

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const { data: post, isLoading: postLoading } = usePost(id);
  const { data: comments, isLoading: commentsLoading } = useComments(id);

  if (postLoading || commentsLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Post Details</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-600">{post.body}</p>
        </div>
        
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Comments</h2>
          {comments.map(comment => (
            <div key={comment.id} className="mb-4 pb-4 border-b">
              <h3 className="font-semibold">{comment.name}</h3>
              <p className="text-gray-600 text-sm">{comment.email}</p>
              <p className="mt-2">{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}