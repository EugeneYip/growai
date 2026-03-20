import React, { useMemo, useState } from "react";

const ICON_PATHS = {
  spark: [
    "M12 2l1.7 4.3L18 8l-4.3 1.7L12 14l-1.7-4.3L6 8l4.3-1.7L12 2z",
    "M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z",
    "M5 15l.9 2.1L8 18l-2.1.9L5 21l-.9-2.1L2 18l2.1-.9L5 15z",
  ],
  brain: [
    "M9.5 3a3.5 3.5 0 00-3.3 4.7A3.9 3.9 0 004 11.3c0 1.4.7 2.6 1.8 3.3-.2 2 1.2 3.9 3.3 4.1 1.2.1 2.4-.4 3.1-1.4.7 1 1.9 1.5 3.1 1.4 2.1-.2 3.5-2.1 3.3-4.1 1.1-.7 1.8-1.9 1.8-3.3 0-1.5-.9-2.8-2.2-3.6A3.5 3.5 0 0014.5 3c-.9 0-1.8.3-2.5.9A4 4 0 009.5 3z",
    "M12 7v10",
    "M9 10.5h3",
    "M12 13.5h3",
  ],
  flow: [
    "M4 7h7",
    "M17 7h3",
    "M13 4l4 3-4 3",
    "M20 17h-7",
    "M7 17H4",
    "M11 14l-4 3 4 3",
  ],
  users: [
    "M16 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2",
    "M9.5 11a4 4 0 100-8 4 4 0 000 8z",
    "M20 8v6",
    "M23 11h-6",
  ],
  target: [
    "M12 3v3",
    "M12 18v3",
    "M3 12h3",
    "M18 12h3",
    "M12 12m-4 0a4 4 0 108 0 4 4 0 10-8 0",
  ],
  shield: [
    "M12 3l7 3v6c0 4.4-3 8.5-7 9-4-1.5-7-4.6-7-9V6l7-3z",
    "M9 12l2 2 4-4",
  ],
  network: [
    "M6 5m-3 0a3 3 0 106 0 3 3 0 10-6 0",
    "M18 5m-3 0a3 3 0 106 0 3 3 0 10-6 0",
    "M12 19m-3 0a3 3 0 106 0 3 3 0 10-6 0",
    "M8.6 7.2l2.8 8.1",
    "M15.4 7.2l-2.8 8.1",
    "M9 5h6",
  ],
  alert: [
    "M12 9v4",
    "M12 17h.01",
    "M10.3 3.8L2.6 18a2 2 0 001.7 3h15.4a2 2 0 001.7-3L13.7 3.8a2 2 0 00-3.4 0z",
  ],
  layers: [
    "M12 3l9 4.5-9 4.5-9-4.5L12 3z",
    "M3 12l9 4.5 9-4.5",
    "M3 16.5L12 21l9-4.5",
  ],
  check: [
    "M20 6L9 17l-5-5",
  ],
  book: [
    "M4 5.5A2.5 2.5 0 016.5 3H20v16H6.5A2.5 2.5 0 014 16.5v-11z",
    "M8 7h8",
    "M8 11h8",
  ],
  chart: [
    "M4 19h16",
    "M7 16V9",
    "M12 16V5",
    "M17 16v-3",
  ],
  split: [
    "M4 5h16",
    "M4 12h16",
    "M4 19h16",
    "M9 5v14",
  ],
};

