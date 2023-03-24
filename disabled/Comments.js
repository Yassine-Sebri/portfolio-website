import { useState, useEffect } from "react";
import Image from "next/image";

import {
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  inMemoryPersistence,
} from "@firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { auth, database } from "@/firebase/firebaseApp";

import { AiFillGoogleCircle } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

import { format } from "date-fns";

import userData from "@/constants/data";

const dbInstance = collection(database, "comments");

const provider = new GoogleAuthProvider();
setPersistence(auth, inMemoryPersistence);

const signIn = async () => {
  await signInWithPopup(auth, provider);
};

export default function Comments({ instances }) {
  const [user] = useAuthState(auth);

  const [body, setBody] = useState("");
  const [comments, setComments] = useState(instances);
  useEffect(() => {
    const q = query(dbInstance, orderBy("updatedAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedEntries = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
          updatedAt:
            doc.data().updatedAt !== null
              ? doc.data().updatedAt.toDate().toString()
              : Date(),
        };
      });
      setComments(updatedEntries);
    });

    return unsubscribe;
  }, []);
  return (
    <div>
      <div>
        {!user ? (
          <button
            className="inline-flex items-center justify-center mt-10 mb-4 font-bold px-4 py-2 bg-white
                dark:bg-slate-800 text-gray-900 dark:text-gray-100 rounded w-64"
            onClick={signIn}
          >
            <AiFillGoogleCircle className="mr-2 " /> Sign In to write
          </button>
        ) : (
          <form
            className="relative my-4 flex flex-col items-start"
            onSubmit={(e) => {
              e.preventDefault();
              fetch(user.photoURL)
                .then((response) => response.blob())
                .then((blob) => {
                  // Convert the Blob object to a data URL
                  const reader = new FileReader();
                  reader.readAsDataURL(blob);
                  reader.onloadend = () => {
                    {
                      addDoc(dbInstance, {
                        body: body,
                        name: user.displayName,
                        email: user.email,
                        picture: reader.result.split(",")[1],
                        updatedAt: serverTimestamp(),
                      });
                    }
                  };
                });

              setBody("");
            }}
          >
            <div className="w-full border border-white dark:border-slate-800 rounded-xl relative mb-4">
              <textarea
                aria-label="Your message"
                placeholder="Your message..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
                className="px-4 py-2 mt-1 focus:outline-none block w-full rounded-md bg-transparent text-gray-900 dark:text-gray-100 resize-none"
              />
            </div>
            <button
              className="px-4 py-2 font-medium bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
              type="submit"
            >
              Write
            </button>
          </form>
        )}
      </div>
      <div className="mt-4 h-px w-full bg-white dark:bg-gray-700"></div>
      <div className="mt-4 space-y-8">
        {comments.map((entry) => (
          <WordsEntry key={entry.id} entry={entry} user={user} />
        ))}
      </div>
    </div>
  );
}
function WordsEntry({ entry, user }) {
  const deleteEntry = async (e) => {
    e.preventDefault();

    deleteDoc(doc(database, "comments", entry.id));
  };

  return (
    <div className="flex flex-col space-y-2 relative w-full">
      <div className="prose dark:prose-dark w-full break-words">
        {entry.body}
      </div>
      <div className="flex items-center space-x-3">
        <Image
          src={`data:image;base64,${entry.picture}`}
          width="20"
          height="20"
          className="rounded-full"
          alt={entry.name}
        />

        <p className="text-sm text-gray-500">{entry.name}</p>
        <span className=" text-gray-200 dark:text-gray-800">/</span>
        <p className="text-sm text-gray-400 dark:text-gray-600">
          {format(new Date(entry.updatedAt), "d MMM yyyy 'at' h:mm bb")}
        </p>

        {user &&
          (entry.email === user.email || user.email === userData.email) && (
            <span>
              <span className="text-gray-200 dark:text-gray-800">/</span>
              <button
                onClick={deleteEntry}
                className="ml-2 text-sm text-red-600 dark:text-red-400"
              >
                <MdDeleteForever
                  className="text-red-500 h-4 w-4"
                  style={{ marginBottom: "-3px" }}
                />
              </button>
            </span>
          )}
      </div>
    </div>
  );
}
