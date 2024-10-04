import { useState, useEffect } from "react";
import useOnlineStatus from "../../../customHooks/useOnlineStatus";
/**
 * Task: If internet connection is week or network not working then
 * we need to show Reconnecting and if network is ok then show Submit
 * Here the code repeat again and again so  we create a custom hook
 */
export default function SaveButton() {
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

  function handleSaveClick() {
    console.log("✅ Progress saved");
  }

  return (
    <>
      <h3>Change Status According to Internet</h3>
      <button disabled={!isOnline} onClick={handleSaveClick}>
        {isOnline ? "Submit" : "Reconnecting..."}
      </button>
    </>
  );
}
