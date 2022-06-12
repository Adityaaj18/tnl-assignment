import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyAiOloC2TXA2qrRqae7yOVOiPKfeWUVkdM',
   authDomain: 'streampala-f236c.firebaseapp.com',
   projectId: 'streampala-f236c',
   storageBucket: 'streampala-f236c.appspot.com',
   messagingSenderId: '551448897742',
   appId: '1:551448897742:web:ead57af288fbd33c42c89f'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
