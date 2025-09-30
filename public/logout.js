import { supabase } from './supabase.js'

    document.getElementById('logout')?.addEventListener('click', async () => {
      await supabase.auth.signOut()
      window.location.href = 'index.html'
    })