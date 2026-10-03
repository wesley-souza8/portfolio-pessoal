import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Clock, Check, Video, ArrowRight } from 'lucide-react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('2026-10-06');
  const [selectedTime, setSelectedTime] = useState('14:00');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const availableTimes = ['10:00', '11:30', '14:00', '15:30', '17:00'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#171717] border border-[#494454]/40 rounded-2xl shadow-2xl overflow-hidden text-[#e5e2e1]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#494454]/30 bg-[#1c1b1b]">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-[#d0bcff]" />
            <h3 className="text-sm font-semibold text-white">
              Agendamento de Conversa Técnica (30 min)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#cbc3d7] hover:text-white hover:bg-[#2a2a2a] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isBooked ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#201f1f] border border-[#494454]/30 text-xs text-[#cbc3d7]">
                <Clock className="w-4 h-4 text-[#d0bcff] shrink-0" />
                <span>
                  30 minutos de alinhamento sobre oportunidades, desafios de arquitetura ou projetos de alta performance via Google Meet.
                </span>
              </div>

              {/* Date & Time selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#cbc3d7] mb-1">Data</label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-[#1c1b1b] border border-[#494454]/40 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d0bcff]"
                  >
                    <option value="2026-10-06">Terça-feira, 06 Out</option>
                    <option value="2026-10-07">Quarta-feira, 07 Out</option>
                    <option value="2026-10-08">Quinta-feira, 08 Out</option>
                    <option value="2026-10-09">Sexta-feira, 09 Out</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#cbc3d7] mb-1">Horário (BRT / UTC-3)</label>
                  <div className="flex flex-wrap gap-1.5">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`px-2.5 py-1.5 rounded text-xs font-mono cursor-pointer transition-colors ${
                          selectedTime === time
                            ? 'bg-[#d0bcff] text-[#3c0091] font-semibold'
                            : 'bg-[#201f1f] text-[#cbc3d7] hover:bg-[#2a2a2a] border border-[#494454]/30'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-mono text-[#cbc3d7] mb-1">Seu Nome *</label>
                  <input
                    type="text"
                    required
                    placeholder="Alexandre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#1c1b1b] border border-[#494454]/40 rounded-lg px-3 py-2 text-xs text-white placeholder:text-[#958ea0] focus:outline-none focus:border-[#d0bcff]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#cbc3d7] mb-1">Seu E-mail *</label>
                  <input
                    type="email"
                    required
                    placeholder="voce@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#1c1b1b] border border-[#494454]/40 rounded-lg px-3 py-2 text-xs text-white placeholder:text-[#958ea0] focus:outline-none focus:border-[#d0bcff]"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-mono text-[#cbc3d7] mb-1">Pauta / Tópico</label>
                <textarea
                  rows={2}
                  placeholder="Ex: Discussão sobre liderança técnica em arquitetura Next.js..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#1c1b1b] border border-[#494454]/40 rounded-lg px-3 py-2 text-xs text-white placeholder:text-[#958ea0] focus:outline-none focus:border-[#d0bcff] resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#d0bcff] text-[#3c0091] font-medium text-xs hover:bg-[#d0bcff]/90 transition-all shadow-[0_0_16px_rgba(208,188,255,0.2)] cursor-pointer"
                >
                  Confirmar Agendamento de 30min
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-base font-semibold text-white">Reunião Agendada com Sucesso!</h4>
              <p className="text-xs text-[#cbc3d7] max-w-md mx-auto">
                Enviamos os detalhes do convite e o link do Google Meet para <strong className="text-white">{email}</strong>.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#201f1f] text-xs font-mono text-[#d0bcff] border border-[#494454]/30">
                <Video className="w-3.5 h-3.5" />
                <span>{selectedDate} às {selectedTime} BRT</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-lg bg-[#2a2a2a] text-xs text-white hover:bg-[#353534] cursor-pointer"
                >
                  Fechar Janela
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
