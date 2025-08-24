import React from 'react'
import axios from 'axios'
import { initializeApp } from 'firebase/app'

// Firebase config using Vite env vars
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

initializeApp(firebaseConfig)

function App() {
  const [message, setMessage] = React.useState('Loading...')

  React.useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + '/test')
      .then(res => setMessage(res.data))
      .catch(() => setMessage('Backend not reachable'))
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>⚡ Virtual Smart Grid</h1>
      <p>{message}</p>
    </div>
  )
}

export default App