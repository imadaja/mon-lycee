import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Pages
import Home from './pages/Home';
import Filieres from './pages/Filieres';
import Actualites from './pages/Actualites';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Inscription from './pages/Inscription';
import EleveProfile from './pages/EleveProfile';
import AdminDashboard from './pages/AdminDashboard';
import AdminCandidature from './pages/AdminCandidature';

// Route guards
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <LoadingScreen />;
  return user ? children : <Navigate to="/login" replace />;
};

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <LoadingScreen />;
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== 'admin') return <Navigate to="/espace-eleve" replace />;
  return children;
};

const GuestRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <LoadingScreen />;
  if (user) return <Navigate to={user.role === 'admin' ? '/admin' : '/espace-eleve'} replace />;
  return children;
};

const LoadingScreen = () => (
  <div className="min-h-screen bg-primary-950 flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-primary-300 border-t-gold-400 rounded-full animate-spin mx-auto mb-4" />
      <p className="text-primary-200 font-body">Chargement...</p>
    </div>
  </div>
);

function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/filieres" element={<Filieres />} />
      <Route path="/actualites" element={<Actualites />} />
      <Route path="/contact" element={<Contact />} />

      {/* Auth */}
      <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
      <Route path="/register" element={<GuestRoute><Register /></GuestRoute>} />

      {/* Elève espace */}
      <Route path="/espace-eleve" element={<PrivateRoute><EleveProfile /></PrivateRoute>} />
      <Route path="/inscription" element={<PrivateRoute><Inscription /></PrivateRoute>} />

      {/* Admin */}
      <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
      <Route path="/admin/candidature/:id" element={<AdminRoute><AdminCandidature /></AdminRoute>} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
