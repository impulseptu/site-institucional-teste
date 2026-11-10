import { useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Bot, Check, ChevronDown,
  CircleHelp, Code2, Compass, ExternalLink, Globe2, Layers3, Mail,
  MapPin, Menu, MessageCircle, MonitorSmartphone, Rocket, Search,
  Settings2, ShieldCheck, ShoppingBag, Sparkles, Users, Workflow, X,
} from 'lucide-react';

const instagram = 'https://www.instagram.com/impulseptu/';
const logo = '/logo-original.jpg';

const solutions = [
  {
    number: '01', icon: MonitorSmartphone, title: 'Sites e Landing Pages',
    text: 'Transforme sua presença digital com sites modernos, responsivos e desenvolvidos para apresentar seus serviços, fortalecer sua marca e facilitar o contato com clientes.',
    tag: 'Presença digital',
  },
  {
    number: '02', icon: ShoppingBag, title: 'Marketplaces e E-commerce',
    text: 'Leve seus produtos para o ambiente digital. Apoiamos a configuração de operações em marketplaces, a organização de catálogos e a preparação de anúncios para vendas online.',
    tag: 'Comércio digital',
  },
  {
    number: '03', icon: Layers3, title: 'Google Workspace',
    text: 'Profissionalize a comunicação da sua empresa com e-mails corporativos, organização de arquivos, ferramentas colaborativas e configurações adequadas à sua equipe.',
    tag: 'Produtividade',
  },
  {
    number: '04', icon: Search, title: 'Presença no Google',
    text: 'Ajude seus clientes a encontrar informações corretas sobre seu negócio. Trabalhamos com configuração, organização e otimização do Perfil da Empresa no Google.',
    tag: 'Visibilidade',
  },
  {
    number: '05', icon: Bot, title: 'Inteligência Artificial e Automações',
    text: 'Estamos preparando soluções de automação e inteligência artificial para simplificar tarefas, organizar processos e explorar novas possibilidades de produtividade empresarial.',
    tag: 'Em desenvolvimento', future: true,
  },
];

const steps = [
  { number: '01', title: 'Entendemos seu negócio', text: 'Conversamos com você para identificar desafios, necessidades e oportunidades de melhoria.', icon: MessageCircle },
  { number: '02', title: 'Planejamos a solução', text: 'Avaliamos as possibilidades técnicas e apresentamos uma proposta clara, com escopo, investimento e etapas.', icon: Compass },
  { number: '03', title: 'Implementamos a tecnologia', text: 'Desenvolvemos e configuramos a solução definida, acompanhando a implantação e realizando os testes necessários.', icon: Settings2 },
  { number: '04', title: 'Orientamos sua equipe', text: 'Entregamos a solução, explicamos como utilizá-la e oferecemos opções de acompanhamento conforme a necessidade.', icon: Users },
];

const team = [
  { name: 'Arthur', role: 'Tecnologia e Operações', text: 'Desenvolvimento de soluções digitais, organização de projetos e acompanhamento das implantações.', initials: 'A' },
  { name: 'Rodrigo', role: 'Desenvolvimento e Inovação', text: 'Desenvolvimento de aplicações, exploração de ferramentas de inteligência artificial e integrações tecnológicas.', initials: 'R' },
  { name: 'Bruno', role: 'Comercial e Relacionamento', text: 'Contato com empresários, identificação de oportunidades e acompanhamento das necessidades dos clientes.', initials: 'B' },
];

const benefits = [
  { icon: Users, title: 'Atendimento próximo', text: 'Buscamos compreender a realidade de cada empresa antes de propor uma solução.' },
  { icon: Workflow, title: 'Tecnologia com aplicação prática', text: 'Priorizamos ferramentas e desenvolvimentos que resolvam problemas concretos.' },
  { icon: ShieldCheck, title: 'Comunicação clara', text: 'Apresentamos as propostas de forma compreensível, com escopo e expectativas definidos.' },
  { icon: ArrowUpRight, title: 'Visão de evolução', text: 'Queremos construir relações duradouras e acompanhar o crescimento tecnológico dos nossos clientes.' },
];

