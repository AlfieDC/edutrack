import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">EduTrack</Link>
        <div className="flex space-x-4">
          <Link href="/users" className="hover:underline">Users</Link>
          <Link href="/posts" className="hover:underline">Posts</Link>
        </div>
      </div>
    </nav>
  );
}