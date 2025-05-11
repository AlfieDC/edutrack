import Link from 'next/link';
import { useUsers } from '../hooks/useApi';

export default function UserList() {
  const { data: users, isLoading } = useUsers();

  if (isLoading) return <div>Loading users...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">User Listing</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition cursor-pointer">
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-gray-600">@{user.username}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}