// register.js
import { supabase } from './supabase.js'

document.getElementById('register-form')?.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = e.target.email.value
  const password = e.target.password.value

  const { error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    window.location.href = '404.html'
  } else { 
    window.location.href = 'account.html'
  }
})
