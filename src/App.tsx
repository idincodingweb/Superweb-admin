import { BrowserRouter as Router } from 'react-router-dom'; // Hapus Routes dan Route
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';

function App() {
  const [session, setSession] = useState<any>(null); // Ubah tipe state session

  useEffect(() => {
    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        setSession(session)
      })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <Router>
      
        
          
            {session ? (
              <AdminDashboard /> // Hapus session={session}
            ) : (
              <AdminLogin />
            )}
          
        
      
    </Router>
  );
}

export default App;
