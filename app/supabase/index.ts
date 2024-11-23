import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://milertgsumjktrlaqsia.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pbGVydGdzdW1qa3RybGFxc2lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzMjYzNzQsImV4cCI6MjA0NzkwMjM3NH0.7-2ETiWImAh4pJPuzaylIdf8BcS_O3LPQZjQpFHZVi4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
