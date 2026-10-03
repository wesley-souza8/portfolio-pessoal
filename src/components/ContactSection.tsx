import React, { useState } from 'react';
import { Mail, MapPin, Calendar, Send, Check, Copy } from 'lucide-react';

interface ContactSectionProps {
  onOpenCalendly: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCalendly }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tipo, setTipo] = useState('fulltime');
  const [mensagem, setMensagem] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !email || !mensagem) return;

    setSubmitted(true);
    setTimeout(() => {
      setNome('');
      setEmail('');
      setMensagem('');
    }, 1000);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('contato@dev.io');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section className="pt-6" id="contato">
      <div className="card-rim rounded-2xl p-6 md:p-10 border border-[#494454]/30 relative overflow-hidden">
        {/* Glowing gradient accent inside box */}
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#a078ff]/10 blur-[80px] pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          {/* Informações de Contato (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] text-[#d0bcff] tracking-wider uppercase font-semibold">
                // DISPONIBILIDADE
              </span>
              <h3 className="text-[26px] sm:text-[32px] font-semibold text-[#e5e2e1] tracking-tight leading-tight">
                Vamos construir algo incrível juntos?
              </h3>
              <p className="text-[14px] text-[#cbc3d7] leading-relaxed">
                Seja para posições seniores full-time, consultorias pontuais de arquitetura ou projetos
                desafiadores do zero, minha caixa de entrada está sempre aberta.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-[13px]">
              {/* Email with copy */}
              <div className="flex items-center gap-2 text-[#e5e2e1]">
                <Mail className="w-4 h-4 text-[#d0bcff]" />
                <a
                  className="hover:text-[#d0bcff] transition-colors"
                  href="mailto:contato@dev.io"
                >
                  contato@dev.io
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 rounded text-[#958ea0] hover:text-[#d0bcff] text-xs cursor-pointer"
                  title="Copiar e-mail"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-[#cbc3d7]">
                <MapPin className="w-4 h-4 text-[#958ea0]" />
                <span>São Paulo, Brasil (UTC-3) • Disponível Remoto</span>
              </div>

              {/* Calendly Booking */}
              <div className="flex items-center gap-2 text-[#cbc3d7]">
                <Calendar className="w-4 h-4 text-[#c0c1ff]" />
                <button
                  onClick={onOpenCalendly}
                  className="text-[#c0c1ff] hover:underline cursor-pointer text-left font-medium"
                >
                  Agendar 30min no Calendly →
                </button>
              </div>
            </div>
          </div>

          {/* Minimalist Form (7 cols) */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 flex flex-col gap-3.5 bg-[#0e0e0e]/70 p-5 md:p-6 rounded-xl border border-[#494454]/30"
          >
            {submitted ? (
              <div className="p-8 text-center space-y-3 my-auto">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-semibold text-white">Mensagem Enviada com Sucesso!</h4>
                <p className="text-xs text-[#cbc3d7]">
                  Obrigado pelo contato. Responderei no e-mail informado dentro de algumas horas.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs text-[#d0bcff] hover:underline cursor-pointer"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-[11px] text-[#cbc3d7]" htmlFor="nome">
                      Nome
                    </label>
                    <input
                      className="bg-[#1c1b1b] border border-[#494454]/40 rounded-lg px-3 py-2 text-[#e5e2e1] placeholder:text-[#958ea0] text-[13px] focus:outline-none focus:border-[#d0bcff] focus:ring-1 focus:ring-[#d0bcff] transition-all"
                      id="nome"
                      placeholder="Alexandre Silva"
                      required
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-[11px] text-[#cbc3d7]" htmlFor="email">
                      E-mail
                    </label>
                    <input
                      className="bg-[#1c1b1b] border border-[#494454]/40 rounded-lg px-3 py-2 text-[#e5e2e1] placeholder:text-[#958ea0] text-[13px] focus:outline-none focus:border-[#d0bcff] focus:ring-1 focus:ring-[#d0bcff] transition-all"
                      id="email"
                      placeholder="alexandre@empresa.com"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[11px] text-[#cbc3d7]" htmlFor="tipo">
                    Tipo de Oportunidade
                  </label>
                  <select
                    className="bg-[#1c1b1b] border border-[#494454]/40 rounded-lg px-3 py-2 text-[#e5e2e1] text-[13px] focus:outline-none focus:border-[#d0bcff] focus:ring-1 focus:ring-[#d0bcff] transition-all"
                    id="tipo"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                  >
                    <option value="fulltime">Contratação Full-time / Tech Lead</option>
                    <option value="consultoria">Consultoria de Arquitetura & Performance</option>
                    <option value="freelance">Desenvolvimento de MVP / Produto</option>
                    <option value="outro">Outro assunto</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[11px] text-[#cbc3d7]" htmlFor="mensagem">
                    Mensagem
                  </label>
                  <textarea
                    className="bg-[#1c1b1b] border border-[#494454]/40 rounded-lg px-3 py-2 text-[#e5e2e1] placeholder:text-[#958ea0] text-[13px] focus:outline-none focus:border-[#d0bcff] focus:ring-1 focus:ring-[#d0bcff] transition-all resize-none"
                    id="mensagem"
                    placeholder="Fale um pouco sobre o projeto, escopo ou time..."
                    required
                    rows={3}
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                  />
                </div>

                <button
                  className="h-10 mt-1 rounded-lg bg-[#d0bcff] text-[#3c0091] text-[13px] font-medium flex items-center justify-center gap-2 hover:bg-[#d0bcff]/90 transition-all duration-200 active:scale-95 shadow-[0_0_20px_rgba(208,188,255,0.25)] cursor-pointer"
                  type="submit"
                >
                  <span>Enviar Mensagem</span>
                  <Send className="w-4 h-4" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
