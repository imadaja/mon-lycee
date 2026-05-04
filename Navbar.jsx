import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X, GraduationCap, ChevronDown, LogOut, User, LayoutDashboard } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setUserMenu(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/filieres', label: 'Filières' },
    { to: '/actualites', label: 'Actualités' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-primary-950/95 backdrop-blur-md shadow-2xl shadow-primary-950/20'
        : 'bg-primary-950'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-gold-400/30 transition-shadow">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="block text-white font-display font-bold text-sm leading-tight">Lycée Excellence</span>
              <span className="block text-gold-400 text-xs font-body tracking-widest uppercase">Royale</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.to
                    ? 'text-gold-400 bg-white/10'
                    : 'text-primary-200 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenu(!userMenu)}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl transition-all duration-200"
                >
                  <div className="w-7 h-7 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center text-xs font-bold">
                    {user.nom?.[0]}{user.prenom?.[0]}
                  </div>
                  <span className="text-sm font-medium">{user.prenom}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${userMenu ? 'rotate-180' : ''}`} />
                </button>

                {userMenu && (
                  <div className="absolute right-0 top-12 w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 animate-fade-in">
                    {user.role === 'admin' ? (
                      <Link to="/admin" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">
                        <LayoutDashboard className="w-4 h-4" /> Dashboard Admin
                      </Link>
                    ) : (
                      <>
                        <Link to="/espace-eleve" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">
                          <User className="w-4 h-4" /> Mon profil
                        </Link>
                        <Link to="/inscription" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">
                          <GraduationCap className="w-4 h-4" /> Mon dossier
                        </Link>
                      </>
                    )}
                    <hr className="my-2 border-gray-100" />
                    <button onClick={handleLogout} className="flex items-center gap-2 w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50">
                      <LogOut className="w-4 h-4" /> Déconnexion
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="text-sm text-primary-200 hover:text-white font-medium transition-colors px-4 py-2">
                  Connexion
                </Link>
                <Link to="/register" className="btn-gold text-sm py-2.5 px-5">
                  Candidater
                </Link>
              </>
            )}
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-primary-900 border-t border-primary-800 px-4 py-4 animate-fade-in">
          <div className="space-y-1">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  location.pathname === link.to ? 'text-gold-400 bg-white/10' : 'text-primary-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-primary-800 my-3" />
            {user ? (
              <>
                <Link to={user.role === 'admin' ? '/admin' : '/espace-eleve'}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-primary-200 hover:bg-white/5 hover:text-white">
                  {user.role === 'admin' ? '🛡️ Dashboard Admin' : '👤 Mon profil'}
                </Link>
                <button onClick={handleLogout}
                  className="block w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10">
                  Déconnexion
                </button>
              </>
            ) : (
              <div className="flex gap-3 pt-2">
                <Link to="/login" className="flex-1 text-center py-3 text-sm text-primary-200 border border-primary-700 rounded-xl hover:bg-white/5">
                  Connexion
                </Link>
                <Link to="/register" className="flex-1 text-center py-3 text-sm bg-gold-500 text-white rounded-xl hover:bg-gold-600 font-medium">
                  Candidater
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
