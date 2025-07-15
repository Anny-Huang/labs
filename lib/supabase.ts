import { createClient } from "@supabase/supabase-js";
 
const supabaseUrl = 'https://sphuuezsmobdgxgcwyvd.supabase.co'

const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwaHV1ZXpzbW9iZGd4Z2N3eXZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2MTY3NDEsImV4cCI6MjA2ODE5Mjc0MX0.7rgHD0sfm9bHvJhM9AcGiOeMoNMIRixuMLSyeP91O7Y'
 
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

 