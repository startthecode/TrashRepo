const page = async ({ params }: any) => {
  const id = (await params).id;
  return <div>dynamic {id}</div>;
};

export default page;
