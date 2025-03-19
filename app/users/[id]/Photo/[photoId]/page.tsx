import React from 'react';

interface Props {
  params: {
    id: string;
    photoId: string;
  };
}

const PhotoDetails = async (props: Props) => {
  // Ensure params is available before using it
  const params = await props.params;
  const { id, photoId } = params;

  return (
    <div>PhotoDetails {id} {photoId}</div>
  );
};

export default PhotoDetails;
