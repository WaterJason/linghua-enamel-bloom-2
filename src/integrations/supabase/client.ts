// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://dfuxhhwvfpgeuptapzed.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmdXhoaHd2ZnBnZXVwdGFwemVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4ODEzMzgsImV4cCI6MjA2NTQ1NzMzOH0._AnA-LY-5FfTWy0lbEAYs66yI3Ws67WS9lMPE3I3sqA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);