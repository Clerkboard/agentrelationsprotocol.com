import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium tracking-tight">
            <span className="inline-block w-2 h-2 rounded-full bg-foreground" />
            <span>Agent Relations Protocol</span>
          </Link>
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
            <a href="#business" className="hover:text-foreground transition-colors">For businesses</a>
            <a href="#implementations" className="hover:text-foreground transition-colors">Build</a>
            <a
              href="https://github.com/Clerkboard/arp"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub →
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-32 md:pt-32 md:pb-40">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs text-muted mb-8">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Editor&apos;s Draft v0.5 — April 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl gradient-text">
            The open protocol for AI agents on the internet.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            ARP gives any AI agent an address, an identity, and the ability to talk to any other agent — across organizations, frameworks, and providers. No platform lock-in. No central registry. No gatekeeper.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://github.com/Clerkboard/arp/blob/main/spec/arp-spec.md"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Read the spec
              <span aria-hidden>→</span>
            </a>
            <a
              href="#quickstart"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border text-sm font-medium hover:border-muted transition-colors"
            >
              Quickstart
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 max-w-3xl">
            <Stat label="Federation" value="No registry" />
            <Stat label="Identity" value="DID + Ed25519" />
            <Stat label="Transport" value="HTTP" />
            <Stat label="Trust" value="Earned, signed" />
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <SectionLabel>The problem</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight max-w-4xl">
            Every company has AI agents. The people on the other side have nothing.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-12 max-w-5xl">
            <p className="text-lg text-muted leading-relaxed">
              Support agents, sales agents, ordering agents, scheduling agents — companies have automated their side of the conversation. Customers are still on hold, clicking through menus, typing on forms designed in 2008.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              The missing piece isn&apos;t a smarter chatbot. It&apos;s a protocol — so every agent can talk to every other agent, the way email works today. That&apos;s ARP.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight max-w-4xl">
            Five primitives. Implementable in a weekend.
          </h2>

          <div className="mt-16 grid md:grid-cols-2 gap-x-10 gap-y-14 max-w-5xl">
            <Primitive
              number="01"
              title="agent@domain addressing"
              body="Like email, but for machines. Globally unique, DNS-routed, no signup required. Every agent is reachable at a human-readable address tied to a domain the operator controls."
              code={`support@agents.clerkboard.com
shop@agents.kiuki.com
orders@agents.stripe.com`}
            />
            <Primitive
              number="02"
              title="DID-based identity"
              body="Cryptographic keys anchored to a domain the user controls. Portable. Verifiable. Survives server changes. Identity belongs to the user, not to a platform account or vendor API key."
              code={`did:web:agents.kiuki.com:shop
publicKeyMultibase: z6Mk...
Ed25519Signature2020`}
            />
            <Primitive
              number="03"
              title="Signed messaging over HTTP"
              body="Structured JSON messages with a shared vocabulary: Request, Respond, Delegate, Cancel. Every message signed. Every signature verified. Works through every firewall, every proxy, every CDN."
              code={`POST /inbox
Content-Type: application/arp+json
Signature: ed25519 ...
{ "type": "request", ... }`}
            />
            <Primitive
              number="04"
              title="Relations as first-class"
              body="Agents remember who they talk to. A relation records the peer's identity, pinned key, status, and history. Trust is scoped per-relation — revokable without burning the whole network down."
              code={`relations: {
  "did:web:...": {
    status: "active",
    since: "2026-03-14T..."
  }
}`}
            />
            <Primitive
              number="05"
              title="Trust earned, not declared"
              body="Reputation comes from mutually-signed completion records — not self-reported claims. A new agent with no history faces more friction than one with a track record. Reputation is portable; it travels with the identity."
              code={`{ type: "completion",
  signedByA: "...",
  signedByB: "...",
  outcome: "success" }`}
            />
            <Primitive
              number="06"
              title="Messages survive downtime"
              body="Agents go offline. Servers crash. Relays hold messages until the recipient is back — store-and-forward, like SMTP. No message is lost because an inbox was temporarily unreachable."
              code={`relay.arp.net → inbox
  queue: 3 messages
  retry: exponential
  TTL: 7 days`}
            />
          </div>
        </div>
      </section>

      {/* For businesses */}
      <section id="business" className="border-b border-border bg-subtle/20">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <SectionLabel>For businesses</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight max-w-4xl">
            Why adopt ARP.
          </h2>

          <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-6xl">
            <Benefit
              title="Interoperability by default"
              body="An agent built on OpenAI talks to an agent built on Anthropic talks to an agent built on Llama. One protocol, every framework, every provider. The choice of LLM stays private; the wire format is public."
            />
            <Benefit
              title="No vendor lock-in"
              body="Identity is a DID anchored to your domain. Move hosts, change frameworks, switch providers — your agents stay reachable and your reputation travels with you. You are never a tenant of someone else's platform."
            />
            <Benefit
              title="Your customers get leverage"
              body="A customer with an ARP agent can delegate to it — comparing prices, placing orders, managing subscriptions. Companies that adopt ARP first are the ones those agents reach first. Early adopters get the commerce."
            />
            <Benefit
              title="Auditable, by design"
              body="Every message is signed. Every outcome is recorded. Disputes are resolved by replaying the cryptographic trail, not by trusting the platform. Compliance teams will love it."
            />
            <Benefit
              title="Federation without permission"
              body="No registry to get listed in. No approval to run an agent. No gatekeeper that can remove you. If you control a DNS domain, you can run agents under it. That&apos;s the whole onboarding."
            />
            <Benefit
              title="Future-proof"
              body="ARP is the substrate, not the application. The same protocol that handles order lookup today will handle agent-delegated purchasing, negotiation, and multi-party coordination tomorrow. Build once."
            />
          </div>
        </div>
      </section>

      {/* Implementations */}
      <section id="implementations" className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <SectionLabel>Implementations</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight max-w-4xl">
            Production tools. Reference servers. Ready to deploy.
          </h2>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Tool
              name="Alfred"
              tagline="The company agent in a box"
              body="Deploy a branded AI agent at your company domain. YAML config. Built-in tools. Conversation memory. Pluggable storage."
              href="https://github.com/Clerkboard/alfred"
            />
            <Tool
              name="arp-sdk"
              tagline="TypeScript SDK"
              body="Build agents with one class. Handles signing, verification, inbox routing, and protocol plumbing."
              href="https://github.com/Clerkboard/arp-sdk"
            />
            <Tool
              name="create-arp-agent"
              tagline="CLI scaffold"
              body="npx create-arp-agent my-agent. Ready-to-deploy project in one command."
              href="https://github.com/Clerkboard/create-arp-agent"
            />
            <Tool
              name="arp-verify"
              tagline="Compliance testing"
              body="12-check endpoint test for any live ARP agent. Run it against yours, against your partners, against the directory."
              href="https://github.com/Clerkboard/arp-verify"
            />
            <Tool
              name="arp-server-ts"
              tagline="Reference — TypeScript"
              body="Minimal server implementation. The whole protocol in one repo, one language."
              href="https://github.com/Clerkboard/arp-server-ts"
            />
            <Tool
              name="arp-server-py"
              tagline="Reference — Python"
              body="Cross-language parity check. Same protocol, same tests, different runtime."
              href="https://github.com/Clerkboard/arp-server-py"
            />
          </div>
        </div>
      </section>

      {/* Quickstart */}
      <section id="quickstart" className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <SectionLabel>Quickstart</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight max-w-4xl">
            Running in five minutes.
          </h2>
          <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
            One command creates the agent, generates keys, scaffolds the Agent Card, and gives you a working inbox. Point it at your domain and you&apos;re federated.
          </p>

          <div className="mt-12 rounded-2xl border border-border bg-subtle/30 overflow-hidden max-w-3xl">
            <div className="border-b border-border px-5 py-3 flex items-center gap-2 text-xs text-muted">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
              </div>
              <span className="ml-2 font-mono">~/my-agent</span>
            </div>
            <pre className="code-block p-6 overflow-x-auto text-foreground">
              <span className="text-muted">$ </span>npx create-arp-agent my-agent{"\n"}
              <span className="text-muted">$ </span>cd my-agent{"\n"}
              <span className="text-muted">$ </span>npm install{"\n"}
              <span className="text-muted">$ </span>npm start{"\n"}
              {"\n"}
              <span className="text-emerald-400">✓</span> Agent running at{" "}
              <span className="text-cyan-300">http://localhost:3000</span>
              {"\n"}
              <span className="text-emerald-400">✓</span> DID: did:web:agents.example.com:my-agent{"\n"}
              <span className="text-emerald-400">✓</span> Keys generated ·{" "}
              <span className="text-muted">agents.txt · Agent Card published</span>
            </pre>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/Clerkboard/arp/blob/main/docs/quickstart.md"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border text-sm font-medium hover:border-muted transition-colors"
            >
              Full quickstart guide →
            </a>
            <a
              href="https://github.com/Clerkboard/arp/blob/main/docs/ai-integration.md"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border text-sm font-medium hover:border-muted transition-colors"
            >
              Connect Claude, OpenAI, or any LLM →
            </a>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <SectionLabel>Design principles</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight max-w-4xl">
            Eight rules. Every decision traces back to one of them.
          </h2>

          <ol className="mt-16 space-y-6 max-w-4xl">
            <Principle n="1" title="Federation without permission" body="Any domain operator can run agents. No registry, no approval, no platform gatekeeper." />
            <Principle n="2" title="Identity belongs to the user" body="Cryptographic keys anchored to a domain the user controls. Not a platform account. Not an API key from a vendor." />
            <Principle n="3" title="Deny by default" body="No anonymous messages. No unsigned payloads. No implicit trust. Authentication is mandatory. Authorization is explicit." />
            <Principle n="4" title="Messages survive downtime" body="Agents go offline. Relays hold messages until the recipient is back. No message is lost because an inbox was unreachable." />
            <Principle n="5" title="HTTP is the transport" body="Not because it&apos;s the best protocol. Because it passes through every firewall, every proxy, every language." />
            <Principle n="6" title="Trust is earned, not declared" body="Reputation comes from verifiable completion records signed by both parties." />
            <Principle n="7" title="Intermediaries are welcome" body="Proxies, gateways, relays, caches, and load balancers can route, monitor, and rate-limit agent traffic." />
            <Principle n="8" title="No single point of failure" body="DNS is the only shared infrastructure. Everything else is operated by the domain owner." />
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto gradient-text">
            The agent internet is being built now. Be early.
          </h2>
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Read the spec. Run a reference server. Deploy Alfred at your domain. Join the conversation — feedback is what shapes v1.0.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/Clerkboard/arp"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Star on GitHub
            </a>
            <a
              href="https://github.com/Clerkboard/arp/blob/main/spec/arp-spec.md"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border text-sm font-medium hover:border-muted transition-colors"
            >
              Read the spec
            </a>
            <a
              href="https://github.com/Clerkboard/arp/blob/main/ROADMAP.md"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border text-sm font-medium hover:border-muted transition-colors"
            >
              Roadmap
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-foreground" />
            Agent Relations Protocol
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <a href="https://github.com/Clerkboard/arp" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="https://github.com/Clerkboard/arp/blob/main/spec/arp-spec.md" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Specification</a>
            <a href="https://github.com/Clerkboard/arp/blob/main/ROADMAP.md" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Roadmap</a>
            <a href="https://github.com/Clerkboard/arp/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Contribute</a>
            <a href="https://clerkboard.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">ClerkBoard</a>
          </div>
          <div className="text-xs text-muted">
            Apache 2.0 · Editor&apos;s Draft v0.5
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-muted">{label}</div>
      <div className="mt-1 text-sm font-medium">{value}</div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
      <span className="inline-block w-6 h-px bg-muted" />
      {children}
    </div>
  );
}

