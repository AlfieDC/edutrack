import { useUsers, usePosts } from '../hooks/useApi';
import Charts from './Charts';

export default function Dashboard() {
  const { data: users, isLoading: usersLoading } = useUsers();
  const { data: posts, isLoading: postsLoading } = usePosts();

  if (usersLoading || postsLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Total Users</h3>
          <p className="text-3xl">{users.length}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Total Posts</h3>
          <p className="text-3xl">{posts.length}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Total Comments</h3>
          <p className="text-3xl">Coming soon</p>
        </div>
      </div>
      
      <Charts users={users} posts={posts} />
    </div>
  );
}