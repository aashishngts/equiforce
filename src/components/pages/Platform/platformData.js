// src/components/pages/Platform/platformData.js

export const performanceData = {
  badge: "Performance",
  titleStart: "Performance",
  titleHighlight: "Measurement",
  heroDescription:
    "Serve your investors with clarity. Our front-to-back system provides crystal-clear insights into your investment performance, helping you make data-driven decisions with confidence.",
  iconEmoji: "📈",
  features: [
    {
      tag: "Returns",
      title: "Accurate Daily Returns",
      description:
        "Calculate time-weighted and money-weighted returns with absolute precision across all your portfolios — so you're always reporting the right number.",
      emoji: "📊",
      highlights: [
        "Time-weighted & money-weighted in one view",
        "Multi-currency support with FX normalization",
        "Intraday snapshots for active monitoring",
      ],
      cardLabel: "Daily Performance",
      stats: [
        { icon: "⚡", label: "Real-time" },
        { icon: "🌍", label: "Multi-currency" },
      ],
      metrics: [
        { value: "99.98%", label: "Accuracy rate" },
        { value: "<2s", label: "Calculation time" },
      ],
    },
    {
      tag: "Benchmarking",
      title: "Benchmark Comparisons",
      description:
        "Easily compare your performance against custom or standard industry benchmarks in real-time. Know exactly where you stand against the market at every moment.",
      emoji: "🎯",
      highlights: [
        "1,500+ pre-built global benchmarks",
        "Custom blended benchmark builder",
        "Side-by-side attribution breakdown",
      ],
      cardLabel: "Benchmark Overview",
      stats: [
        { icon: "📌", label: "1,500+ benchmarks" },
        { icon: "🔄", label: "Live sync" },
      ],
      metrics: [
        { value: "1,500+", label: "Benchmarks" },
        { value: "Daily", label: "Update cadence" },
      ],
    },
    {
      tag: "Attribution",
      title: "Attribution Analysis",
      description:
        "Understand exactly where your returns are coming from with detailed sector, factor, and security-level attribution — so you can double down on what's working.",
      emoji: "🔬",
      highlights: [
        "Brinson-Hood-Beebower model built in",
        "Factor exposure decomposition",
        "Drill-down from portfolio to security",
      ],
      cardLabel: "Return Sources",
      stats: [
        { icon: "📐", label: "BHB Model" },
        { icon: "🔎", label: "Security-level" },
      ],
      metrics: [
        { value: "6", label: "Attribution levels" },
        { value: "100%", label: "Coverage" },
      ],
    },
    {
      tag: "Risk",
      title: "Risk Analytics",
      description:
        "Monitor volatility, Sharpe ratios, and tracking errors to keep your risk profiles in check — with configurable alerts before breaches happen.",
      emoji: "🛡️",
      highlights: [
        "Sharpe, Sortino, and Calmar ratios",
        "VaR & CVaR with historical simulation",
        "Breach alerts before they become problems",
      ],
      cardLabel: "Risk Snapshot",
      stats: [
        { icon: "📉", label: "VaR & CVaR" },
        { icon: "🔔", label: "Breach alerts" },
      ],
      metrics: [
        { value: "15+", label: "Risk metrics" },
        { value: "Real-time", label: "Monitoring" },
      ],
    },
  ],
};

