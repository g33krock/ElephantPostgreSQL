import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;

const supabaseUrl = "https://qyctrtcwtwasdktftmuy.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNzQ2NDEzNSwiZXhwIjoxOTMzMDQwMTM1fQ.1EunuBxs1Kzq516wypLousXSRDMrgev_NqQDBXCbKAo"

export const supabase = createClient(supabaseUrl, supabaseKey);