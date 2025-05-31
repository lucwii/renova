import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://sfdkjveldqlrkitxuniv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmZGtqdmVsZHFscmtpdHh1bml2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2MjE2NDksImV4cCI6MjA2NDE5NzY0OX0.RnpOUx41aSdK9618KYlJFUav9s3ti1OsYDYmuiRRwOY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);