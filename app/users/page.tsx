export const dynamic = 'force-dynamic'; //It tells Next.js to treat this route as dynamic and avoid caching issues that can trigger this kind of behavior.

import Link from 'next/link';
import UserTable from './UserTable';

const UsersPage = async ({
  searchParams,
}: {
  searchParams?:  { sortOrder?: string };
}) => {
   const sortOrder = searchParams?.sortOrder as string || 'id';

  return (
    <>
      <div>
        <h1>Users Page</h1>
      </div>

      <Link
        href="/users/new"
        className="btn btn-soft btn-secondary w-40 border-red-400"
      >
        New User
      </Link>
      <Link
        href="/users/apiusers"
        className="btn btn-soft btn-secondary w-40 border-red-400"
      >
        API users
      </Link>
      <br />
      <br />

      <div className="currentUsers">
        <h2 className="text-2xl border-3 border-wheat-500 rounded">
          Current Users List
        </h2>

        <h2 className="timerendering bg-maroon-100 text-lg">
          {new Date().toLocaleTimeString()}
        </h2>

        <h3 className="userName text-3xl">
          <UserTable sortOrder={sortOrder} />
        </h3>
      </div>
    </>
  );
};

export default UsersPage;
