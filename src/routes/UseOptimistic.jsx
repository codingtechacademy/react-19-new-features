import { useState, useOptimistic } from "react";

// permet de simuler un appel serveur de 1 seconde
async function fakeDelayAction(message) {
  await new Promise((res) => setTimeout(res, 1000));
  return message;
}

function UseOptimistic() {
  // état principal
  const [messages, setMessages] = useState([
    { text: "message initial", sending: false, key: 1 },
  ]);
  // état optimiste qui s'appuie sur l'état de base
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  const formAction = async (formData) => {
    const message = formData.get("message");

    // mise à jour l'état optimise
    addOptimisticMessage(message);

    // simulation d'un call backend
    const sentMessage = await fakeDelayAction(message);

    // mise à jour de l'état principal et réconciliation
    setMessages((messages) => [...messages, { text: sentMessage }]);
  };

  return (
    <>
      <h1>UseOptimistic Hook</h1>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (En cours d&apos;envoi...)</small>}
        </div>
      ))}
      <form action={formAction}>
        <div className="form-control">
          <label>Message</label>
          <input type="text" name="message" />
        </div>
        <button type="submit">Valider</button>
      </form>
    </>
  );
}

export default UseOptimistic;
