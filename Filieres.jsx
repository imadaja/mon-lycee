import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, BookOpen, Award } from 'lucide-react';

const FILIERES = [
  {
    code: 'SMA',
    icon: '🔬',
    title: 'Sciences Mathématiques A',
    color: 'border-l-blue-500',
    accent: 'bg-blue-50 text-blue-700',
    description: 'La filière Sciences Mathématiques A est la voie royale pour les futurs ingénieurs, mathématiciens et scientifiques. Elle offre une formation intensive en mathématiques et physique.',
    matieres: ['Mathématiques avancées', 'Physique-Chimie', 'Sciences de la vie', 'Informatique', 'Français', 'Arabe', 'Anglais'],
    debouches: ['Classes préparatoires', 'Grandes écoles d\'ingénierie', 'Médecine', 'ENSA / ENSEM'],
    horaires: '38h / semaine',
    effectif: '35 élèves / classe'
  },
  {
    code: 'SMB',
    icon: '📐',
    title: 'Sciences Mathématiques B',
    color: 'border-l-indigo-500',
    accent: 'bg-indigo-50 text-indigo-700',
    description: 'Axée sur les mathématiques et les sciences de l\'ingénieur, cette filière prépare aux formations techniques de haut niveau.',
    matieres: ['Mathématiques', 'Sciences de l\'ingénieur', 'Physique', 'Informatique', 'Français', 'Arabe', 'Anglais'],
    debouches: ['BTS & DUT', 'Licences scientifiques', 'Prépas technologiques', 'IUT'],
    horaires: '36h / semaine',
    effectif: '35 élèves / classe'
  },
  {
    code: 'SVT',
    icon: '🧪',
    title: 'Sciences Expérimentales',
    color: 'border-l-emerald-500',
    accent: 'bg-emerald-50 text-emerald-700',
    description: 'Une formation complète couvrant les sciences naturelles, la biologie, la chimie et la physique pour les passionnés du vivant.',
    matieres: ['Biologie & Géologie', 'Chimie', 'Physique', 'Mathématiques', 'Français', 'Arabe', 'Anglais'],
    debouches: ['Médecine & Pharmacie', 'Facultés des sciences', 'Biologie marine', 'Agronomie'],
    horaires: '37h / semaine',
    effectif: '32 élèves / classe'
  },
  {
    code: 'LSH',
    icon: '📚',
    title: 'Lettres & Sciences Humaines',
    color: 'border-l-amber-500',
    accent: 'bg-amber-50 text-amber-700',
    description: 'Développez votre esprit critique, maîtrisez les langues et explorez les sciences sociales dans cette filière riche et diversifiée.',
    matieres: ['Philosophie', 'Histoire-Géographie', 'Sociologie', 'Arabe (littérature)', 'Français', 'Anglais', 'Espagnol'],
    debouches: ['Lettres & langues', 'Sciences politiques', 'Droit', 'Journalisme', 'Enseignement'],
    horaires: '35h / semaine',
    effectif: '30 élèves / classe'
  },
  {
    code: 'SE',
    icon: '📊',
    title: 'Sciences Économiques',
    color: 'border-l-purple-500',
    accent: 'bg-purple-50 text-purple-700',
    description: 'Préparez-vous aux grandes écoles de commerce et aux facultés d\'économie avec une formation solide en économie, gestion et mathématiques.',
    matieres: ['Économie', 'Gestion & Comptabilité', 'Droit', 'Mathématiques', 'Histoire', 'Français', 'Anglais'],
    debouches: ['Écoles de commerce', 'Facultés d\'économie', 'ISCAE', 'Finance & Banque'],
    horaires: '36h / semaine',
    effectif: '32 élèves / classe'
  },
];

export default function Filieres() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="bg-primary-950 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold-400 font-medium text-sm uppercase tracking-widest mb-4 block">Formations</span>
          <h1 className="font-display text-5xl font-bold text-white mb-5">Nos filières d'excellence</h1>
          <p className="text-primary-300 text-lg max-w-2xl mx-auto">
            Cinq voies d'excellence, un seul objectif : vous préparer aux meilleures formations supérieures.
          </p>
        </div>
      </div>

      {/* Filieres */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {FILIERES.map((f, i) => (
            <div key={f.code}
              className={`animate-on-scroll bg-white rounded-2xl shadow-sm border border-gray-100 border-l-4 ${f.color} overflow-hidden hover:shadow-lg transition-shadow`}
              style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="p-8">
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div className="flex items-start gap-5 flex-1">
                    <span className="text-5xl">{f.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${f.accent}`}>{f.code}</span>
                      </div>
                      <h2 className="font-display text-2xl font-bold text-primary-900 mb-3">{f.title}</h2>
                      <p className="text-gray-600 leading-relaxed mb-5">{f.description}</p>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2 flex items-center gap-1">
                            <BookOpen className="w-3.5 h-3.5" /> Matières
                          </h4>
                          <ul className="space-y-1">
                            {f.matieres.map(m => (
                              <li key={m} className="text-sm text-gray-600 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full shrink-0" /> {m}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2 flex items-center gap-1">
                            <Award className="w-3.5 h-3.5" /> Débouchés
                          </h4>
                          <ul className="space-y-1">
                            {f.debouches.map(d => (
                              <li key={d} className="text-sm text-gray-600 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0" /> {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 min-w-[160px]">
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <Clock className="w-5 h-5 text-primary-500 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-primary-900">{f.horaires}</div>
                      <div className="text-xs text-gray-400">Volume horaire</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <Users className="w-5 h-5 text-primary-500 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-primary-900">{f.effectif}</div>
                      <div className="text-xs text-gray-400">Effectif</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-950 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Vous avez choisi votre filière ?</h2>
          <p className="text-primary-300 mb-8">Déposez votre candidature dès maintenant et rejoignez notre communauté d'excellence.</p>
          <Link to="/register" className="btn-gold inline-flex items-center gap-2">
            Candidater maintenant <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
