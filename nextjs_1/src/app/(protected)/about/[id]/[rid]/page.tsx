// "use client";
import { use } from "react";
// export const generateMetadata = async ({
//   params,
//   searchParams,
// }: {
//   params: Promise<{ rid: string }>;
//   searchParams: Promise<{ cat: string }>;
// }): Promise<Metadata> => {
//   let id = (await params).rid;
//   return {
//     title: `${id} about`,
//   };
// };
const page = ({
  searchParams,
}: {
  params: Promise<{ rid: string }>;
  searchParams: Promise<{ cat: string }>;
}) => {
  use(
    new Promise((res, rej) => {
      setTimeout(() => {
        rej("aaaa");
      }, 8000);
    })
  );
  const cat = use(searchParams).cat;
  console.log(cat);
  return <div>reviewid</div>;
};

export default page;
