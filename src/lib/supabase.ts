import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zngcghtamjwpemskwurq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpuZ2NnaHRhbWp3cGVtc2t3dXJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1NDI0NjcsImV4cCI6MjA1NTExODQ2N30.n437UQnhiit-Z380lBDATTN_i-X4ry61p2FRzWPrkrM';

export const supabase = createClient(supabaseUrl, supabaseKey);
