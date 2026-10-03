import { Project, SkillCategory, TimelineItem } from '../types/portfolio';

// High-fidelity SVG direct data URLs for guaranteed zero-broken-image display in any sandbox
const pulseDashboardSvg = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675" fill="#0e0e0e">
  <rect width="1200" height="675" fill="#0d0d11"/>
  <!-- Top bar -->
  <rect x="0" y="0" width="1200" height="52" fill="#15151c" stroke="#252433" stroke-width="1"/>
  <circle cx="28" cy="26" r="6" fill="#ef4444"/>
  <circle cx="48" cy="26" r="6" fill="#eab308"/>
  <circle cx="68" cy="26" r="6" fill="#22c55e"/>
  <text x="96" y="31" fill="#cbc3d7" font-family="JetBrains Mono, monospace" font-size="13" font-weight="600">pulse-analytics.internal // cluster-us-east-1</text>
  <rect x="1040" y="14" width="130" height="24" rx="12" fill="#22c55e1a" stroke="#22c55e44" stroke-width="1"/>
  <circle cx="1055" cy="26" r="4" fill="#22c55e"/>
  <text x="1066" y="31" fill="#4ade80" font-family="JetBrains Mono, monospace" font-size="11">STREAM LIVE</text>
  
  <!-- Left mini sidebar -->
  <rect x="0" y="52" width="64" height="623" fill="#111116" stroke="#252433" stroke-width="1"/>
  <rect x="16" y="74" width="32" height="32" rx="8" fill="#d0bcff22" stroke="#d0bcff" stroke-width="1"/>
  <circle cx="32" cy="90" r="6" fill="#d0bcff"/>
  <rect x="16" y="126" width="32" height="32" rx="8" fill="#201f28"/>
  <rect x="16" y="174" width="32" height="32" rx="8" fill="#201f28"/>

  <!-- Metric row -->
  <g transform="translate(88, 76)">
    <rect x="0" y="0" width="240" height="88" rx="10" fill="#181822" stroke="#2e2b3d" stroke-width="1"/>
    <text x="20" y="28" fill="#958ea0" font-family="JetBrains Mono, monospace" font-size="11">GLOBAL INGESTION</text>
    <text x="20" y="62" fill="#ffffff" font-family="Geist, sans-serif" font-size="28" font-weight="700">1.84M <tspan fill="#d0bcff" font-size="14">msg/s</tspan></text>
    
    <rect x="260" y="0" width="240" height="88" rx="10" fill="#181822" stroke="#2e2b3d" stroke-width="1"/>
    <text x="280" y="28" fill="#958ea0" font-family="JetBrains Mono, monospace" font-size="11">P99 WEBGL LATENCY</text>
    <text x="280" y="62" fill="#ffffff" font-family="Geist, sans-serif" font-size="28" font-weight="700">11.4 <tspan fill="#4ade80" font-size="14">ms</tspan></text>
    
    <rect x="520" y="0" width="240" height="88" rx="10" fill="#181822" stroke="#2e2b3d" stroke-width="1"/>
    <text x="540" y="28" fill="#958ea0" font-family="JetBrains Mono, monospace" font-size="11">ACTIVE CONSUMERS</text>
    <text x="540" y="62" fill="#ffffff" font-family="Geist, sans-serif" font-size="28" font-weight="700">64 / 64 <tspan fill="#c0c1ff" font-size="14">healthy</tspan></text>
    
    <rect x="780" y="0" width="280" height="88" rx="10" fill="#181822" stroke="#2e2b3d" stroke-width="1"/>
    <text x="800" y="28" fill="#958ea0" font-family="JetBrains Mono, monospace" font-size="11">FRAME TIME BUDGET</text>
    <text x="800" y="62" fill="#ffffff" font-family="Geist, sans-serif" font-size="28" font-weight="700">16.6ms <tspan fill="#d0bcff" font-size="14">(60 FPS)</tspan></text>
  </g>

  <!-- Big WebGL Canvas Graph -->
  <g transform="translate(88, 184)">
    <rect x="0" y="0" width="1060" height="440" rx="12" fill="#14141d" stroke="#2e2b3d" stroke-width="1"/>
    <text x="24" y="36" fill="#e5e2e1" font-family="Geist, sans-serif" font-size="16" font-weight="600">Telemetry Stream Histogram // Buffer: 64,000 Nodes</text>
    <text x="24" y="58" fill="#958ea0" font-family="JetBrains Mono, monospace" font-size="11">Rendered with Hardware Accelerated WebGL Shader Context</text>

    <!-- Grid lines -->
    <line x1="24" y1="90" x2="1036" y2="90" stroke="#252433" stroke-dasharray="4 4"/>
    <line x1="24" y1="160" x2="1036" y2="160" stroke="#252433" stroke-dasharray="4 4"/>
    <line x1="24" y1="230" x2="1036" y2="230" stroke="#252433" stroke-dasharray="4 4"/>
    <line x1="24" y1="300" x2="1036" y2="300" stroke="#252433" stroke-dasharray="4 4"/>
    <line x1="24" y1="370" x2="1036" y2="370" stroke="#252433"/>

    <!-- Glowing Area Gradient & Curve -->
    <defs>
      <linearGradient id="violetGlow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#a078ff" stop-opacity="0.45"/>
        <stop offset="100%" stop-color="#a078ff" stop-opacity="0.0"/>
      </linearGradient>
      <linearGradient id="cyanGlow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.0"/>
      </linearGradient>
    </defs>

    <path d="M 40 370 Q 120 220, 220 270 T 400 160 T 560 210 T 720 120 T 900 180 T 1030 110 L 1030 370 Z" fill="url(#violetGlow)"/>
    <path d="M 40 370 Q 120 220, 220 270 T 400 160 T 560 210 T 720 120 T 900 180 T 1030 110" fill="none" stroke="#d0bcff" stroke-width="3"/>
    
    <!-- Spark points -->
    <circle cx="400" cy="160" r="5" fill="#ffffff" stroke="#a078ff" stroke-width="3"/>
    <circle cx="720" cy="120" r="5" fill="#ffffff" stroke="#a078ff" stroke-width="3"/>
    <circle cx="1030" cy="110" r="5" fill="#ffffff" stroke="#a078ff" stroke-width="3"/>

    <!-- Tooltip on peak -->
    <rect x="650" y="60" width="140" height="42" rx="6" fill="#201f2c" stroke="#d0bcff" stroke-width="1"/>
    <text x="664" y="80" fill="#cbc3d7" font-family="JetBrains Mono, monospace" font-size="11">Peak: 2.14M msg</text>
    <text x="664" y="94" fill="#4ade80" font-family="JetBrains Mono, monospace" font-size="10">Zero dropped frames</text>
  </g>
