import React, { useState } from 'react';
import { ShieldCheck, Mail, Calendar, User, Euro, MessageSquare, Trash2, Check, X, Send, Award, DollarSign } from 'lucide-react';
import { BookingInquiry } from '../types';

interface AdminInboxProps {
  inquiries: BookingInquiry[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  onDelete: (id: string) => void;
  onSendReply: (id: string, reply: string) => void;
}

export default function AdminInbox({ inquiries, onApprove, onReject, onDelete, onSendReply }: AdminInboxProps) {
  const [selectedInqId, setSelectedInqId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  const [sentReplies, setSentReplies] = useState<Record<string, string[]>>({});

  const activeInq = inquiries.find((i) => i.id === selectedInqId);

  // Metrics calculations
  const totalInquiries = inquiries.length;
  const pendingCount = inquiries.filter((i) => i.status === 'pending').length;
  const approvedCount = inquiries.filter((i) => i.status === 'approved').length;
  
  const estimatedRevenue = inquiries
    .filter((i) => i.status === 'approved' && i.calculatedPrice > 0)
    .reduce((sum, current) => sum + current.calculatedPrice, 0);

  const handleSendResponse = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    onSendReply(id, replyText);
    
    // local logs visual state
    setSentReplies(prev => ({
      ...prev,
      [id]: [...(prev[id] || []), replyText]
    }));
    
    setReplyText('');
  };

  const loadResponseTemplate = (type: 'approve' | 'discount') => {
    if (!activeInq) return;
    if (type === 'approve') {
      setReplyText(
        `Bonjour ${activeInq.name},\n\nNous avons le plaisir de confirmer la disponibilité du chalet Le Yéti de Villard pour votre séjour du ${activeInq.startDate} au ${activeInq.endDate}.\n\nLe tarif total estimé pour ${activeInq.guests} personnes est de ${activeInq.calculatedPrice > 0 ? activeInq.calculatedPrice.toLocaleString() + ' €' : 'sur-mesure'}.\n\nPour finaliser la réservation, nous vous invitons à nous renvoyer le contrat de bail signé accompagné de l\'acompte de 50%.\n\nRestant à votre entière disposition,\nLa direction du Yéti.`
      );
    } else {
      setReplyText(
        `Bonjour ${activeInq.name},\n\nSuite à votre demande, nous aimerions vous proposer une remise commerciale de 10% sur les frais de ménage ou de petit-déjeuner pour votre séjour du ${activeInq.startDate} au ${activeInq.endDate}.\n\nN'hésitez pas à nous recontacter pour bloquer vos dates.\n\nCordialement,\nL'équipe du Yéti.`
      );
    }
  };

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Workspace Header */}
      <div className="bg-[#3C3C3B] text-white p-8 rounded-[32px] border border-white/5 shadow-xl mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2 text-[#D9D2C5]">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] font-sans">Simulateur d'Administration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif tracking-wide">Espace Propriétaire (Host Portal)</h2>
          <p className="text-xs text-stone-300 font-light mt-1">Explorez comment le propriétaire reçoit, évalue, et répond aux demandes des clients en temps réel.</p>
        </div>
        
        {/* Total Revenue badge */}
        <div className="bg-[#5A5A40] text-white px-6 py-4 rounded-2xl flex items-center gap-3 shadow-md border border-white/5">
          <DollarSign className="w-8 h-8 text-[#D9D2C5] shrink-0" />
          <div>
            <span className="block text-[10px] uppercase font-sans font-semibold tracking-widest text-[#D9D2C5]/80">Chiffre d'affaires estimé</span>
            <span className="text-2xl font-serif">{estimatedRevenue.toLocaleString()} €</span>
          </div>
        </div>
      </div>

      {/* Metrics Row Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white/80 rounded-[20px] p-5 border border-[#E6E2D3] shadow-xs text-left">
          <span className="text-[10px] text-[#8D7A5D] font-semibold uppercase tracking-wider block mb-1">Total Demandes</span>
          <div className="text-2xl font-serif text-[#3C3C3B]">{totalInquiries}</div>
        </div>
        <div className="bg-white/80 rounded-[20px] p-5 border border-[#E6E2D3] shadow-xs text-left">
          <span className="text-[10px] text-[#8D7A5D] font-semibold uppercase tracking-wider block mb-1">En attente (Pending)</span>
          <div className="text-2xl font-serif text-[#8D7A5D]">{pendingCount}</div>
        </div>
        <div className="bg-white/80 rounded-[20px] p-5 border border-[#E6E2D3] shadow-xs text-left">
          <span className="text-[10px] text-[#8D7A5D] font-semibold uppercase tracking-wider block mb-1">Validées (Approved)</span>
          <div className="text-2xl font-serif text-[#5A5A40]">{approvedCount}</div>
        </div>
        <div className="bg-white/80 rounded-[20px] p-5 border border-[#E6E2D3] shadow-xs text-left">
          <span className="text-[10px] text-[#8D7A5D] font-semibold uppercase tracking-wider block mb-1">Note de satisfaction</span>
          <div className="text-2xl font-serif text-[#8D7A5D]">4.9 / 5.0</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start text-left">
        
        {/* Left Column list (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-sm font-serif text-[#3C3C3B] uppercase tracking-wider mb-2">Historique des Messages ({inquiries.length})</h3>
          
          {inquiries.length > 0 ? (
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
              {inquiries.map((inq) => {
                const isSelected = inq.id === selectedInqId;
                return (
                  <div
                    key={inq.id}
                    onClick={() => { setSelectedInqId(inq.id); setReplyText(''); }}
                    className={`p-4 rounded-[20px] border transition-all cursor-pointer text-left ${
                      isSelected
                        ? 'bg-[#5A5A40]/5 border-[#5A5A40] shadow-sm scale-[1.01]'
                        : 'bg-white/60 border-[#E6E2D3] hover:border-stone-350 shadow-xs'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2.5">
                      <span className="text-xs font-serif text-[#3C3C3B] truncate max-w-[150px]">
                        {inq.name}
                      </span>
                      <span className={`text-[9px] font-semibold uppercase px-2 py-0.5 rounded-full ${
                        inq.status === 'approved'
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-500/10'
                          : inq.status === 'rejected'
                          ? 'bg-red-50 text-red-800 border border-red-500/10'
                          : 'bg-stone-100 text-stone-800 border border-[#E6E2D3]'
                      }`}>
                        {inq.status}
                      </span>
                    </div>

                    <p className="text-[11px] text-stone-500 font-light flex items-center gap-1.5 mb-2">
                       <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      <span>{inq.startDate} → {inq.endDate}</span>
                    </p>

                    <p className="text-xs text-stone-600 line-clamp-2 italic mb-2 font-light">
                      "{inq.message}"
                    </p>

                    <div className="flex justify-between items-center text-[10px] font-light text-stone-500">
                      <span>{inq.guests} personnes</span>
                      {inq.calculatedPrice > 0 && (
                        <span className="font-serif text-[#3C3C3B] text-xs">{inq.calculatedPrice.toLocaleString()} €</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 text-center text-stone-400 text-xs font-light uppercase tracking-wider">
              Aucun message ou devis trouvé. Soumettez le formulaire de réservation ci-dessus pour simuler un message !
            </div>
          )}
        </div>

        {/* Right Column workspace (7 cols) */}
        <div className="lg:col-span-7 bg-white/95 rounded-[24px] p-6 md:p-8 border border-[#E6E2D3] shadow-xs h-full flex flex-col justify-between">
          {activeInq ? (
            <div className="space-y-6">
              
              {/* Client Info Header */}
              <div className="flex justify-between items-start border-b border-[#E6E2D3]/40 pb-5">
                <div>
                  <h4 className="text-base font-serif text-[#3C3C3B]">{activeInq.name}</h4>
                  <a href={`mailto:${activeInq.email}`} className="text-xs font-light text-[#8D7A5D] hover:underline">{activeInq.email}</a>
                </div>
                
                {/* Visual Action trigger buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => onApprove(activeInq.id)}
                    className="p-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-500/10 transition-colors cursor-pointer"
                    title="Valider la Réservation"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onReject(activeInq.id)}
                    className="p-2 rounded-xl bg-red-50 text-red-700 hover:bg-red-100 border border-red-500/10 transition-colors cursor-pointer"
                    title="Rejeter / Annuler"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => { onDelete(activeInq.id); setSelectedInqId(null); }}
                    className="p-2 rounded-xl bg-stone-50 text-stone-500 hover:bg-red-50 hover:text-red-700 border border-stone-200/50 transition-colors cursor-pointer"
                    title="Supprimer l'historique"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Inq details */}
              <div className="bg-stone-50/50 rounded-2xl p-5 border border-[#E6E2D3]/60 space-y-3.5">
                <div className="grid sm:grid-cols-2 gap-4 text-xs font-light text-stone-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#8D7A5D]" />
                    <span>Séjour : du {activeInq.startDate} au {activeInq.endDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#8D7A5D]" />
                    <span>Voyageurs : {activeInq.guests} personnes</span>
                  </div>
                  {activeInq.calculatedPrice > 0 && (
                    <div className="flex items-center gap-2 col-span-2 text-stone-900 border-t border-[#E6E2D3]/35 pt-2">
                      <Euro className="w-4 h-4 text-[#8D7A5D]" />
                      <span className="font-light">Montant de la simulation : <span className="text-[#3C3C3B] font-serif font-semibold">{activeInq.calculatedPrice.toLocaleString()} €</span></span>
                    </div>
                  )}
                </div>

                <div className="border-t border-[#E6E2D3]/35 pt-3">
                  <span className="block text-[10px] text-stone-400 font-semibold uppercase tracking-widest mb-1">Message d'origine</span>
                  <p className="text-xs text-stone-600 leading-relaxed font-serif font-light italic">
                    "{activeInq.message}"
                  </p>
                </div>
              </div>

              {/* Chat replies log thread */}
              {(sentReplies[activeInq.id] || []).length > 0 && (
                <div className="space-y-2.5">
                  <span className="block text-[10px] text-stone-400 font-semibold uppercase tracking-widest">Réponses envoyées ({sentReplies[activeInq.id].length})</span>
                  {sentReplies[activeInq.id].map((rep, index) => (
                    <div key={index} className="bg-[#E6E2D3]/20 border border-[#E6E2D3]/30 rounded-2xl p-4 text-xs text-stone-700 leading-relaxed font-light self-end">
                      <p className="whitespace-pre-wrap">{rep}</p>
                      <span className="block text-[9px] text-[#5A5A40] font-semibold mt-2 text-right">✓ Envoyé par Simulation Propriétaire</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Quick response buttons or full text form */}
              <form onSubmit={(e) => handleSendResponse(e, activeInq.id)} className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="block text-[10px] text-stone-400 font-semibold uppercase tracking-widest">Composer un email de réponse</span>
                  
                  {/* Quick templates loaders */}
                  <div className="flex gap-2 text-[10px] font-semibold">
                    <button 
                      type="button" 
                      onClick={() => loadResponseTemplate('approve')}
                      className="text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-lg"
                    >
                      Modèle Acceptation
                    </button>
                    <button 
                      type="button" 
                      onClick={() => loadResponseTemplate('discount')}
                      className="text-[#8D7A5D] bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-lg"
                    >
                      Offrir Promo
                    </button>
                  </div>
                </div>

                <textarea
                  required
                  rows={6}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Saisissez votre message au locataire ici (ex: confirmation des tarifs, heure d'arrivée, modalités d'acompte...)"
                  className="w-full bg-stone-50 border border-[#E6E2D3]/70 text-[#3C3C3B] rounded-[20px] p-4 focus:outline-none focus:border-[#5A5A40] text-xs font-light placeholder:text-stone-400 leading-relaxed"
                />

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="bg-[#5A5A40] hover:bg-[#4a4a34] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5 text-[#D9D2C5]" />
                    <span>Envoyer la réponse</span>
                  </button>
                </div>
              </form>

            </div>
          ) : (
            <div className="text-center py-24 text-stone-400 flex flex-col items-center gap-3">
              <Mail className="w-12 h-12 text-stone-200" />
              <p className="text-xs font-semibold uppercase tracking-wider leading-relaxed">
                Sélectionnez un message ou devis client dans le panneau de gauche pour commencer à y répondre et évaluer le contrat.
              </p>
            </div>
          )}
        </div>

      </div>

    </section>
  );
}
