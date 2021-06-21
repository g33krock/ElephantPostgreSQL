import { useHistory } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'
import Header from './HeaderComponent'
import Main from './MainComponent'

export function Dashboard() {
  // Get current user and signOut function from context
  const { user, signOut } = useAuth()

  const history = useHistory()

  async function handleSignOut() {
    // Ends user session
    await signOut()

    // Redirects the user to Login page
    history.push('/login')
  }

  return (
    <div>
      {/* Change it to display the user ID too 👇*/}
      <p>Welcome, {user?.id}!</p>
      <button onClick={handleSignOut}>Sign out</button>
      <BrowserRouter>
        <div className="App">
            <Header />
            <Main
              campus={Header?.campus}
            />
        </div>
        </BrowserRouter>
    </div>
  )
}
