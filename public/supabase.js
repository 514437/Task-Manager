// supabase.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = 'https://qsrslzddmydztzephubx.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzcnNsemRkbXlkenR6ZXBodWJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MjM5MzcsImV4cCI6MjA3NDQ5OTkzN30.lBdehRWtEdLSHslZe8YZ_MpOU2GD9rT8Llq9_ztYEkM'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
