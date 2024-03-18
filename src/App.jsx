import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'

//RecoilRoot
function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);

  // //useMemo
  // const finalValue = useMemo(() => {
  //   return networkNotificationCount + jobsAtomCount + notificationAtomCount + messagingAtomCount;
  // }, [networkNotificationCount, jobsAtomCount, notificationAtomCount, messagingAtomCount])

  const finalValue = useRecoilValue(totalNotificationSelector);
  return (
    <>
      <button>Home {}</button>

      <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount })</button>
      <button>Jobs ({jobsAtomCount >= 100 ? "99+" : jobsAtomCount })</button>
      <button>Messaging ({messagingAtomCount >= 100 ? "99+" : messagingAtomCount })</button>
      <button>Notifications ({notificationAtomCount >= 100 ? "99+" : notificationAtomCount })</button>

      <button>Me ({finalValue})</button>

    </>
  )
}
export default App
 