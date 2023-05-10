import { useCallback, useEffect } from "react";
import { TypedBroadcastChannel } from "../common/TypedBroadcastChannel";
import { useAuthContext } from "../AuthContext";

type SyncMessage =
  | {
      type: "LOGIN";
      user: string;
    }
  | { type: "LOGOUT" };

const syncChannel = new TypedBroadcastChannel<SyncMessage>("MY_CHANNEL");

export const Basic = () => {
  const { login, logout } = useAuthContext();

  // handle channel event
  const syncEventListener = useCallback(
    (msgEvent: MessageEvent<SyncMessage>) => {
      if (msgEvent.data.type === "LOGOUT") {
        logout();
      }
      if (msgEvent.data.type === "LOGIN") {
        login(msgEvent.data.user);
      }
    },
    [login, logout]
  );

  // register channel event listener
  useEffect(() => {
    syncChannel.addEventListener("message", syncEventListener);

    return () => syncChannel.removeEventListener("message", syncEventListener);
  }, [syncEventListener]);

  const onLogin = (user: string) => {
    login(user);
    syncChannel.postMessage({ type: "LOGIN", user });
  };

  const onLogout = () => {
    logout();
    syncChannel.postMessage({ type: "LOGOUT" });
  };

  return (
    <div>
      <h1>Basic example</h1>
      <button onClick={() => onLogin("Michael Scott")}>Login</button>
      <button onClick={() => onLogout()}>Logout</button>
    </div>
  );
};
