import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ejuoxfonowodvutisqqc.supabase.co";      // Replace with your URL
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqdW94Zm9ub3dvZHZ1dGlzcXFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4NTYzNTgsImV4cCI6MjA3MzQzMjM1OH0.1dTLA-XmAEpwU_kQpmY3i1R3hhZJ8MEia3kXdOcGUyI";                  // Replace with your anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