function Icon({ name, className = "h-5 w-5", strokeWidth = 1.8 }) {
  const paths = ICON_PATHS[name] || ICON_PATHS.spark;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

function Chip({ children, tone = "slate" }) {
  const styles = {
    slate: "bg-slate-100 text-slate-700 border-slate-200",
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
    amber: "bg-amber-50 text-amber-700 border-amber-200",
    rose: "bg-rose-50 text-rose-700 border-rose-200",
    violet: "bg-violet-50 text-violet-700 border-violet-200",
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${styles[tone]}`}>
      {children}
    </span>
  );
}

function SectionTitle({ icon, title, subtitle, id }) {
  return (
    <div id={id} className="scroll-mt-28">
      <div className="mb-4 flex items-start gap-3">
        <div className="mt-0.5 rounded-2xl bg-slate-900 p-2 text-white shadow-sm">
          <Icon name={icon} className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
          {subtitle ? <p className="mt-1 text-sm leading-6 text-slate-600">{subtitle}</p> : null}
        </div>
      </div>
    </div>
  );
}

function LangBlock({ mode, zh, en }) {
  if (mode === "zh") {
    return <div className="space-y-3 text-[15px] leading-7 text-slate-700">{zh}</div>;
  }
  if (mode === "en") {
    return <div className="space-y-3 text-[15px] leading-7 text-slate-700">{en}</div>;
  }
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900">
          <Chip tone="blue">中文</Chip>
          <span>臺灣正體</span>
        </div>
        <div className="space-y-3 text-[15px] leading-7 text-slate-700">{zh}</div>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900">
          <Chip tone="emerald">English</Chip>
          <span>Formal, readable version</span>
        </div>
        <div className="space-y-3 text-[15px] leading-7 text-slate-700">{en}</div>
      </div>
    </div>
  );
}

function MiniCard({ icon, title, children, tone = "slate" }) {
  const accents = {
    slate: "from-slate-900 to-slate-700",
    blue: "from-blue-700 to-sky-600",
    emerald: "from-emerald-700 to-teal-600",
    amber: "from-amber-600 to-orange-500",
    rose: "from-rose-700 to-pink-600",
    violet: "from-violet-700 to-fuchsia-600",
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className={`rounded-2xl bg-gradient-to-br ${accents[tone]} p-2 text-white shadow-sm`}>
          <Icon name={icon} className="h-5 w-5" />
        </div>
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      </div>
      <div className="space-y-3 text-sm leading-6 text-slate-700">{children}</div>
    </div>
  );
}

function FactTag({ kind }) {
  const map = {
    fact: { label: "FACT", tone: "blue" },
    judgment: { label: "JUDGMENT", tone: "amber" },
    lens: { label: "CLASS LENS", tone: "violet" },
    risk: { label: "RISK", tone: "rose" },
  };
  const item = map[kind] || map.fact;
  return <Chip tone={item.tone}>{item.label}</Chip>;
}

function StatCard({ value, label, foot }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-3xl font-semibold tracking-tight text-slate-900">{value}</div>
      <div className="mt-2 text-sm font-medium text-slate-900">{label}</div>
      {foot ? <div className="mt-1 text-xs leading-5 text-slate-500">{foot}</div> : null}
    </div>
  );
}

function MatrixPill({ children, active = false }) {
  return (
    <div
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        active ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"
      }`}
    >
      {children}
    </div>
  );
}

const sections = [
  { id: "overview", label: "Overview" },
  { id: "company", label: "Company" },
  { id: "system", label: "System" },
  { id: "use-cases", label: "Use Cases" },
  { id: "position", label: "Position" },
  { id: "risks", label: "Risks" },
  { id: "platform", label: "Platform" },
  { id: "class-ready", label: "Class Ready" },
];

const useCases = [
  {
    company: "Septeni",
    oneLinerZh: "以 GROW 補上原本只能透過 group interview 取得的資訊，並把招募流程大幅線上化。",
    oneLinerEn: "Uses GROW to replace much of the information once generated through group interviews and to scale an online hiring process.",
    role: "Process substitution + scale expansion",
    why: "Best fit when the firm wants speed, lower processing cost, and wider geographic reach.",
    decisionPoint: "Early screening",
    humanRole: "Humans still design the process and make downstream decisions.",
    strongest: 68,
    caution: "Main label risk: the model is trained to predict who would pass the old process.",
  },
  {
    company: "ANA",
    oneLinerZh: "以 GROW 補強人資注意力分配，抓出傳統 application screening 容易漏掉的人。",
    oneLinerEn: "Uses GROW to reallocate HR attention and identify candidates the traditional screening process is likely to miss.",
    role: "Judgment augmentation",
    why: "Best fit when applicant volume is huge and the costliest mistake is overlooking high-potential talent.",
    decisionPoint: "Screen in and interview prioritization",
    humanRole: "Humans remain central. AI changes who gets more attention, not who gets the final word.",
    strongest: 92,
    caution: "Requires trust in the signal and careful interpretation of total score plus confidence score.",
  },
  {
    company: "Mitsubishi Corporation",
    oneLinerZh: "把 social graph 轉成 sourcing engine，找出原本不在申請資料庫中的潛在人選。",
    oneLinerEn: "Turns the social graph into a sourcing engine to find promising people who were not in the company’s applicant database.",
    role: "Network-based sourcing",
    why: "Best fit when the company wants to discover elite candidates outside its existing funnel.",
    decisionPoint: "Top-of-funnel discovery",
    humanRole: "Humans still own outreach, relationship-building, and final evaluation.",
    strongest: 79,
    caution: "Core risk is homophily. The peers of strong candidates may be strong, but they may also simply be similar.",
  },
];