function Primitive({
  number,
  title,
  body,
  code,
}: {
  number: string;
  title: string;
  body: string;
  code: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex items-baseline gap-3">
        <span className="text-xs font-mono text-muted">{number}</span>
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      </div>
      <p className="mt-3 text-muted leading-relaxed">{body}</p>
      <pre className="code-block mt-5 p-4 rounded-lg bg-subtle/40 border border-border text-[12px] text-foreground/90 overflow-x-auto">
        {code}
      </pre>
    </div>
  );
}

function Benefit({ title, body }: { title: string; body: string }) {
  return (
    <div className="p-6 rounded-2xl border border-border bg-background hover:border-muted/50 transition-colors">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-muted leading-relaxed">{body}</p>
    </div>
  );
}

function Tool({
  name,
  tagline,
  body,
  href,
}: {
  name: string;
  tagline: string;
  body: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group p-6 rounded-2xl border border-border bg-background hover:border-muted/50 transition-colors flex flex-col"
    >
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-semibold tracking-tight font-mono">{name}</h3>
        <span className="text-muted group-hover:text-foreground transition-colors">↗</span>
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted">{tagline}</div>
      <p className="mt-3 text-muted leading-relaxed text-sm">{body}</p>
    </a>
  );
}

function Principle({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <li className="flex gap-6 items-start">
      <span className="text-sm font-mono text-muted w-6 shrink-0 pt-1">{n}</span>
      <div className="flex-1 pb-6 border-b border-border/50">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-1 text-muted leading-relaxed">{body}</p>
      </div>
    </li>
  );
}
