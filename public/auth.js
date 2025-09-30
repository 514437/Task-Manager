// auth.js
import { supabase } from './supabase.js'

// Email/password login
document.getElementById('login-form')?.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = e.target.email.value
  const password = e.target.password.value

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    window.location.href = '404.html'
  } else {
    window.location.href = 'dashboard.html'
  }
})

// Google OAuth login
document.getElementById('google-login')?.addEventListener('click', async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${location.origin}/dashboard.html`
    }
  })

  if (error) {
    alert('Google login failed: ' + error.message)
  }
})
