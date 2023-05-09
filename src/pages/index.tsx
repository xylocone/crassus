import { collection } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { useCollection } from "react-firebase-hooks/firestore";

// Internal dependencies
import { functions, db } from "../../firebaseConfig";

export async function getStaticProps() {
  const callable = httpsCallable(functions, "hello");
  const response = await callable();

  const apiResponse: Response = {
    text: JSON.stringify(response.data),
  };

  return {
    props: {
      apiResponse,
    },
  };
}

type Response = {
  text: string;
};

export default function Home(props: { apiResponse: Response }) {
  const [users, _loading, _error] = useCollection(collection(db, "users"));
  const usersList = users?.docs
    .map((doc) => JSON.stringify(doc.data()))
    .join("\n");

  return (
    <div className="flex items-center justify-center p-4">
      <p className="font-mono font-extrabold text-center">
        The response returned from the API is: {props.apiResponse.text}
      </p>
      <p>The following users were found in the database: </p>
      <p>{usersList}</p>
    </div>
  );
}
