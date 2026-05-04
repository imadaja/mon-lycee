import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="block text-white font-display font-bold text-sm">Lycée Excellence</span>
                <span className="block text-gold-400 text-xs tracking-widest uppercase">Royale</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-300 mb-5">
              Établissement d'excellence formant les leaders de demain depuis 1985.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 bg-primary-800 hover:bg-primary-700 rounded-lg flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5">
              {[['/', 'Accueil'], ['/filieres', 'Filières'], ['/actualites', 'Actualités'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-sm hover:text-gold-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Espace */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Espace</h4>
            <ul className="space-y-2.5">
              {[['/login', 'Connexion'], ['/register', 'Créer un compte'], ['/inscription', 'Candidater'], ['/espace-eleve', 'Espace élève']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-sm hover:text-gold-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-400 shrink-0" />
                <span>123 Avenue Mohammed V,<br />Rabat, Maroc</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>+212 537 000 000</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>contact@lycee-excellence.ma</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-400">
            © {new Date().getFullYear()} Lycée Excellence Royale. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-primary-400">
            <a href="#" className="hover:text-primary-200 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-primary-200 transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