</svg>
`)}`;

const novaCommerceSvg = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675" fill="#0e0e0e">
  <rect width="1200" height="675" fill="#0d0e12"/>
  <!-- Top bar -->
  <rect x="0" y="0" width="1200" height="52" fill="#14161f" stroke="#252a3b" stroke-width="1"/>
  <circle cx="28" cy="26" r="6" fill="#ef4444"/>
  <circle cx="48" cy="26" r="6" fill="#eab308"/>
  <circle cx="68" cy="26" r="6" fill="#22c55e"/>
  <text x="96" y="31" fill="#c0c1ff" font-family="JetBrains Mono, monospace" font-size="13" font-weight="600">nova-commerce-engine // black-friday-live-run</text>
  <rect x="1000" y="14" width="170" height="24" rx="12" fill="#6366f11a" stroke="#6366f155" stroke-width="1"/>
  <circle cx="1015" cy="26" r="4" fill="#818cf8"/>
  <text x="1026" y="31" fill="#c0c1ff" font-family="JetBrains Mono, monospace" font-size="11">ZERO DOWNTIME SLA</text>

  <!-- Left Navigation -->
  <rect x="0" y="52" width="220" height="623" fill="#11131a" stroke="#252a3b" stroke-width="1"/>
  <text x="24" y="88" fill="#818cf8" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600">CHECKOUT PIPELINE</text>
  <rect x="16" y="104" width="188" height="36" rx="8" fill="#1e2230" stroke="#3b4261" stroke-width="1"/>
  <text x="32" y="126" fill="#ffffff" font-family="Geist, sans-serif" font-size="13" font-weight="500">Live Orders Engine</text>
  <text x="32" y="166" fill="#958ea0" font-family="Geist, sans-serif" font-size="13">Inventory Sharding</text>
  <text x="32" y="202" fill="#958ea0" font-family="Geist, sans-serif" font-size="13">Regional Edge Cache</text>
  <text x="32" y="238" fill="#958ea0" font-family="Geist, sans-serif" font-size="13">Redis Mutex Locks</text>

  <!-- Main Content -->
  <g transform="translate(244, 76)">
    <!-- Metrics 3 columns -->
    <rect x="0" y="0" width="290" height="96" rx="10" fill="#171a24" stroke="#2c3349" stroke-width="1"/>
    <text x="20" y="32" fill="#958ea0" font-family="JetBrains Mono, monospace" font-size="11">CHECKOUT RESPONSE TIME</text>
    <text x="20" y="68" fill="#ffffff" font-family="Geist, sans-serif" font-size="32" font-weight="700">58 <tspan fill="#c0c1ff" font-size="16">ms</tspan></text>

    <rect x="310" y="0" width="290" height="96" rx="10" fill="#171a24" stroke="#2c3349" stroke-width="1"/>
    <text x="330" y="32" fill="#958ea0" font-family="JetBrains Mono, monospace" font-size="11">CONCURRENT TRANSACTIONS</text>
    <text x="330" y="68" fill="#ffffff" font-family="Geist, sans-serif" font-size="32" font-weight="700">14,280 <tspan fill="#4ade80" font-size="14">tps</tspan></text>

    <rect x="620" y="0" width="310" height="96" rx="10" fill="#171a24" stroke="#2c3349" stroke-width="1"/>
    <text x="640" y="32" fill="#958ea0" font-family="JetBrains Mono, monospace" font-size="11">REDIS LOCK CONTENTION</text>
    <text x="640" y="68" fill="#ffffff" font-family="Geist, sans-serif" font-size="32" font-weight="700">0.002% <tspan fill="#c0c1ff" font-size="14">atomic</tspan></text>

    <!-- Table of processed orders -->
    <rect x="0" y="120" width="930" height="430" rx="12" fill="#151822" stroke="#2c3349" stroke-width="1"/>
    <text x="24" y="156" fill="#ffffff" font-family="Geist, sans-serif" font-size="16" font-weight="600">Distributed Order Transactions Log</text>
    
    <!-- Table Header -->
    <line x1="24" y1="180" x2="906" y2="180" stroke="#2a3045"/>
    <text x="30" y="202" fill="#958ea0" font-family="JetBrains Mono, monospace" font-size="11">TX HASH</text>
    <text x="240" y="202" fill="#958ea0" font-family="JetBrains Mono, monospace" font-size="11">INVENTORY ID</text>
    <text x="440" y="202" fill="#958ea0" font-family="JetBrains Mono, monospace" font-size="11">EDGE REGION</text>
    <text x="620" y="202" fill="#958ea0" font-family="JetBrains Mono, monospace" font-size="11">LATENCY</text>
    <text x="780" y="202" fill="#958ea0" font-family="JetBrains Mono, monospace" font-size="11">STATUS</text>
    <line x1="24" y1="218" x2="906" y2="218" stroke="#2a3045"/>

    <!-- Row 1 -->
    <text x="30" y="250" fill="#c0c1ff" font-family="JetBrains Mono, monospace" font-size="12">0x9f4a...e12d</text>
    <text x="240" y="250" fill="#e5e2e1" font-family="Geist, sans-serif" font-size="13">SKU-BR-SP-4890</text>
    <text x="440" y="250" fill="#cbc3d7" font-family="Geist, sans-serif" font-size="13">sa-east-1 (SP)</text>
    <text x="620" y="250" fill="#4ade80" font-family="JetBrains Mono, monospace" font-size="12">44ms</text>
    <rect x="780" y="236" width="70" height="20" rx="4" fill="#22c55e22"/>
    <text x="792" y="250" fill="#4ade80" font-family="JetBrains Mono, monospace" font-size="10">200_OK</text>
    
    <!-- Row 2 -->
    <text x="30" y="292" fill="#c0c1ff" font-family="JetBrains Mono, monospace" font-size="12">0x3b81...09ac</text>
    <text x="240" y="292" fill="#e5e2e1" font-family="Geist, sans-serif" font-size="13">SKU-US-VA-9901</text>
    <text x="440" y="292" fill="#cbc3d7" font-family="Geist, sans-serif" font-size="13">us-east-1 (VA)</text>
    <text x="620" y="292" fill="#4ade80" font-family="JetBrains Mono, monospace" font-size="12">52ms</text>
    <rect x="780" y="278" width="70" height="20" rx="4" fill="#22c55e22"/>
    <text x="792" y="292" fill="#4ade80" font-family="JetBrains Mono, monospace" font-size="10">200_OK</text>

    <!-- Row 3 -->
    <text x="30" y="334" fill="#c0c1ff" font-family="JetBrains Mono, monospace" font-size="12">0x7c12...44f9</text>
    <text x="240" y="334" fill="#e5e2e1" font-family="Geist, sans-serif" font-size="13">SKU-EU-FR-2180</text>
    <text x="440" y="334" fill="#cbc3d7" font-family="Geist, sans-serif" font-size="13">eu-central-1 (FR)</text>
    <text x="620" y="334" fill="#4ade80" font-family="JetBrains Mono, monospace" font-size="12">49ms</text>
    <rect x="780" y="320" width="70" height="20" rx="4" fill="#22c55e22"/>
    <text x="792" y="334" fill="#4ade80" font-family="JetBrains Mono, monospace" font-size="10">200_OK</text>
  </g>
