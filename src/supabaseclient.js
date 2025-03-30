import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zygtgtswjxdnaewbjdte.supabase.co"; 
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5Z3RndHN3anhkbmFld2JqZHRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3MzE1NjcsImV4cCI6MjA1ODMwNzU2N30.ekJHNExltV8DoHIeWestXbx1YN-O4-66-uBTH329AaM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export { supabaseUrl, supabaseAnonKey};