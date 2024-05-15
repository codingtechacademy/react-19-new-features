// Cette fonction peut être exécuté côté serveur
const registerUserAction = async (userData) => {
  const newUser = {
    username: userData.get("username"),
  };

  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log(newUser);
};

const Actions = () => {
  return (
    <form action={registerUserAction}>
      <div className="form-control">
        <label>Nom</label>
        <input type="text" name="username" />
      </div>
      <button type="submit">Valider</button>
    </form>
  );
};

export default Actions;
