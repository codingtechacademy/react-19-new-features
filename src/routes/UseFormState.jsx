import { useFormState, useFormStatus } from "react-dom";

// Cette fonction peut être exécuté côté serveur
const registerUserAction = async (prevState, queryData) => {
  console.log("previous form state", prevState);

  const username = queryData.get("username");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return username === "Tib" ? "Success" : "Error";
};

function SubmitButton() {
  const status = useFormStatus();

  // la propriété pending permet de savoir si le formulaire est en cours de soumission
  return (
    <button disabled={status.pending}>
      {status.pending ? "Chargement..." : "Valider"}
    </button>
  );
}

const UseFormState = () => {
  const [message, formAction] = useFormState(registerUserAction, undefined);

  return (
    <form action={formAction}>
      <div className="form-control">
        <label>Nom</label>
        <input type="text" name="username" />
      </div>

      {message && <p>{message}</p>}

      <SubmitButton />
    </form>
  );
};

export default UseFormState;