export const gipsData = {
  badge: "Compliance",
  titleStart: "GIPS Composite",
  titleHighlight: "Management",
  heroDescription:
    "Clear daily breaks with confidence. Automate your composite construction and ensure complete compliance with Global Investment Performance Standards.",
  iconEmoji: "🛡️",
  features: [
    {
      tag: "Construction",
      title: "Automated Construction",
      description:
        "Automatically build and maintain composites based on your firm's specific rule sets and criteria — no manual intervention, no human error.",
      emoji: "🏗️",
      highlights: [
        "Rule-based account inclusion engine",
        "Automatic rebalancing on rule changes",
        "Version-controlled composite definitions",
      ],
      cardLabel: "Composites Built",
      stats: [
        { icon: "🤖", label: "Fully automated" },
        { icon: "📋", label: "Rule-based" },
      ],
      metrics: [
        { value: "100%", label: "Automation rate" },
        { value: "0", label: "Manual steps" },
      ],
    },
    {
      tag: "Audit",
      title: "Audit-Ready Trails",
      description:
        "Maintain a comprehensive, immutable history of account inclusions, exclusions, and rule changes so your next audit is painless — not painful.",
      emoji: "📁",
      highlights: [
        "Immutable change log with timestamps",
        "Exportable for auditor review in one click",
        "Role-based access to sensitive records",
      ],
      cardLabel: "Audit Readiness",
      stats: [
        { icon: "🔒", label: "Immutable log" },
        { icon: "✅", label: "Audit-ready" },
      ],
      metrics: [
        { value: "100%", label: "Traceability" },
        { value: "1-click", label: "Export" },
      ],
    },
    {
      tag: "Disclosures",
      title: "Account Disclosures",
      description:
        "Generate compliant presentations and required disclosures with just a few clicks — formatted exactly to GIPS standards, every single time.",
      emoji: "📄",
      highlights: [
        "GIPS-compliant presentation templates",
        "Multi-language disclosure support",
        "One-click generation for all periods",
      ],
      cardLabel: "Disclosures Generated",
      stats: [
        { icon: "🌐", label: "Multi-language" },
        { icon: "⚡", label: "Instant" },
      ],
      metrics: [
        { value: "50+", label: "Templates" },
        { value: "<1 min", label: "Generation time" },
      ],
    },
    {
      tag: "Monitoring",
      title: "Real-time Monitoring",
      description:
        "Get instantly alerted to composite dispersion anomalies or accounts that drift from their mandates — before they become compliance issues.",
      emoji: "🔔",
      highlights: [
        "Configurable dispersion thresholds",
        "Mandate drift detection engine",
        "Escalation workflows for breaches",
      ],
      cardLabel: "Active Alerts",
      stats: [
        { icon: "📡", label: "Live monitoring" },
        { icon: "🚨", label: "Smart alerts" },
      ],
      metrics: [
        { value: "24/7", label: "Monitoring" },
        { value: "<5 sec", label: "Alert latency" },
      ],
    },
  ],
};

export const operationsData = {
  badge: "Operations",
  titleStart: "Investment",
  titleHighlight: "Operations",
  heroDescription:
    "Manage complexity at scale. Streamline your middle and back-office workflows with intelligent reconciliation and automated processing.",
  iconEmoji: "⚙️",
  features: [
    {
      tag: "Trading",
      title: "Trade Matching",
      description:
        "Automatically match and confirm trades across multiple brokers and custodians with zero manual intervention — freeing your ops team for higher-value work.",
      emoji: "🔀",
      highlights: [
        "Multi-broker & custodian connectivity",
        "Real-time exception flagging",
        "STP rates above 98% out of the box",
      ],
      cardLabel: "Trade STP Rate",
      stats: [
        { icon: "🏦", label: "Multi-custodian" },
        { icon: "⚡", label: "STP" },
      ],
      metrics: [
        { value: "98%+", label: "STP rate" },
        { value: "0", label: "Manual confirmations" },
      ],
    },
    {
      tag: "Cash",
      title: "Cash Management",
      description:
        "Gain real-time visibility into your cash balances, projections, and requirements across all accounts — so you're never caught off-guard.",
      emoji: "💵",
      highlights: [
        "Intraday cash projection engine",
        "Multi-currency balance aggregation",
        "Overdraft warning system",
      ],
      cardLabel: "Cash Visibility",
      stats: [
        { icon: "📊", label: "Real-time" },
        { icon: "🌍", label: "Multi-currency" },
      ],
      metrics: [
        { value: "100%", label: "Visibility" },
        { value: "Intraday", label: "Projections" },
      ],
    },
    {
      tag: "Reconciliation",
      title: "Position Reconciliation",
      description:
        "Identify and resolve discrepancies instantly with our AI-driven reconciliation engine — reducing break resolution time from days to minutes.",
      emoji: "🔍",
      highlights: [
        "AI-suggested break resolutions",
        "Three-way reconciliation (internal / custodian / prime broker)",
        "Automated aging and escalation",
      ],
      cardLabel: "Break Resolution",
      stats: [
        { icon: "🤖", label: "AI-driven" },
        { icon: "3️⃣", label: "3-way recon" },
      ],
      metrics: [
        { value: "95%", label: "Auto-resolved" },
        { value: "-80%", label: "Resolution time" },
      ],
    },
    {
      tag: "Automation",
      title: "Automated Workflows",
      description:
        "Replace manual spreadsheets with custom, automated operational workflows — and let your team focus on what actually moves the needle.",
      emoji: "🔧",
      highlights: [
        "Drag-and-drop workflow builder",
        "Approval chains and audit hooks",
        "Native integration with your existing tech stack",
      ],
      cardLabel: "Hours Saved / Month",
      stats: [
        { icon: "🧩", label: "No-code builder" },
        { icon: "🔗", label: "Native integrations" },
      ],
      metrics: [
        { value: "200+", label: "Hours saved/month" },
        { value: "50+", label: "Integrations" },
      ],
    },
  ],
};

