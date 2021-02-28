import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../services/AuthService'
import { saveCredentials } from '../../store/actionCreators'

const LoginPage = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const dispatch = useDispatch();

  const doLogin = async (event) => {
    event.preventDefault()

    const result = await login()
    // { userId: ......, username: ....., access_token: ..... }

    dispatch(saveCredentials(
      result.data.userId,
      result.data.username,
      result.data.access_token,
    ))
    
  }

  return (
    <form onSubmit={doLogin}>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">
        Login
      </button>
    </form>
  )
}

export default LoginPage
