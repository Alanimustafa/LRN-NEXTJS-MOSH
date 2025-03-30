import React from 'react';
import Link from 'next/link';
import { sort } from 'fast-sort';

interface User {
    id: number,
    name: string,
    email: string,
    address: {
        city: string,
        street: string,
        zipcode: string
    },
  };

interface Props {
  sortOrder : string;
};

const UserTable = async ( {sortOrder} : Props) => {

      const res = await fetch ('https://jsonplaceholder.typicode.com/users');
      const users: User[] = await res.json();

      const sortedUsers = sort(users).asc(user =>
        sortOrder === "email" ? user.email :
        sortOrder === "name" ? user.name :
        sortOrder === "address" ? user.address.city :
        user.id
      );

  return ( 
    <>
        <div>UserTable</div>
        <table className='table table-bordered text-2xl text-orange-300' >
              <thead className='text-yellow-100 text-xl'>
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
                  <th>
                    <Link href='/users?sortOrder=address'>Address</Link>
                  </th>
                </tr>
              </thead>
              <tbody>
              { sortedUsers.map((user) => (
                <tr key={user.id}>
                  <th><Link href={`/users/${user.id}`}>{user.id}.</Link></th> 
                  <th><Link href={`/users/${user.id}`}>{user.name}.</Link></th> 
                  <th><Link href={`/users/${user.id}`}>{user.email}.</Link></th> 
                  <th><Link href={`/users/${user.id}`}>{user.address.city}.</Link></th> 
                </tr>
              ))}
              </tbody>
            </table>
    </>

  )
}

export default UserTable