</svg>
`)}`;

const cloudArchitectureSvg = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675" fill="#0e0e0e">
  <rect width="1200" height="675" fill="#0f0f14"/>
  <rect x="40" y="30" width="1120" height="615" rx="16" fill="#14141e" stroke="#2e2b3d" stroke-width="1"/>
  
  <text x="70" y="75" fill="#ffffff" font-family="Geist, sans-serif" font-size="22" font-weight="700">Aether Distributed Mesh // Architecture Blueprint</text>
  <text x="70" y="98" fill="#958ea0" font-family="JetBrains Mono, monospace" font-size="12">Multi-Region Edge Routing · SQS Telemetry Queue · ClickHouse Aggregation</text>

  <!-- Nodes Layout -->
  <!-- Edge Node -->
  <rect x="80" y="160" width="220" height="130" rx="10" fill="#1e1c2b" stroke="#a078ff" stroke-width="1.5"/>
  <text x="100" y="195" fill="#d0bcff" font-family="JetBrains Mono, monospace" font-size="12" font-weight="600">EDGE CDN / ROUTER</text>
  <text x="100" y="222" fill="#e5e2e1" font-family="Geist, sans-serif" font-size="14">Cloudflare Workers</text>
  <text x="100" y="244" fill="#958ea0" font-family="Geist, sans-serif" font-size="12">Anycast TLS Termination</text>
  <text x="100" y="266" fill="#4ade80" font-family="JetBrains Mono, monospace" font-size="11">Avg Latency &lt; 18ms</text>

  <!-- Arrow -->
  <line x1="300" y1="225" x2="420" y2="225" stroke="#d0bcff" stroke-width="2" stroke-dasharray="6 4"/>
  <polygon points="420,225 410,220 410,230" fill="#d0bcff"/>

  <!-- API Gateway -->
  <rect x="420" y="160" width="220" height="130" rx="10" fill="#1e1c2b" stroke="#6366f1" stroke-width="1.5"/>
  <text x="440" y="195" fill="#c0c1ff" font-family="JetBrains Mono, monospace" font-size="12" font-weight="600">API GATEWAY / AUTH</text>
  <text x="440" y="222" fill="#e5e2e1" font-family="Geist, sans-serif" font-size="14">NestJS Microservices</text>
  <text x="440" y="244" fill="#958ea0" font-family="Geist, sans-serif" font-size="12">JWT &amp; Rate-Limiting</text>
  <text x="440" y="266" fill="#4ade80" font-family="JetBrains Mono, monospace" font-size="11">100k Req/min</text>

  <!-- Arrow -->
  <line x1="640" y1="225" x2="760" y2="225" stroke="#6366f1" stroke-width="2" stroke-dasharray="6 4"/>
  <polygon points="760,225 750,220 750,230" fill="#6366f1"/>

  <!-- Kafka Ingestion -->
  <rect x="760" y="160" width="260" height="130" rx="10" fill="#1e1c2b" stroke="#22c55e" stroke-width="1.5"/>
  <text x="780" y="195" fill="#86efac" font-family="JetBrains Mono, monospace" font-size="12" font-weight="600">EVENT BROKER (KAFKA)</text>
  <text x="780" y="222" fill="#e5e2e1" font-family="Geist, sans-serif" font-size="14">Partition Sharding (32)</text>
  <text x="780" y="244" fill="#958ea0" font-family="Geist, sans-serif" font-size="12">Zero-copy Buffer Serialization</text>
  <text x="780" y="266" fill="#4ade80" font-family="JetBrains Mono, monospace" font-size="11">Throughput: 1.2 GB/s</text>

  <!-- Bottom Data Layer -->
  <rect x="180" y="380" width="340" height="160" rx="10" fill="#1b1c26" stroke="#494454" stroke-width="1"/>
  <text x="210" y="415" fill="#d0bcff" font-family="JetBrains Mono, monospace" font-size="13" font-weight="600">POSTGRESQL + DRIZZLE ORM</text>
  <text x="210" y="445" fill="#e5e2e1" font-family="Geist, sans-serif" font-size="13">Read Replicas com pooling Supabase/Neon</text>
  <text x="210" y="470" fill="#958ea0" font-family="Geist, sans-serif" font-size="12">Prepared Statements em tempo &lt; 3ms</text>
  <text x="210" y="500" fill="#4ade80" font-family="JetBrains Mono, monospace" font-size="11">ACID Guarantees // Multi-AZ</text>

  <rect x="620" y="380" width="340" height="160" rx="10" fill="#1b1c26" stroke="#494454" stroke-width="1"/>
  <text x="650" y="415" fill="#cebdff" font-family="JetBrains Mono, monospace" font-size="13" font-weight="600">REDIS &amp; CLICKHOUSE ANALYTICS</text>
  <text x="650" y="445" fill="#e5e2e1" font-family="Geist, sans-serif" font-size="13">Cache distribuído com invalidação pontual</text>
  <text x="650" y="470" fill="#958ea0" font-family="Geist, sans-serif" font-size="12">ClickHouse Columnar Storage (10B rows)</text>
  <text x="650" y="500" fill="#4ade80" font-family="JetBrains Mono, monospace" font-size="11">P95 Query Time: 24ms</text>
