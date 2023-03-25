import React from "react";

import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { database } from "@/firebase/firebaseApp";

import ContainerBlock from "../components/ContainerBlock";
import Comments from "../components/Comments";

export const getStaticProps = async () => {
  const dbInstance = collection(database, "comments");

  const q = query(dbInstance, orderBy("updatedAt", "desc"));

  const snapshot = await getDocs(q);

  const instances = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
      updatedAt: doc.data().updatedAt.toDate().toString(),
    };
  });

  return { props: { instances }, revalidate: 10 };
};

export default function words({ instances }) {
  return (
    <ContainerBlock title="Words - Yassine Sebri">
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
          <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Words
          </h1>
        </div>
        <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
          <div className="max-w-6xl mx-auto pt-16 px-10">
            <div className="text-gray-500 ">
              Leave a comment for future visitors.
            </div>
            <Comments instances={instances} />
          </div>
        </div>
      </section>
    </ContainerBlock>
  );
}