export const aiReportingData = {
  badge: "AI",
  titleStart: "AI-Powered",
  titleHighlight: "Reporting",
  heroDescription:
    "Maintain accurate books across every account. Leverage artificial intelligence to generate dynamic, actionable reports for your team and clients.",
  iconEmoji: "✨",
  features: [
    {
      tag: "AI Insights",
      title: "Natural Language Insights",
      description:
        "Ask questions about your data in plain English and instantly receive charts, summaries, and answers — no SQL, no analyst required.",
      emoji: "💬",
      highlights: [
        "Chat-based query interface",
        "Auto-generates charts and tables from questions",
        "Context-aware follow-up suggestions",
      ],
      cardLabel: "Queries Answered",
      stats: [
        { icon: "🧠", label: "AI-powered" },
        { icon: "⚡", label: "Instant" },
      ],
      metrics: [
        { value: "<3 sec", label: "Response time" },
        { value: "∞", label: "Query types" },
      ],
    },
    {
      tag: "Dashboards",
      title: "Custom Dashboards",
      description:
        "Build personalized views for different team members, focusing only on the metrics that matter to them — so everyone gets their own lens on the business.",
      emoji: "🖥️",
      highlights: [
        "Drag-and-drop widget builder",
        "Role-based default views",
        "Shareable dashboard links",
      ],
      cardLabel: "Widgets Available",
      stats: [
        { icon: "🎨", label: "Drag & drop" },
        { icon: "👥", label: "Role-based" },
      ],
      metrics: [
        { value: "100+", label: "Widget types" },
        { value: "Unlimited", label: "Dashboards" },
      ],
    },
    {
      tag: "Distribution",
      title: "Automated Distribution",
      description:
        "Schedule and securely deliver pixel-perfect reports to your clients without lifting a finger — on any cadence, in any format.",
      emoji: "📬",
      highlights: [
        "PDF, Excel, and web-portal delivery",
        "Scheduled and event-triggered sends",
        "Encrypted secure delivery for compliance",
      ],
      cardLabel: "Reports Distributed",
      stats: [
        { icon: "📅", label: "Scheduled" },
        { icon: "🔐", label: "Encrypted" },
      ],
      metrics: [
        { value: "3", label: "Output formats" },
        { value: "100%", label: "Delivery rate" },
      ],
    },
    {
      tag: "Visualization",
      title: "Dynamic Visualizations",
      description:
        "Transform complex data sets into beautiful, easy-to-understand interactive charts and graphs that tell the story your clients need to hear.",
      emoji: "📉",
      highlights: [
        "50+ chart and graph types",
        "Interactive drill-down capability",
        "White-labeled for client-facing use",
      ],
      cardLabel: "Chart Types",
      stats: [
        { icon: "🎨", label: "50+ chart types" },
        { icon: "🖱️", label: "Interactive" },
      ],
      metrics: [
        { value: "50+", label: "Visualizations" },
        { value: "White-label", label: "Ready" },
      ],
    },
  ],
};