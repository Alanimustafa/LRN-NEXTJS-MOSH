export type PageProps = {
  params: {
    id: string;
  };
};

const PhotoPage = ({ params }: PageProps) => {
  return (
    <div>
      <h1>Photo ID: {params.id}</h1>
    </div>
  );
};

export default PhotoPage;
