import { useState, useEffect } from "react";
import useOnlineStatus from "../../../customHooks/useOnlineStatus";

export default function CheckUserStatus() {
  const isOnline = useOnlineStatus();

  //   const [isOnline, setIsOnline] = useState(true);

  //   useEffect(() => {
  //     function handleOnline() {
  //       setIsOnline(true);
  //     }
  //     function handleOffline() {
  //       setIsOnline(false);
  //     }
  //     window.addEventListener('online', handleOnline);
  //     window.addEventListener('offline', handleOffline);
  //     return () => {
  //       window.removeEventListener('online', handleOnline);
  //       window.removeEventListener('offline', handleOffline);
  //     };
  //   }, []);

  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}
