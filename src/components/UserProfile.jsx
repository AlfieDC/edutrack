import { useUser, usePosts } from '../hooks/useApi';
import { useRouter } from 'next/router';

export default function UserProfile() {
  const router = useRouter();
  const { id } = router.query;
  
  const { data: user, isLoading: userLoading } = useUser(id);
  const { data: posts, isLoading: postsLoading } = usePosts();

  if (userLoading || postsLoading) return <div>Loading...</div>;

  const userPosts = posts.filter(post => post.userId === parseInt(id));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">{user.name}'s Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">User Information</h2>
          <p><span className="font-semibold">Username:</span> @{user.username}</p>
          <p><span className="font-semibold">Email:</span> {user.email}</p>
          <p><span className="font-semibold">Phone:</span> {user.phone}</p>
          <p><span className="font-semibold">Website:</span> {user.website}</p>
          
          <h3 className="text-lg font-semibold mt-4">Address</h3>
          <p>{user.address.street}, {user.address.suite}</p>
          <p>{user.address.city}, {user.address.zipcode}</p>
          
          <div className="mt-4 h-48 bg-gray-200 rounded">
            {/* Google Map would go here */}
            <p className="text-center pt-20">Google Map Embed</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Posts</h2>
          {userPosts.map(post => (
            <div key={post.id} className="mb-4 pb-4 border-b">
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-gray-600">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}