const riskRows = [
  {
    risk: "Construct validity",
    zh: "最先該問的不是 bias，而是模型抓到的訊號是否真的對應未來工作表現。",
    en: "The first question is whether the signals truly correspond to later workplace success.",
    severity: 92,
    implication: "If the target is wrong, the system can become very precise about the wrong thing.",
  },
  {
    risk: "Label problem",
    zh: "若訓練標籤只是過去面試通過者，模型可能學到的是舊判斷，而不是 talent 本身。",
    en: "If the training label is who passed the old process, the system may learn historical judgment rather than talent itself.",
    severity: 88,
    implication: "This risk is especially sharp in the Septeni use case.",
  },
  {
    risk: "Gaming",
    zh: "一旦使用者知道哪些特質與互動有利，理性的人就會開始管理自己的評分與網路。",
    en: "Once people infer which traits and interactions help, rational users may start managing their ratings and networks strategically.",
    severity: 72,
    implication: "Prediction systems reward and amplify what they choose to measure.",
  },
  {
    risk: "Social graph bias",
    zh: "優秀者的 peers 也優秀，可能成立，也可能只是同質網絡在重複自己。",
    en: "The peers of strong candidates may also be strong, but the graph may also be capturing homophily.",
    severity: 81,
    implication: "This matters most in the Mitsubishi sourcing logic.",
  },
  {
    risk: "Control shift",
    zh: "若 post-hire outcomes 回饋進模型，系統可能開始挑戰企業原本認定的理想人才定義。",
    en: "If post-hire outcomes feed back into the model, the system may start challenging the firm’s own idea of the ideal candidate.",
    severity: 75,
    implication: "The issue is not only technical. It is organizational and political.",
  },
];

function ProgressDots({ currentSection }) {
  return (
    <div className="flex flex-wrap gap-2">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`rounded-full px-3 py-1 text-xs font-medium transition ${
            currentSection === section.id
              ? "bg-slate-900 text-white"
              : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
          }`}
        >
          {section.label}
        </a>
      ))}
    </div>
  );
}

function DividerLabel({ children }) {
  return (
    <div className="flex items-center gap-3 py-1">
      <div className="h-px flex-1 bg-slate-200" />
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{children}</div>
      <div className="h-px flex-1 bg-slate-200" />
    </div>
  );
}

