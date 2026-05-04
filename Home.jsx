import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  GraduationCap, Award, Users, BookOpen, ArrowRight,
  Star, ChevronRight, Calendar, TrendingUp, Shield, Globe
} from 'lucide-react';

const STATS = [
  { icon: GraduationCap, value: '98%', label: 'Taux de réussite au Bac' },
  { icon: Award, value: '15+', label: 'Prix nationaux' },
  { icon: Users, value: '2400', label: 'Élèves formés' },
  { icon: TrendingUp, value: '87%', label: 'Admis grandes écoles' },
];

const FILIERES_PREVIEW = [
  {
    title: 'Sciences Mathématiques',
    icon: '🔬',
    description: 'Formation rigoureuse en mathématiques avancées et sciences exactes.',
    color: 'from-blue-500/10 to-primary-500/10',
    border: 'border-primary-200'
  },
  {
    title: 'Sciences Expérimentales',
    icon: '🧪',
    description: 'Exploration des sciences naturelles, biologie et chimie.',
    color: 'from-emerald-500/10 to-teal-500/10',
    border: 'border-emerald-200'
  },
  {
    title: 'Lettres & Sciences Humaines',
    icon: '📚',
    description: 'Maîtrise des langues, philosophie et sciences sociales.',
    color: 'from-amber-500/10 to-orange-500/10',
    border: 'border-amber-200'
  },
  {
    title: 'Sciences Économiques',
    icon: '📊',
    description: 'Économie, gestion et préparation aux business schools.',
    color: 'from-purple-500/10 to-pink-500/10',
    border: 'border-purple-200'
  },
];

const VALEURS = [
  { icon: Star, title: 'Excellence', desc: 'Des standards éducatifs parmi les plus élevés du royaume.' },
  { icon: Shield, title: 'Intégrité', desc: 'Un environnement d\'apprentissage sain, sûr et bienveillant.' },
  { icon: Globe, title: 'Ouverture', desc: 'Des partenariats internationaux et une vision globale.' },
  { icon: BookOpen, title: 'Innovation', desc: 'Des méthodes pédagogiques modernes et participatives.' },
];

export default function Home() {
  const [news, setNews] = useState([]);
  const heroRef = useRef(null);

  useEffect(() => {
    axios.get('/api/news?limit=3').then(r => setNews(r.data)).catch(() => {});
  }, []);

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen bg-primary-950 flex items-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-gold-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary-600/20 to-transparent rounded-full blur-3xl" />
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 text-gold-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Star className="w-4 h-4 fill-gold-400" />
                Admissions 2024–2025 ouvertes
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                L'excellence,
                <span className="block text-transparent bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text">
                  une tradition
                </span>
              </h1>

              <p className="text-primary-300 text-lg leading-relaxed mb-10 max-w-xl">
                Depuis 1985, le Lycée Excellence Royale prépare les esprits brillants d'aujourd'hui
                à devenir les leaders de demain. Un cadre d'exception, des enseignants passionnés.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/register" className="btn-gold flex items-center gap-2 group">
                  Soumettre ma candidature
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/filieres"
                  className="flex items-center gap-2 text-primary-200 hover:text-white border border-primary-700 hover:border-primary-500 px-6 py-3 rounded-xl transition-all duration-200">
                  Nos filières <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              {STATS.map(({ icon: Icon, value, label }, i) => (
                <div key={i} className={`bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 ${i === 1 ? 'mt-8' : ''}`}>
                  <Icon className="w-7 h-7 text-gold-400 mb-3" />
                  <div className="text-3xl font-display font-bold text-white mb-1">{value}</div>
                  <div className="text-primary-300 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-400">
          <span className="text-xs tracking-widest uppercase">Découvrir</span>
          <div className="w-5 h-8 border-2 border-primary-600 rounded-full flex items-start justify-center pt-1">
            <div className="w-1.5 h-2 bg-gold-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* PRÉSENTATION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <span className="text-gold-600 font-medium text-sm uppercase tracking-widest mb-3 block">Notre établissement</span>
              <h2 className="section-title mb-6">Un héritage d'excellence <em className="font-normal italic text-primary-400">inégalé</em></h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Fondé en 1985 à Rabat, le Lycée Excellence Royale est reconnu comme l'un des établissements
                secondaires les plus prestigieux du Maroc. Notre mission : offrir une éducation d'excellence
                dans un cadre stimulant et bienveillant.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Avec un corps enseignant de renommée nationale, des infrastructures modernes et un programme
                pédagogique innovant, nous préparons nos élèves aux défis de demain.
              </p>
              <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
                En savoir plus <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="animate-on-scroll grid grid-cols-2 gap-4">
              {VALEURS.map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-5 hover:shadow-md transition-shadow border border-gray-100">
                  <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-primary-900 mb-1 text-sm">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FILIÈRES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="text-gold-600 font-medium text-sm uppercase tracking-widest mb-3 block">Formations</span>
            <h2 className="section-title mb-4">Nos filières d'excellence</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Choisissez la voie qui correspond à vos ambitions. Chaque filière est encadrée par des professeurs experts.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FILIERES_PREVIEW.map((f, i) => (
              <div key={i} className={`animate-on-scroll bg-gradient-to-br ${f.color} border ${f.border} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-display font-semibold text-primary-900 mb-2 text-base">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{f.description}</p>
                <Link to="/filieres" className="text-primary-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Découvrir <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTUALITÉS */}
      {news.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div className="animate-on-scroll">
                <span className="text-gold-600 font-medium text-sm uppercase tracking-widest mb-3 block">Actualités</span>
                <h2 className="section-title">Dernières nouvelles</h2>
              </div>
              <Link to="/actualites" className="text-primary-600 font-medium text-sm hover:text-primary-800 flex items-center gap-1">
                Tout voir <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {news.map((item, i) => (
                <article key={item._id} className={`animate-on-scroll card hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                  style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-1 rounded-full">{item.categorie}</span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(item.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-primary-900 mb-2 leading-snug">{item.titre}</h3>
                  <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">{item.contenu}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA ADMISSIONS */}
      <section className="py-24 bg-primary-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950 to-primary-900" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 text-center animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Calendar className="w-4 h-4" />
            Candidatures 2024–2025 — Date limite: 30 avril 2025
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Rejoignez notre communauté<br />d'excellence
          </h2>
          <p className="text-primary-300 text-lg mb-10 max-w-2xl mx-auto">
            Créez votre compte, remplissez votre dossier en ligne et suivez l'avancement de votre candidature en temps réel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="btn-gold flex items-center gap-2 text-base">
              Commencer ma candidature <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact"
              className="flex items-center gap-2 text-primary-200 border border-primary-700 hover:border-primary-500 px-6 py-3 rounded-xl transition-all text-base">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
