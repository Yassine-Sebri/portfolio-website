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

  return { props: { instances } };
};

export default function words({ instances }) {
  return (
    <ContainerBlock title="Words - Yassine Sebri">
      <Comments instances={instances} />
    </ContainerBlock>
  );
}
