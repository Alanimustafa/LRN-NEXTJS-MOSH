// app/photos/[id]/page.tsx
import React from 'react';

type PageProps = {
  params: {
    id: string;
  };
};

const PhotoPage = async ({ params }: PageProps) => {
  const { id } = params;

  return (
    <div>
      <h1>Photo ID: {id}</h1>
    </div>
  );
};

export default PhotoPage;
