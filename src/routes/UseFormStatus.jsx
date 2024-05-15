import { useFormStatus } from "react-dom";

// Cette fonction peut être exécuté côté serveur
const registerUserAction = async (userData) => {
  const newUser = {
    username: userData.get("username"),
  };

  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log(newUser);
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

const UseFormStatus = () => {
  return (
    <>
      <h1>UseFormStatus hook</h1>{" "}
      <form action={registerUserAction}>
        <div className="form-control">
          <label>Nom</label>
          <input type="text" name="username" />
        </div>
        <SubmitButton />
      </form>
    </>
  );
};

export default UseFormStatus;
