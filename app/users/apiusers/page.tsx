// app/users/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type User = {
  id: number;
  name: string;
  email: string;
  followers: number;
  isActive: boolean;
    registeredAt: string;
};

export default function ApiUsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <Link href="/users" className="btn btn-soft btn-secondary w-40 border-red-400 mt-4">
        Back to Users
      </Link>
      <br />
      <br />
      <table className="min-w-full bg-none border border-gray-300">
        <thead>
          <tr className="bg-gray-500 text-left">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Followers</th>
            <th className="py-2 px-4 border-b">Is Active</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="hover:bg-orange-500">
              <td className="py-2 px-4 border-b">{user.id}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.followers}</td>
                <td className="py-2 px-4 border-b">{user.isActive ? 'Yes' : 'No'}</td>
                <td className="py-2 px-4 border-b">{new Date(user.registeredAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