const questions = [
  { q: 'A Impulse atende apenas empresas de Paracatu?', a: 'Nosso foco inicial é Paracatu e região, mas podemos avaliar projetos de outras localidades que permitam atendimento remoto.' },
  { q: 'Minha empresa precisa entender de tecnologia para contratar?', a: 'Não. Nossa proposta é entender suas necessidades e explicar as soluções de forma clara, auxiliando na implantação e na utilização das ferramentas.' },
  { q: 'Posso contratar apenas um serviço?', a: 'Sim. Avaliamos demandas específicas, como um site institucional, uma implantação de Workspace ou a preparação de uma operação em marketplace.' },
  { q: 'Como funciona o orçamento?', a: 'O primeiro passo é compreender a necessidade da sua empresa. A partir disso, avaliamos o escopo e apresentamos uma proposta com os serviços, prazos e valores.' },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? 'brand-light' : ''}`} href="#inicio" aria-label="Impulse Soluções Tecnológicas, voltar ao início">
      <span className="brand-mark"><img src={logo} alt="" /></span>
      <span className="brand-type"><strong>IMPULSE</strong><small>SOLUÇÕES TECNOLÓGICAS</small></span>
    </a>
  );
}

function SectionIntro({ eyebrow, title, children, centered = false }: { eyebrow: string; title: string; children?: React.ReactNode; centered?: boolean }) {
  return <div className={`section-intro ${centered ? 'centered' : ''}`}>
    <span className="eyebrow"><span className="eyebrow-line" />{eyebrow}</span>
    <h2>{title}</h2>
    {children && <p>{children}</p>}
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          <nav id="main-navigation" className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
            <a href="#solucoes" onClick={closeMenu}>Soluções</a>
            <a href="#metodo" onClick={closeMenu}>Como trabalhamos</a>
            <a href="#portfolio" onClick={closeMenu}>Portfólio</a>
            <a href="#sobre" onClick={closeMenu}>Sobre</a>
            <a href="#contato" onClick={closeMenu} className="nav-cta">Solicitar orçamento <ArrowUpRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-content">
              <span className="hero-kicker"><span className="pulse-dot" /> SOLUÇÕES DIGITAIS PARA EMPRESAS</span>
              <h1 id="hero-title">Tecnologia para <em>impulsionar</em> o crescimento do seu negócio.</h1>
              <p className="hero-lead">Sua empresa pode ir mais longe com as soluções certas.</p>
              <p className="hero-copy">Na Impulse, desenvolvemos sites, apoiamos a entrada de empresas no comércio eletrônico e implementamos ferramentas digitais para melhorar a presença online, a organização e a produtividade dos negócios.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contato">Solicitar orçamento <ArrowUpRight size={18} /></a>
                <a className="button button-ghost" href="#solucoes">Conhecer soluções <ArrowRight size={18} /></a>
              </div>
              <div className="hero-proof"><MapPin size={17} /> Paracatu, Minas Gerais <span /> Tecnologia com aplicação prática</div>
            </div>
            <div className="hero-visual" aria-label="Composição ilustrativa da presença digital da Impulse">
              <div className="visual-glow" />
              <div className="orbit-ring orbit-ring-a" /><div className="orbit-ring orbit-ring-b" />
              <div className="visual-card main-card">
                <div className="visual-topline"><span><i /><i /><i /></span><span>IMPULSE / VISÃO DIGITAL</span><Code2 size={16} /></div>
                <div className="visual-card-body">
                  <div className="visual-logo"><img src={logo} alt="Logo original da Impulse com foguete e órbita" /></div>
                  <div className="visual-title">Ideias que ganham direção<span>.</span></div>
                  <div className="visual-description">Tecnologia aplicada ao que o seu negócio precisa.</div>
                  <div className="visual-bars" aria-hidden="true"><span /><span /><span /><span /><span /></div>
                  <div className="visual-bottom"><span>IDENTIDADE • ESTRATÉGIA • SOLUÇÃO</span><ArrowUpRight size={15} /></div>
                </div>
              </div>
              <div className="floating-chip chip-top"><Sparkles size={16} /><span>Presença digital</span></div>
              <div className="floating-chip chip-bottom"><Check size={16} /><span>Soluções para evoluir</span></div>
              <span className="visual-caption">COMPOSIÇÃO ILUSTRATIVA</span>
            </div>
          </div>
          <div className="container hero-bottom"><span>TECNOLOGIA QUE IMPULSIONA RESULTADOS.</span><a href="#solucoes" aria-label="Ir para soluções">EXPLORE <ArrowDownRight size={16} /></a></div>
        </section>

        <section className="intro-strip" aria-label="Áreas de atuação"><div className="container intro-strip-inner"><span>Uma parceira para a evolução digital do seu negócio</span><div><span>01 / Presença online</span><span>02 / Comércio digital</span><span>03 / Produtividade</span></div></div></section>

        <section id="solucoes" className="section solutions-section">
          <div className="container">
            <div className="section-heading-row"><SectionIntro eyebrow="O QUE FAZEMOS" title="Tecnologia aplicada às necessidades da sua empresa">Cada negócio tem desafios diferentes. Nosso trabalho é compreender essas necessidades e encontrar soluções tecnológicas práticas para ajudar sua empresa a evoluir.</SectionIntro><span className="heading-accent" aria-hidden="true">/01</span></div>
            <div className="solutions-grid">{solutions.map((item) => <article className={`solution-card ${item.future ? 'future-card' : ''}`} key={item.number}>
              <div className="card-head"><span>{item.number} / SOLUÇÃO</span><item.icon size={24} strokeWidth={1.7} /></div>
              <div><span className="card-tag">{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p></div>
              <a href="#contato" aria-label={`Conversar sobre ${item.title}`}>Conversar sobre a solução <ArrowUpRight size={18} /></a>
            </article>)}</div>
          </div>
        </section>

        <section id="metodo" className="section method-section">
          <div className="container"><div className="section-heading-row"><SectionIntro eyebrow="NOSSO PROCESSO" title="Da necessidade à solução">Um caminho claro para entender seu desafio, planejar a resposta e colocar a tecnologia em prática.</SectionIntro><span className="heading-accent" aria-hidden="true">/02</span></div>
            <div className="steps-grid">{steps.map((step) => <article className="step" key={step.number}><div className="step-top"><span>{step.number}</span><step.icon size={25} strokeWidth={1.6} /></div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
          </div>
        </section>

        <section id="portfolio" className="section portfolio-section"><div className="container portfolio-layout">
          <div><SectionIntro eyebrow="PORTFÓLIO" title="Ideias transformadas em projetos">Conheça alguns dos nossos desenvolvimentos, protótipos e soluções demonstrativas.</SectionIntro>
            <p className="portfolio-note">Nossa seleção inicial reúne projetos acadêmicos e estudos técnicos que representam os conhecimentos e as habilidades da equipe. Cada projeto será apresentado com sua finalidade, principais funcionalidades, tecnologias utilizadas e participação dos desenvolvedores.</p>
            <span className="status-pill"><span className="pulse-dot" /> Portfólio em organização</span>
          </div>
          <div className="portfolio-display" aria-label="Prévia conceitual de interfaces digitais"><div className="display-window"><div className="display-chrome"><i /><i /><i /><span>PROJETOS / IMPULSE</span></div><div className="display-content"><span className="display-label">EM BREVE</span><div className="display-lines"><span /><span /><span /></div><div className="display-panels"><span /><span /><span /></div></div></div><div className="display-stamp">Projetos reais e estudos técnicos serão identificados com clareza.</div></div>
        </div></section>

        <section id="sobre" className="section about-section"><div className="container">
          <div className="about-top"><div><SectionIntro eyebrow="SOBRE A IMPULSE" title="Tecnologia com propósito. Soluções com direção." /></div><div><p>A Impulse surgiu da iniciativa de três estudantes de Análise e Desenvolvimento de Sistemas que compartilham o interesse por tecnologia, inovação e empreendedorismo.</p><p>Unimos conhecimentos de desenvolvimento de software, soluções digitais, inteligência artificial e relacionamento comercial para aproximar a tecnologia das necessidades reais das empresas.</p><p>Nosso projeto começa em Paracatu, Minas Gerais, com o propósito de construir relacionamentos de confiança e contribuir para a evolução digital dos negócios da região.</p></div></div>
          <div className="team-heading"><span>A EQUIPE</span><span>CONHEÇA QUEM MOVE A IMPULSE</span></div>
          <div className="team-grid">{team.map((person, i) => <article className="team-card" key={person.name}><div className="team-avatar" aria-hidden="true"><span>{person.initials}</span><span className="avatar-orbit" /></div><div className="team-index">0{i + 1}</div><h3>{person.name}</h3><strong>{person.role}</strong><p>{person.text}</p></article>)}</div>
        </div></section>

        <section className="section benefits-section"><div className="container"><div className="section-heading-row"><SectionIntro eyebrow="POR QUE A IMPULSE" title="Uma forma mais próxima de fazer tecnologia" /><span className="heading-accent" aria-hidden="true">/03</span></div><div className="benefits-grid">{benefits.map((item) => <article key={item.title}><item.icon size={26} strokeWidth={1.6} /><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>

        <section id="perguntas" className="section faq-section"><div className="container faq-layout"><div><SectionIntro eyebrow="PERGUNTAS FREQUENTES" title="Tudo mais claro desde o início">Respostas para ajudar você a dar o próximo passo com confiança.</SectionIntro><CircleHelp className="faq-decor" size={82} strokeWidth={1} /></div><div className="faq-list">{questions.map((item, i) => <details key={item.q}><summary><span>0{i + 1}</span>{item.q}<ChevronDown size={20} /></summary><p>{item.a}</p></details>)}</div></div></section>

        <section id="contato" className="contact-section"><div className="container contact-layout"><div><span className="eyebrow"><span className="eyebrow-line" /> VAMOS CONVERSAR</span><h2>O próximo passo do seu negócio pode começar aqui<span>.</span></h2><p>Conte para nossa equipe o que sua empresa precisa. Vamos conversar sobre como a tecnologia pode ajudar você a alcançar seus objetivos.</p><div className="contact-actions"><a className="button button-primary" href={instagram} target="_blank" rel="noopener noreferrer">Falar com a Impulse no Instagram <ExternalLink size={18} /></a><a className="button button-ghost" href={instagram} target="_blank" rel="noopener noreferrer">Solicitar um orçamento <ArrowUpRight size={18} /></a></div></div><div className="contact-side"><div className="contact-ring"><Rocket size={54} strokeWidth={1.1} /></div><span>PARACATU / MINAS GERAIS</span><strong>@impulseptu</strong><a href={instagram} target="_blank" rel="noopener noreferrer">Abrir Instagram <ArrowUpRight size={18} /></a></div></div></section>
      </main>

      <footer className="site-footer"><div className="container"><div className="footer-main"><div><Brand light /><p>Tecnologia que impulsiona resultados.</p></div><div><h3>Explore</h3><a href="#solucoes">Soluções</a><a href="#metodo">Como trabalhamos</a><a href="#portfolio">Portfólio</a><a href="#sobre">Sobre nós</a></div><div><h3>Soluções</h3><span>Sites e Landing Pages</span><span>Marketplaces e E-commerce</span><span>Google Workspace</span><span>Presença no Google</span></div><div><h3>Contato</h3><a href={instagram} target="_blank" rel="noopener noreferrer"><Globe2 size={17} /> Instagram @impulseptu</a><span><MapPin size={17} /> Paracatu, Minas Gerais</span><span className="footer-soon"><Mail size={17} /> Canal comercial em definição</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Impulse Soluções Tecnológicas.</span><span>Os serviços e as condições de contratação são definidos conforme o escopo de cada projeto.</span><a href="#inicio">Voltar ao topo ↑</a></div></div></footer>
    </>
  );
}

export default App;
