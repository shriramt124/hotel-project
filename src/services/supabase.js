
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://sdpeuahqbxqlsxazbeya.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkcGV1YWhxYnhxbHN4YXpiZXlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5MDA3MjYsImV4cCI6MjAzNzQ3NjcyNn0.Z_nLE-amJHhqZzberJ7OgQ2k-gudpCpJc5m4t579bp0"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