</svg>
`)}`;

export const initialProjects: Project[] = [
  {
    id: 'pulse-analytics',
    title: 'Pulse Analytics — Plataforma de Observabilidade em Tempo Real',
    category: 'OBSERVABILIDADE DISTRIBUÍDA',
    iconName: 'insights',
    accentColor: '#d0bcff',
    description:
      'Redução de 45% na latência de monitoramento de microserviços com streaming de dados em tempo real e visualização de métricas em WebGL. Processamento massivo de telemetria sem bloqueio de renderização do browser.',
    techBadges: [
      'React 19',
      'Next.js App Router',
      'Tailwind CSS',
      'TypeScript',
      'Apache Kafka',
      'ClickHouse',
    ],
    repoUrl: 'https://github.com/developer/pulse-analytics',
    liveUrl: 'https://pulse-analytics-demo.internal',
    codeSnippet: {
      filename: 'metrics-stream.worker.ts',
      language: 'typescript',
      rawCode: `import { KafkaConsumer } from '@pulse/stream';
import { renderWebGLChart } from '@pulse/canvas';

export const observeNodes = async () => {
  const stream = new KafkaConsumer({
    bufferSize: 64_000,
    flushIntervalMs: 16 // 60fps frame rate
  });
  
  stream.on('telemetry', (data) => {
    renderWebGLChart(data.histogram);
  });
};`,
      lines: [
        {
          num: 1,
          tokens: [
            { text: 'import', colorClass: 'text-[#d0bcff]' },
            { text: ' { KafkaConsumer } ', colorClass: 'text-[#e5e2e1]' },
            { text: 'from', colorClass: 'text-[#d0bcff]' },
            { text: " '@pulse/stream';", colorClass: 'text-[#c0c1ff]' },
          ],
        },
        {
          num: 2,
          tokens: [
            { text: 'import', colorClass: 'text-[#d0bcff]' },
            { text: ' { renderWebGLChart } ', colorClass: 'text-[#e5e2e1]' },
            { text: 'from', colorClass: 'text-[#d0bcff]' },
            { text: " '@pulse/canvas';", colorClass: 'text-[#c0c1ff]' },
          ],
        },
        {
          num: 3,
          tokens: [{ text: '', colorClass: 'text-[#958ea0]' }],
        },
        {
          num: 4,
          tokens: [
            { text: 'export const ', colorClass: 'text-[#d0bcff]' },
            { text: 'observeNodes', colorClass: 'text-[#cebdff]' },
            { text: ' = ', colorClass: 'text-[#e5e2e1]' },
            { text: 'async', colorClass: 'text-[#d0bcff]' },
            { text: ' () => {', colorClass: 'text-[#e5e2e1]' },
          ],
        },
        {
          num: 5,
          tokens: [
            { text: '  const stream = ', colorClass: 'text-[#e5e2e1]' },
            { text: 'new', colorClass: 'text-[#d0bcff]' },
            { text: ' KafkaConsumer({', colorClass: 'text-[#e5e2e1]' },
          ],
        },
        {
          num: 6,
          tokens: [
            { text: '    bufferSize: ', colorClass: 'text-[#e5e2e1]' },
            { text: '64_000', colorClass: 'text-[#c0c1ff]' },
            { text: ',', colorClass: 'text-[#e5e2e1]' },
          ],
        },
        {
          num: 7,
          tokens: [
            { text: '    flushIntervalMs: ', colorClass: 'text-[#e5e2e1]' },
            { text: '16', colorClass: 'text-[#c0c1ff]' },
            { text: ' // 60fps frame rate', colorClass: 'text-[#958ea0]' },
          ],
        },
        {
          num: 8,
          tokens: [{ text: '  });', colorClass: 'text-[#e5e2e1]' }],
        },
        {
          num: 9,
          tokens: [{ text: '', colorClass: 'text-[#958ea0]' }],
        },
        {
          num: 10,
          tokens: [
            { text: '  stream.on(', colorClass: 'text-[#e5e2e1]' },
            { text: "'telemetry'", colorClass: 'text-[#c0c1ff]' },
            { text: ', (', colorClass: 'text-[#e5e2e1]' },
            { text: 'data', colorClass: 'text-[#e5e2e1]' },
            { text: ') => {', colorClass: 'text-[#e5e2e1]' },
          ],
        },
        {
          num: 11,
          tokens: [
            { text: '    renderWebGLChart(', colorClass: 'text-[#e5e2e1]' },
            { text: 'data.histogram', colorClass: 'text-[#cebdff]' },
            { text: ');', colorClass: 'text-[#e5e2e1]' },
          ],
        },
        {
          num: 12,
          tokens: [{ text: '  });', colorClass: 'text-[#e5e2e1]' }],
        },
        {
          num: 13,
          tokens: [{ text: '};', colorClass: 'text-[#e5e2e1]' }],
        },
      ],
    },
    screens: [
      {
        id: 'pulse-screen-1',
        title: 'Painel Geral de Telemetria WebGL',
        description: 'Visualização de 64.000 nós simultâneos a 60 FPS com buffers em hardware acelerado.',
        directImageUrl: pulseDashboardSvg,
        aspectRatio: '16:9',
      },
      {
        id: 'pulse-screen-2',
        title: 'Topologia Distribuída & Latência P99',
        description: 'Mapeamento de nós de microserviços e monitoramento contínuo de gargalos de rede.',
        directImageUrl: cloudArchitectureSvg,
        aspectRatio: '16:9',
      },
    ],
  },
  {
    id: 'nova-commerce',
    title: 'Nova Commerce — Motor Headless de E-commerce B2B',
    category: 'ENTERPRISE HEADLESS COMMERCE',
    iconName: 'shopping_bag',
    accentColor: '#c0c1ff',
    description:
      'Arquitetura serverless e edge caching garantindo tempo de resposta de 60ms e processamento de checkout com zero downtime durante a Black Friday. Catálogo modular e suporte a múltiplos estoques regionais.',
    techBadges: [
      'Node.js',
      'GraphQL',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Tailwind CSS',
    ],
    repoUrl: 'https://github.com/developer/nova-commerce',
    liveUrl: 'https://nova-commerce.internal',
    codeSnippet: {
      filename: 'checkout-engine.service.ts',
      language: 'typescript',
      rawCode: `@Injectable()
export class CheckoutEngine {
  async processOrder(order: OrderPayload) {
    await this.redis.lock(order.inventoryId);
    
    const tx = await this.db.transaction();
    const receipt = await tx.commit(order);
    
    return { status: '200_OK', timeMs: 58 };
  }
}`,
      lines: [
        {
          num: 1,
          tokens: [
            { text: '@Injectable', colorClass: 'text-[#d0bcff]' },
            { text: '()', colorClass: 'text-[#e5e2e1]' },
          ],
        },
        {
          num: 2,
          tokens: [
            { text: 'export class ', colorClass: 'text-[#d0bcff]' },
            { text: 'CheckoutEngine', colorClass: 'text-[#cebdff]' },
            { text: ' {', colorClass: 'text-[#e5e2e1]' },
          ],
        },
        {
          num: 3,
          tokens: [
            { text: '  async ', colorClass: 'text-[#d0bcff]' },
            { text: 'processOrder', colorClass: 'text-[#cebdff]' },
            { text: '(order: ', colorClass: 'text-[#e5e2e1]' },
            { text: 'OrderPayload', colorClass: 'text-[#c0c1ff]' },
            { text: ') {', colorClass: 'text-[#e5e2e1]' },
          ],
        },
        {
          num: 4,
          tokens: [
            { text: '    await this.redis.', colorClass: 'text-[#e5e2e1]' },
            { text: 'lock', colorClass: 'text-[#d0bcff]' },
            { text: '(order.inventoryId);', colorClass: 'text-[#e5e2e1]' },
          ],
        },
        {
          num: 5,
          tokens: [{ text: '', colorClass: 'text-[#958ea0]' }],
        },
        {
          num: 6,
          tokens: [
            { text: '    const tx = await this.db.', colorClass: 'text-[#e5e2e1]' },
            { text: 'transaction', colorClass: 'text-[#d0bcff]' },
            { text: '();', colorClass: 'text-[#e5e2e1]' },
          ],
        },
        {
          num: 7,
          tokens: [
            { text: '    const receipt = await tx.', colorClass: 'text-[#e5e2e1]' },
            { text: 'commit', colorClass: 'text-[#d0bcff]' },
            { text: '(order);', colorClass: 'text-[#e5e2e1]' },
          ],
        },
        {
          num: 8,
          tokens: [{ text: '', colorClass: 'text-[#958ea0]' }],
        },
        {
          num: 9,
          tokens: [
            { text: '    return { status: ', colorClass: 'text-[#e5e2e1]' },
            { text: "'200_OK'", colorClass: 'text-[#c0c1ff]' },
            { text: ', timeMs: ', colorClass: 'text-[#e5e2e1]' },
            { text: '58', colorClass: 'text-[#c0c1ff]' },
            { text: ' };', colorClass: 'text-[#e5e2e1]' },
          ],
        },
        {
          num: 10,
          tokens: [{ text: '  }', colorClass: 'text-[#e5e2e1]' }],
        },
        {
          num: 11,
          tokens: [{ text: '}', colorClass: 'text-[#e5e2e1]' }],
        },
      ],
    },
    screens: [
      {
        id: 'nova-screen-1',
        title: 'Checkout Transacional & Monitor de Bloqueio Redis',
        description: 'Auditoria em tempo real de locks distribuídos com resolução em menos de 58ms.',
        directImageUrl: novaCommerceSvg,
        aspectRatio: '16:9',
      },
      {
        id: 'nova-screen-2',
        title: 'Arquitetura Multi-Região e Estoques Concorrentes',
        description: 'Orquestração de estoques distribuídos sem risco de overbooking.',
        directImageUrl: cloudArchitectureSvg,
        aspectRatio: '16:9',
      },
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'web',
    accent: '#d0bcff',
    skills: [
      { name: 'TypeScript', level: 'Avançado', detail: 'Tipagem estrita, generics avançados e schemas Zod' },
      { name: 'React 19 / Next.js', level: 'Especialista', detail: 'App Router, Server Actions, SSR híbrido e hydration otimizada' },
      { name: 'Tailwind CSS', level: 'Especialista', detail: 'Design tokens, layout responsivo e utilitários performáticos' },
      { name: 'Zustand / Redux', level: 'Avançado', detail: 'Gerenciamento de estado previsível e seletores atômicos' },
      { name: 'WebSockets', level: 'Sólido', detail: 'Comunicação bidirecional e eventos em tempo real' },
    ],
  },
  {
    title: 'Backend',
    icon: 'dns',
    accent: '#c0c1ff',
    skills: [
      { name: 'Node.js / NestJS', level: 'Avançado', detail: 'Injeção de dependência, modularidade e padrões enterprise' },
      { name: 'Python (FastAPI)', level: 'Intermediário', detail: 'Serviços assíncronos rápidos e modelos Pydantic' },
      { name: 'GraphQL & REST', level: 'Especialista', detail: 'Modelagem de schemas, resolvers e versionamento de APIs' },
      { name: 'Prisma / Drizzle ORM', level: 'Avançado', detail: 'Migrations seguras e consultas SQL tipadas' },
      { name: 'Microserviços', level: 'Avançado', detail: 'Event-driven architecture, desacoplamento e resiliência' },
    ],
  },
  {
    title: 'Bancos & Cloud',
    icon: 'database',
    accent: '#cebdff',
    skills: [
      { name: 'PostgreSQL', level: 'Avançado', detail: 'Indexação otimizada, queries complexas e transações ACID' },
      { name: 'Redis Caching', level: 'Avançado', detail: 'Locks distribuídos, caching de sessão e pub/sub' },
      { name: 'Docker & Kubernetes', level: 'Sólido', detail: 'Containerização multi-stage e orquestração de pods' },
      { name: 'AWS (ECS, S3, RDS)', level: 'Certificado', detail: 'Infraestrutura elástica, IAM e VPCs seguras' },
      { name: 'MongoDB', level: 'Sólido', detail: 'Agregações, modelagem de documentos flexíveis e replicação' },
    ],
  },
  {
    title: 'Metodologias',
    icon: 'verified',
    accent: '#d0bcff',
    skills: [
      { name: 'CI/CD (GitHub Actions)', level: 'Avançado', detail: 'Pipelines automatizados de lint, teste e deploy contínuo' },
      { name: 'Playwright & Jest', level: 'Avançado', detail: 'Testes de ponta a ponta e cobertura unitária com mocking' },
      { name: 'Clean Architecture', level: 'Especialista', detail: 'Separação de conceitos, camadas puras e domínio isolado' },
      { name: 'Design Systems', level: 'Avançado', detail: 'Tokens de design, acessibilidade WCAG AA e componentes' },
      { name: 'Git Flow / Trunk Based', level: 'Especialista', detail: 'Revisões rigorosas de PRs e deploys atômicos com feature flags' },
    ],
  },
];

export const timelineItems: TimelineItem[] = [
  {
    period: '2023 — ATUAL',
    title: 'Especialização em Nuvem AWS & Distribuídos',
    description:
      'Arquiteturas serverless, mensageria com SQS/SNS e provisionamento com Terraform para cargas massivas.',
    statusColor: '#d0bcff',
    isCurrent: true,
  },
  {
    period: '2021 — 2023',
    title: 'Next.js Enterprise Architecture',
    description:
      'Otimização profunda de performance, SSR híbrido, streaming de nós e isolamento de estado.',
    statusColor: '#c0c1ff',
  },
  {
    period: '2018 — 2022',
    title: 'Bacharelado em Ciência da Computação',
    description:
      'Foco em algoritmos distribuídos, bancos de dados relacionais e compiladores.',
    statusColor: '#958ea0',
  },
];