function SummaryTable({ mode }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-semibold">Case</th>
              <th className="px-4 py-3 font-semibold">Primary use</th>
              <th className="px-4 py-3 font-semibold">Decision point</th>
              <th className="px-4 py-3 font-semibold">Human role</th>
              <th className="px-4 py-3 font-semibold">Best interpretation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
            {useCases.map((item) => (
              <tr key={item.company} className="align-top">
                <td className="px-4 py-4 font-semibold text-slate-900">{item.company}</td>
                <td className="px-4 py-4">{item.role}</td>
                <td className="px-4 py-4">{item.decisionPoint}</td>
                <td className="px-4 py-4">{item.humanRole}</td>
                <td className="px-4 py-4">
                  {mode === "zh" ? item.oneLinerZh : mode === "en" ? item.oneLinerEn : (
                    <div className="space-y-2">
                      <div>{item.oneLinerZh}</div>
                      <div className="text-slate-500">{item.oneLinerEn}</div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function GradientBar({ value, color = "slate" }) {
  const map = {
    slate: "from-slate-700 to-slate-900",
    blue: "from-sky-500 to-blue-700",
    emerald: "from-emerald-500 to-teal-700",
    amber: "from-amber-400 to-orange-600",
    rose: "from-rose-400 to-pink-600",
    violet: "from-violet-400 to-indigo-700",
  };
  return (
    <div className="h-2 w-full rounded-full bg-slate-100">
      <div className={`h-2 rounded-full bg-gradient-to-r ${map[color]}`} style={{ width: `${value}%` }} />
    </div>
  );
}

export default function GrowUsingAIToEvaluateHumans() {
  const [mode, setMode] = useState("bi");
  const [density, setDensity] = useState("expanded");
  const [currentSection, setCurrentSection] = useState("overview");

  const sectionObserverRef = React.useRef(null);

  React.useEffect(() => {
    const ids = sections.map((s) => s.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setCurrentSection(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.15, 0.3, 0.5, 0.8] }
    );

    elements.forEach((el) => observer.observe(el));
    sectionObserverRef.current = observer;

    return () => observer.disconnect();
  }, []);

  const compact = density === "compact";

  const topTakeaways = useMemo(
    () => [
      {
        title: "This is not an abstract AI ethics case",
        zh: "這不是泛泛談 AI 招募的倫理題，而是很具體地問：GROW 把哪些資料轉成哪些預測，然後把預測放進哪個 hiring decision point。",
        en: "This is not a generic AI ethics case. The real issue is what GROW turns into a prediction, and where that prediction enters the hiring process.",
        icon: "target",
        tone: "blue",
      },
      {
        title: "The three firms are not using the same product in the same way",
        zh: "Septeni、ANA、三菱商事不是同一個 use case 的三個版本，而是三種不同決策設計。",
        en: "Septeni, ANA, and Mitsubishi are not three versions of the same use case. They are three different decision designs.",
        icon: "split",
        tone: "violet",
      },
      {
        title: "ANA is the strongest class position",
        zh: "若要選最有潛力的 use case，ANA 最符合 prediction factory 的課堂邏輯，因為它改善 decision quality，卻沒有太早移除 human judgment。",
        en: "If one use case must be chosen as strongest, ANA is the best class position because it improves decision quality without removing human judgment too early.",
        icon: "chart",
        tone: "emerald",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Chip tone="blue">INNO6230</Chip>
                <Chip tone="emerald">Bilingual infrastructure</Chip>
                <Chip tone="violet">Prediction factory lens</Chip>
              </div>
              <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                GROW: Using AI to Evaluate Humans
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 sm:text-[15px]">
                A redesigned study interface that turns the case into a clearer decision system, comparison map,
                and class-ready discussion tool.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
                {[
                  { key: "bi", label: "雙語" },
                  { key: "zh", label: "中文" },
                  { key: "en", label: "EN" },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setMode(item.key)}
                    className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                      mode === item.key ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
                {[
                  { key: "expanded", label: "Expanded" },
                  { key: "compact", label: "Compact" },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setDensity(item.key)}
                    className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                      density === item.key ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <ProgressDots currentSection={currentSection} />
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <section id="overview" className="scroll-mt-32">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <FactTag kind="fact" />
                <FactTag kind="lens" />
                <FactTag kind="judgment" />
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Bottom line first
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">
                The most useful way to read this case is to stop asking whether AI in hiring is good or bad in the abstract.
                Ask instead what decision the system is supporting, what outcome it is trying to predict, what signals it uses,
                and how much control remains with humans.
              </p>

              <div className={`mt-6 grid gap-4 ${compact ? "lg:grid-cols-1" : "lg:grid-cols-3"}`}>
                {topTakeaways.map((item) => (
                  <MiniCard key={item.title} icon={item.icon} tone={item.tone} title={item.title}>
                    {mode !== "en" ? <p>{item.zh}</p> : null}
                    {mode !== "zh" ? <p>{item.en}</p> : null}
                  </MiniCard>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <StatCard value="$6M" label="Series A raised by IGS" foot="As stated in the case text you provided." />
              <StatCard value="2,000 → 74,000" label="User growth in roughly six months" foot="Dec 2016 to Jun 2017 in your source text." />
              <StatCard value="25" label="Competencies in peer-based assessment" foot="Reduced from a larger literature-based pool." />
              <StatCard value="4–5 + self" label="Typical evaluator pattern" foot="Peer evaluations plus self-evaluation, then reweighted." />
            </div>
          </div>
        </section>

        <div className="my-8">
          <DividerLabel>Case framing</DividerLabel>
        </div>

        <section id="company" className="space-y-6">
          <SectionTitle
            id="company"
            icon="brain"
            title="What the company and product actually are"
            subtitle="This section separates what is clearly case fact from what is analytical interpretation."
          />

          <LangBlock
            mode={mode}
            zh={
              <>
                <p>
                  <strong>GROW 是東京新創 IGS 的 people analytics 產品。</strong>
                  你的原文已經很清楚指出，創辦人 Masahiro Fukuhara 原先在 Barclays Global Investors 做高度量化的預測模型工作，後來轉向教育與人才發展。
                  這個背景很重要，因為它說明了 GROW 的基本直覺不是從人資流程出發，而是從「能不能把原本模糊的人才判斷，轉成更可量化、更可預測的系統」出發。
                </p>
                <p>
                  <strong>它不是單一人格測驗，也不是單純把履歷自動化。</strong>
                  GROW 由兩條資料線構成。第一條是 competency assessment，也就是透過同儕回饋評估能力。第二條是 personality assessment，也就是用遊戲化 IAT 抓人格相關訊號。真正有意思的地方，在於 IGS 不是把這兩條線分開看，而是把它們合成 candidate profile，再嵌進企業的 screening、matching 或 sourcing 決策。
                </p>
              </>
            }
            en={
              <>
                <p>
                  <strong>GROW is a people-analytics product built by IGS in Tokyo.</strong>
                  Your source text already makes clear that founder Masahiro Fukuhara came from a highly quantitative prediction background at Barclays Global Investors before moving into education and talent development.
                  That matters because the product does not begin with HR tradition. It begins with the question of whether fuzzy talent judgments can be converted into a more systematic prediction system.
                </p>
                <p>
                  <strong>It is not one personality test, and it is not just resume automation.</strong>
                  GROW combines two data streams. The first is a competency assessment built from peer feedback. The second is a personality assessment delivered through a gamified IAT. The strategic logic lies in combining those two streams into a candidate profile that can be embedded into screening, matching, or sourcing decisions.
                </p>
              </>
            }
          />

          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
            <MiniCard icon="layers" title="Core product logic" tone="blue">
              <p><strong>Competency stream</strong><br />Peer feedback across 25 competencies.</p>
              <p><strong>Personality stream</strong><br />Gamified IAT capturing behavioral traces, not only explicit answers.</p>
            </MiniCard>
            <MiniCard icon="flow" title="Business uses" tone="emerald">
              <p>Matching</p>
              <p>Screening</p>
              <p>Sourcing</p>
            </MiniCard>
            <MiniCard icon="target" title="Best reading of the product" tone="violet">
              <p>Not an app first.</p>
              <p>A decision-support system designed to sit inside a hiring operating model.</p>
            </MiniCard>
            <MiniCard icon="check" title="Integrity check" tone="amber">
              <p>Your original draft correctly avoids overselling the system as full human replacement.</p>
              <p>That restraint should be preserved.</p>
            </MiniCard>
          </div>
        </section>

        <div className="my-8">
          <DividerLabel>Prediction system</DividerLabel>
        </div>

        <section id="system" className="space-y-6">
          <SectionTitle
            id="system"
            icon="flow"
            title="How GROW works as a prediction factory"
            subtitle="The rebuild makes the case easier to understand by turning the mechanism into a layered system rather than scattered prose."
          />

          <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Chip tone="violet">Layered reading</Chip>
                <span className="text-sm text-slate-500">From signals to decision support</span>
              </div>
              <div className="space-y-4">
                {[
                  {
                    step: "Layer 1",
                    title: "Predict evaluator reliability",
                    text: "Peer evaluations are not treated as equally credible. The system reweights them using metadata, behavioral traces, and social graph position.",
                    icon: "users",
                    tone: "blue",
                  },
                  {
                    step: "Layer 2",
                    title: "Generate candidate profile",
                    text: "Competency ratings and personality signals are combined into a profile rather than left as separate fragments.",
                    icon: "brain",
                    tone: "emerald",
                  },
                  {
                    step: "Layer 3",
                    title: "Match profile to target definition",
                    text: "The profile is compared against a firm-defined ideal candidate or some other success proxy.",
                    icon: "target",
                    tone: "amber",
                  },
                  {
                    step: "Layer 4",
                    title: "Potential feedback loop",
                    text: "Over time, post-hire outcomes could feed back into the model and even revise the firm’s own definition of talent.",
                    icon: "spark",
                    tone: "rose",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-slate-200 p-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-2xl bg-slate-900 p-2 text-white">
                        <Icon name={item.icon} className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <Chip tone={item.tone}>{item.step}</Chip>
                          <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-semibold text-slate-900">System architecture</h3>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
                The original memo explains the mechanism well in prose. This visual version makes the causal chain explicit.
              </p>

              <div className="mt-6 space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                      <Icon name="users" className="h-4 w-4" />
                      Competency assessment
                    </div>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                      <li>25 competencies derived from a broader social-science pool</li>
                      <li>Reduced to 3 key queries per competency</li>
                      <li>4-level frequency scale from rarely to nearly always</li>
                      <li>Observable behaviors, not vague labels alone</li>
                    </ul>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                      <Icon name="brain" className="h-4 w-4" />
                      Personality assessment
                    </div>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                      <li>Big Five style conceptual base</li>
                      <li>Gamified IAT on mobile</li>
                      <li>Tracks answer plus speed, hesitation, and path pattern</li>
                      <li>Unsupervised learning used to detect latent patterns</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-[28px] border border-dashed border-slate-300 p-5">
                  <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
                    <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Input X</div>
                      <div className="mt-2 text-sm leading-6 text-slate-700">
                        Peer ratings, evaluator metadata, IAT behavior, self-evaluation, graph position.
                      </div>
                    </div>
                    <div className="flex justify-center text-slate-400">
                      <Icon name="flow" className="h-8 w-8" />
                    </div>
                    <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Model logic</div>
                      <div className="mt-2 text-sm leading-6 text-slate-700">
                        Reliability weighting first, profile generation second, then matching to an employer-defined target.
                      </div>
                    </div>
                    <div className="flex justify-center text-slate-400">
                      <Icon name="flow" className="h-8 w-8" />
                    </div>
                    <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Decision Z</div>
                      <div className="mt-2 text-sm leading-6 text-slate-700">
                        Screen out, screen in, prioritize interviews, or discover new people outside the funnel.
                      </div>
                    </div>
                  </div>
                </div>

                <LangBlock
                  mode={mode}
                  zh={
                    <>
                      <p>
                        用課堂語言翻譯，最關鍵的一句是：<strong>先定義 decision，再定義要預測的 y，最後才是模型本身。</strong>
                        所以真正不能忽略的不是 AI 多先進，而是企業到底想把哪一段 judgment 交給系統輔助。
                      </p>
                      <p>
                        這也是為什麼你原文把 GROW 解讀為 prediction factory 很到位。因為它不是只做 assessment，而是把 assessment 變成 decision input。
                      </p>
                    </>
                  }
                  en={
                    <>
                      <p>
                        In course language, the most important line is this: <strong>define the decision first, define the target y second, and only then worry about the model.</strong>
                        The core issue is not how advanced the AI sounds. It is which judgment in the hiring chain the system is actually being asked to support.
                      </p>
                      <p>
                        That is why your reading of GROW as a prediction factory is strong. It is not merely an assessment tool. It turns assessment into a decision input.
                      </p>
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </section>

        <div className="my-8">
          <DividerLabel>Three company examples</DividerLabel>
        </div>

        <section id="use-cases" className="space-y-6">
          <SectionTitle
            id="use-cases"
            icon="split"
            title="The three company examples are three different use cases"
            subtitle="This is the section where readers most often oversimplify the case. The redesign makes the distinction unavoidable."
          />

          <SummaryTable mode={mode} />

          <div className="grid gap-5 xl:grid-cols-3">
            {useCases.map((item, index) => (
              <div key={item.company} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-slate-900">{item.company}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">{item.role}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white">
                    #{index + 1}
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Most accurate reading</div>
                    <div className="rounded-3xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                      {mode === "zh" ? item.oneLinerZh : mode === "en" ? item.oneLinerEn : (
                        <>
                          <div>{item.oneLinerZh}</div>
                          <div className="mt-2 text-slate-500">{item.oneLinerEn}</div>
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      <span>Class strength</span>
                      <span>{item.strongest}/100</span>
                    </div>
                    <GradientBar value={item.strongest} color={item.company === "ANA" ? "emerald" : item.company === "Septeni" ? "blue" : "violet"} />
                  </div>

                  <div className="grid gap-3">
                    <div className="rounded-3xl border border-slate-200 p-4">
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Decision point</div>
                      <div className="mt-2 text-sm leading-6 text-slate-700">{item.decisionPoint}</div>
                    </div>
                    <div className="rounded-3xl border border-slate-200 p-4">
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Why it matters</div>
                      <div className="mt-2 text-sm leading-6 text-slate-700">{item.why}</div>
                    </div>
                    <div className="rounded-3xl border border-slate-200 p-4">
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Main caution</div>
                      <div className="mt-2 text-sm leading-6 text-slate-700">{item.caution}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="my-8">
          <DividerLabel>Class position</DividerLabel>
        </div>

        <section id="position" className="space-y-6">
          <SectionTitle
            id="position"
            icon="chart"
            title="My class position after comparing the three"
            subtitle="This part is intentionally decisive. It gives a clean answer while showing why other answers remain defensible."
          />

          <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <FactTag kind="judgment" />
                <Chip tone="emerald">Recommended class position</Chip>
              </div>
              <LangBlock
                mode={mode}
                zh={
                  <>
                    <p>
                      <strong>若老師問哪一種 use case 最有潛力，我會選 ANA。</strong>
                      不是因為它最炫，而是因為它在商業價值、組織採納、以及課堂框架上最平衡。
                    </p>
                    <p>
                      ANA 的強項在於，它不是把最終 hiring judgment 完全自動化，而是把 AI 放在最容易出錯、也最值得改善的地方，也就是海量申請中的注意力分配。
                      換句話說，它不是把人拿掉，而是讓人把注意力放到更該看的地方。
                    </p>
                    <p>
                      這正好符合 prediction factory 的好設計。先想清楚哪個 decision point 值得優化，再看什麼 y 值得預測，再決定模型應該怎麼服務 judgment。
                    </p>
                  </>
                }
                en={
                  <>
                    <p>
                      <strong>If the professor asks which use case has the greatest potential, I would choose ANA.</strong>
                      Not because it is the flashiest, but because it is the most balanced across business value, organizational adoption, and course logic.
                    </p>
                    <p>
                      ANA’s strength is that it does not fully automate the final hiring judgment. It places AI at the part of the process that is both error-prone and worth improving most, namely attention allocation within a massive applicant pool.
                      In plain terms, it does not remove people. It helps people look at the right people.
                    </p>
                    <p>
                      That is exactly what strong prediction-factory design looks like. First decide which decision point is worth improving. Then choose the y worth predicting. Then design the model to serve judgment.
                    </p>
                  </>
                }
              />
            </div>

            <div className="space-y-4">
              <MiniCard icon="check" title="Why ANA wins" tone="emerald">
                <p>Improves decision quality more than pure automation speed.</p>
                <p>Retains human judgment in the loop.</p>
                <p>Creates a strong screen-in function, not only a screen-out function.</p>
                <p>More likely to build organizational trust over time.</p>
              </MiniCard>

              <MiniCard icon="spark" title="Still defensible alternatives" tone="amber">
                <p><strong>Septeni case:</strong> strongest near-term ROI, clearest operational replication logic.</p>
                <p><strong>Mitsubishi case:</strong> most platform-like and most interesting for network-based data advantage.</p>
              </MiniCard>

              <MiniCard icon="alert" title="Best discussion move in class" tone="violet">
                <p>State ANA clearly, then briefly concede why the other two remain defensible.</p>
                <p>That makes the position sound analytical rather than ideological.</p>
              </MiniCard>
            </div>
          </div>
        </section>

        <div className="my-8">
          <DividerLabel>Risks and limits</DividerLabel>
        </div>

        <section id="risks" className="space-y-6">
          <SectionTitle
            id="risks"
            icon="shield"
            title="What is most powerful, and most dangerous, about this case"
            subtitle="The interface below turns the risk analysis into a hierarchy so readers can tell which concerns are foundational and which are secondary."
          />

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <FactTag kind="risk" />
              <Chip tone="rose">Risk architecture</Chip>
            </div>
            <div className="space-y-5">
              {riskRows.map((row) => (
                <div key={row.risk} className="rounded-3xl border border-slate-200 p-5">
                  <div className="grid gap-4 lg:grid-cols-[1fr_180px] lg:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-base font-semibold text-slate-900">{row.risk}</h3>
                        <Chip tone="rose">Priority issue</Chip>
                      </div>
                      <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                        {mode !== "en" ? <p>{row.zh}</p> : null}
                        {mode !== "zh" ? <p>{row.en}</p> : null}
                        <p className="text-slate-500">{row.implication}</p>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        <span>Importance</span>
                        <span>{row.severity}/100</span>
                      </div>
                      <GradientBar value={row.severity} color="rose" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-3">
            <MiniCard icon="target" title="The first question is not bias" tone="amber">
              <p>Bias matters, but it should not be the first or only word spoken.</p>
              <p>Construct validity comes first, because a system can be unbiased and still predict the wrong thing.</p>
            </MiniCard>
            <MiniCard icon="brain" title="Prediction changes behavior" tone="blue">
              <p>Once a platform chooses y, it starts rewarding and amplifying whatever helps users score well on that y.</p>
              <p>That makes gaming a structural issue, not an afterthought.</p>
            </MiniCard>
            <MiniCard icon="shield" title="The deepest tension is control" tone="violet">
              <p>If outcome feedback redefines who counts as a great candidate, the tool stops merely serving managers and starts contesting them.</p>
            </MiniCard>
          </div>
        </section>

        <div className="my-8">
          <DividerLabel>Platform and moat</DividerLabel>
        </div>

        <section id="platform" className="space-y-6">
          <SectionTitle
            id="platform"
            icon="network"
            title="Platform structure, network effects, and moat"
            subtitle="This section is often under-visualized in ordinary notes. Here it becomes a clean ecosystem map plus defensibility logic."
          />

          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-semibold text-slate-900">B2B2C ecosystem sketch</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 p-5 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon name="users" className="h-6 w-6" />
                  </div>
                  <div className="mt-3 font-semibold text-slate-900">Students / job seekers</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Provide profile data and want visibility, discovery, and better access to opportunities.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 p-5 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
                    <Icon name="brain" className="h-6 w-6" />
                  </div>
                  <div className="mt-3 font-semibold text-slate-900">Peer evaluators</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Generate rating data. This side overlaps with the student side but performs a distinct role in value creation.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 p-5 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <Icon name="target" className="h-6 w-6" />
                  </div>
                  <div className="mt-3 font-semibold text-slate-900">Employer clients</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Consume analytics, specify desired candidate profiles, and potentially return hiring outcome labels.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-[28px] bg-slate-50 p-5">
                <div className="text-sm font-semibold text-slate-900">Network logic</div>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">1</div>
                    <div className="mt-2 text-sm leading-6 text-slate-700">More students and peers create richer evaluation data.</div>
                  </div>
                  <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">2</div>
                    <div className="mt-2 text-sm leading-6 text-slate-700">More employer adoption raises the incentive to build and maintain a profile.</div>
                  </div>
                  <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">3</div>
                    <div className="mt-2 text-sm leading-6 text-slate-700">More outcome data can strengthen future matching and screening models.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <MiniCard icon="shield" title="What the moat really is" tone="emerald">
                <p><strong>Not:</strong> “we use AI.”</p>
                <p><strong>More likely:</strong> cross-client data, evaluator-reliability weighting logic, and the network structure that connects students, peers, and firms.</p>
              </MiniCard>
              <MiniCard icon="alert" title="Where the vulnerability sits" tone="rose">
                <p>If large employers or major HR-tech incumbents build enough proprietary internal data, they may bypass IGS rather than depend on it.</p>
              </MiniCard>
              <MiniCard icon="network" title="Why Mitsubishi is strategically interesting" tone="violet">
                <p>It shows that the data asset is not only about better screening. It can become a discovery engine when combined with network density.</p>
              </MiniCard>
            </div>
          </div>
        </section>

        <div className="my-8">
          <DividerLabel>Class ready output</DividerLabel>
        </div>

        <section id="class-ready" className="space-y-6">
          <SectionTitle
            id="class-ready"
            icon="book"
            title="The most useful things to say in class"
            subtitle="This final section is intentionally concise and high-utility. It helps the reader move from understanding to speaking."
          />

          <div className="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Chip tone="blue">Short speaking version</Chip>
                <Chip tone="emerald">Class discussion ready</Chip>
              </div>
              <LangBlock
                mode={mode}
                zh={
                  <>
                    <p>
                      我認為這個個案最重要的，不是 GROW 有沒有用 AI，而是它把哪些原本分散、模糊、一次性的訊號，轉成可累積、可訓練、可嵌入 hiring process 的 prediction system。
                    </p>
                    <p>
                      三個案例不是同一種 use case。Septeni 比較像 scale 加上部分取代既有流程，ANA 是用 AI 補強人資最容易漏掉的地方，三菱商事則是把 social graph 變成人才來源工具。
                    </p>
                    <p>
                      如果要選最有潛力的一種，我會選 ANA，因為它提升 decision quality，又沒有太早把人類移出迴圈。不過這個系統最後能不能成立，還是取決於它選的 y 是否真的對應職場成功，以及使用者會不會學會玩這個系統。
                    </p>
                  </>
                }
                en={
                  <>
                    <p>
                      What matters most here is not simply that GROW uses AI. It is that GROW converts signals that were previously dispersed, fuzzy, and one-shot into a trainable prediction system that can be embedded into the hiring process.
                    </p>
                    <p>
                      The three examples are not the same use case. Septeni is mainly about scale plus partial substitution of an existing process. ANA strengthens the part of HR that is easiest to get wrong. Mitsubishi turns the social graph into a sourcing tool.
                    </p>
                    <p>
                      If I had to choose the use case with the most potential, I would choose ANA, because it improves decision quality without removing humans from the loop too early. But the real test is still whether the chosen y tracks workplace success, and whether users eventually learn how to game the system.
                    </p>
                  </>
                }
              />
            </div>

            <div className="space-y-4">
              <MiniCard icon="check" title="Four things to remember right before class" tone="amber">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>Do not collapse the three companies into one use case.</li>
                  <li>Do not present your analytical judgment as if it were case fact.</li>
                  <li>Do not talk only about the model. Talk about the decision point and operating model.</li>
                  <li>If asked about risk, start with construct validity, label problem, gaming, and social graph bias.</li>
                </ol>
              </MiniCard>

              <MiniCard icon="split" title="What this redesign adds beyond the original memo" tone="blue">
                <p>A clearer hierarchy between fact, class lens, judgment, and risk.</p>
                <p>Visual separation of the three company use cases.</p>
                <p>A true prediction-factory architecture view.</p>
                <p>A more explicit map of moat versus vulnerability.</p>
              </MiniCard>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
