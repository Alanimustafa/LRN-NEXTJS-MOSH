import React from 'react';
import Link from 'next/link';

const UserTable = async () => {
    interface User {
        id: number,
        name: string,
        email: string,
      };

      const res = await fetch ('https://jsonplaceholder.typicode.com/users');
      const users: User[] = await res.json();

  return ( 
    <>
        <div>UserTable</div>
        <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>
                    <Link href='/users?sortOrder=id'>ID</Link>
                    </th>
                  <th>
                    <Link href='/users?sortOrder=name'>Name</Link>
                    </th>
                  <th>
                    <Link href='/users?sortOrder=email'>Email</Link>
                  </th>
                </tr>
              </thead>
              <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <th><Link href={`/users/${user.id}`}>{user.id}.</Link></th> 
                  <th><Link href={`/users/${user.id}`}>{user.name}.</Link></th> 
                  <th><Link href={`/users/${user.id}`}>{user.email}.</Link></th> 
                </tr>
              ))}
              </tbody>
            </table>
    </>

  )
}

export default UserTable