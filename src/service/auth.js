import firebase from '@/config/firebase.config'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const auth = () => {
    const login = async () => {
        const provider = new GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

        const auth = getAuth(firebase)

        try {
            await signInWithPopup(auth, provider)
            const userAuth = auth.currentUser?.displayName
            const userUid = auth.currentUser?.uid
            if (userAuth && userAuth !== '' && userUid) {
                localStorage.setItem('auth', userAuth)
                localStorage.setItem('uid', userUid)
                return true
            }
            return false
        } catch (e) {
            console.error(e)
        }
    }
    const logout = () => {
        localStorage.removeItem('auth')
        localStorage.removeItem('uid')
    }
    return {login,logout}
}

export default auth;