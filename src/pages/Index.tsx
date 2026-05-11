import heroClinic from "@/assets/hero-clinic.jpg";
import safetyImg from "@/assets/safety-instruments.jpg";
import patientImg from "@/assets/patient-smile.jpg";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";
import caseBefore from "@/assets/case-before.jpg";
import caseAfter from "@/assets/case-after.jpg";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, ShieldCheck, Award, Wallet, Stethoscope, Star, ChevronRight, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const PHONE = "8 (962) 914-65-58";
const PHONE_HREF = "tel:+79629146558";
const ADDRESS = "ул. Александра Солженицына, 6а, корп. 1, Москва, 109004";
const YANDEX_QUERY = encodeURIComponent(ADDRESS);

const services = [
  { name: "Профессиональная гигиена", price: "от 4 900 ₽", note: "Air Flow + ультразвук", sale: "−15% в будни до 12:00" },
  { name: "Лечение кариеса", price: "от 3 800 ₽", note: "Под микроскопом, гарантия 2 года" },
  { name: "Имплантация под ключ", price: "от 39 000 ₽", note: "Implantium, Straumann", sale: "Рассрочка 0% до 12 мес." },
  { name: "Виниры E-max", price: "от 28 000 ₽", note: "Цифровое моделирование улыбки" },
  { name: "Отбеливание Zoom 4", price: "от 19 500 ₽", note: "За одно посещение" },
  { name: "Удаление зуба", price: "от 2 500 ₽", note: "Атравматично, под анестезией" },
];

const team = [
  { name: "Ирина Соловьёва", role: "Терапевт-эндодонтист", years: "12 лет стажа", img: doc1, certs: "Сертификат МГМСУ, Dentsply Sirona" },
  { name: "Андрей Волков", role: "Хирург-имплантолог", years: "15 лет стажа", img: doc2, certs: "Straumann Pro, член СтАР" },
  { name: "Мария Логинова", role: "Ортодонт", years: "9 лет стажа", img: doc3, certs: "Invisalign Provider, ortho-cert." },
];

const reviews = [
  { source: "Яндекс Карты", author: "Анна К.", text: "Очень аккуратно вылечили глубокий кариес. Без боли, объяснили каждый шаг и согласовали смету заранее." },
  { source: "2ГИС", author: "Дмитрий П.", text: "Поставили имплант. Чёткие сроки, понятные цены, через неделю — никаких неприятных сюрпризов." },
  { source: "Яндекс Карты", author: "Ольга М.", text: "Хожу всей семьёй на гигиену. Чисто, спокойно, врачи уважительные. Рекомендую." },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", service: services[0].name, time: "Сегодня вечером" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Укажите имя и телефон");
      return;
    }
    toast.success("Заявка принята. Перезвоним в течение 15 минут.");
    setForm({ ...form, name: "", phone: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-primary text-primary-foreground">КС</span>
            <span className="hidden sm:inline">Клиника Профессиональной Стоматологии</span>
            <span className="sm:hidden">КПС</span>
          </a>
          <a href={PHONE_HREF} className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">{PHONE}</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-10 lg:gap-16 py-12 lg:py-20 items-center">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--primary-soft))] text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Москва · м. Таганская · 5 минут пешком
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              Стоматология, которой <span className="text-primary">доверяют</span> с первого приёма
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Лечение под микроскопом, прозрачные цены и план лечения до начала работ. Запишитесь онлайн — подтвердим время в течение 15 минут.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="h-12 px-7 text-base font-semibold">
                <a href="#zapis">Записаться онлайн <ChevronRight className="w-4 h-4 ml-1" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-7 text-base">
                <a href="#zapis">Получить план лечения</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Лицензия Минздрава</span>
              <span className="flex items-center gap-2"><Award className="w-4 h-4 text-primary" /> Гарантия на работы</span>
              <span className="flex items-center gap-2"><Wallet className="w-4 h-4 text-primary" /> Рассрочка 0%</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-soft aspect-[4/3]">
              <img src={heroClinic} alt="Кабинет стоматологической клиники" width={1536} height={1024} className="w-full h-full object-cover" />
              {/* Animated SVG over image corner */}
              <div className="absolute -bottom-6 -left-6 hidden sm:block">
                <ToothPulseSvg />
              </div>
            </div>
            {/* Trust card */}
            <div className="absolute -top-4 -right-4 sm:top-6 sm:-right-6 bg-card rounded-2xl shadow-soft p-4 w-56 border border-border">
              <div className="flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                <span className="text-foreground font-semibold ml-1">5,0</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">по оценкам Яндекс Карт</div>
              <div className="mt-2 text-sm font-medium">5 лет на Таганке</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="uslugi" className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="container">
          <SectionHead eyebrow="Услуги" title="Цены прозрачные. Смета — до начала лечения." subtitle="Без скрытых платежей. По итогам осмотра вы получаете подробный план с фиксированной стоимостью." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {services.map((s) => (
              <div key={s.name} className="group rounded-2xl border border-border bg-background p-6 hover:border-primary hover:shadow-card transition-all">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display font-bold text-lg">{s.name}</h3>
                  <Stethoscope className="w-5 h-5 text-primary shrink-0" />
                </div>
                <div className="mt-3 text-2xl font-display font-extrabold text-primary">{s.price}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.note}</div>
                {s.sale && (
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/20 text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {s.sale}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="vrachi" className="py-16 lg:py-24">
        <div className="container">
          <SectionHead eyebrow="Команда" title="Врачи с подтверждённой квалификацией" subtitle="Каждый специалист регулярно проходит повышение квалификации в России и Европе." />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {team.map((m) => (
              <article key={m.name} className="rounded-2xl overflow-hidden bg-card border border-border shadow-card">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img src={m.img} alt={m.name} loading="lazy" width={768} height={896} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="text-sm text-primary font-semibold">{m.role}</div>
                  <h3 className="font-display font-bold text-xl mt-1">{m.name}</h3>
                  <div className="text-sm text-muted-foreground mt-1">{m.years}</div>
                  <div className="text-xs text-muted-foreground mt-3 flex items-start gap-2">
                    <Award className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {m.certs}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CASES BEFORE/AFTER */}
      <section className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="container">
          <SectionHead eyebrow="Кейсы" title="До и после" subtitle="Реальные истории пациентов нашей клиники." />
          <div className="grid lg:grid-cols-2 gap-8 mt-10 items-start">
            <div className="rounded-2xl overflow-hidden bg-background border border-border shadow-card">
              <div className="grid grid-cols-2">
                <figure className="relative">
                  <img src={caseBefore} alt="До лечения" loading="lazy" width={1024} height={768} className="w-full aspect-square object-cover" />
                  <figcaption className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/90 text-xs font-semibold">До</figcaption>
                </figure>
                <figure className="relative">
                  <img src={caseAfter} alt="После лечения" loading="lazy" width={1024} height={768} className="w-full aspect-square object-cover" />
                  <figcaption className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">После</figcaption>
                </figure>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg">Реставрация фронтальных зубов</h3>
                <p className="text-sm text-muted-foreground mt-2">Пациентка обратилась со сколом и потемнением эмали. За 2 визита: реставрация композитом и профессиональная гигиена. Срок — 5 дней.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden bg-background border border-border shadow-card">
              <img src={patientImg} alt="Довольный пациент" loading="lazy" width={1280} height={896} className="w-full aspect-[4/3] object-cover" />
              <div className="p-6">
                <h3 className="font-display font-bold text-lg">«Перестал стесняться улыбки»</h3>
                <p className="text-sm text-muted-foreground mt-2">Сергей, 32 года. Имплантация одного зуба + гигиена. Лечение шло по согласованному плану, без переноса сроков.</p>
                <div className="flex items-center gap-1 text-accent mt-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="otzyvy" className="py-16 lg:py-24">
        <div className="container">
          <SectionHead eyebrow="Отзывы" title="Что пишут пациенты" subtitle="Собраны с Яндекс Карт и 2ГИС." />
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {reviews.map((r, i) => (
              <article key={i} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-xs font-semibold text-primary">{r.source}</span>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed">«{r.text}»</p>
                <div className="mt-4 text-sm text-muted-foreground">— {r.author}</div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href={`https://yandex.ru/maps/?text=${YANDEX_QUERY}`} target="_blank" rel="noopener" className="text-primary font-semibold hover:underline">
              Все отзывы на Яндекс Картах →
            </a>
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-soft order-2 lg:order-1">
            <img src={safetyImg} alt="Стерильные инструменты" loading="lazy" width={1280} height={896} className="w-full aspect-[4/3] object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHead eyebrow="Безопасность" title="Стерильность и оборудование, которым доверяют врачи" subtitle="" align="left" />
            <ul className="mt-8 space-y-4">
              {[
                "Лицензия Департамента здравоохранения Москвы",
                "Сертифицированные врачи — подтверждение по запросу",
                "Стерилизация инструментов в автоклавах класса B",
                "Одноразовые расходники и индивидуальные наборы",
                "Гарантия на лечебные работы — до 2 лет",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="grid place-items-center w-6 h-6 rounded-full bg-primary/15 text-primary mt-0.5 shrink-0">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-[15px]">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section id="kontakty" className="py-16 lg:py-24">
        <div className="container">
          <SectionHead eyebrow="Как добраться" title="Мы в центре Москвы, рядом с метро Таганская" subtitle={ADDRESS} />
          <div className="grid lg:grid-cols-3 gap-6 mt-10">
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-border shadow-card bg-card aspect-[16/10]">
              <iframe
                title="Карта проезда"
                src={`https://yandex.ru/map-widget/v1/?text=${YANDEX_QUERY}&z=17`}
                width="100%"
                height="100%"
                frameBorder={0}
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              />
            </div>
            <div className="space-y-4">
              <InfoRow icon={<MapPin className="w-5 h-5" />} title="Адрес" text={ADDRESS} />
              <InfoRow icon={<Phone className="w-5 h-5" />} title="Телефон" text={PHONE} href={PHONE_HREF} />
              <InfoRow icon={<Clock className="w-5 h-5" />} title="Часы работы" text={"Пн–Сб: 09:00–21:00\nВс: 10:00–18:00"} />
              <InfoRow icon={<MapPin className="w-5 h-5" />} title="Парковка" text="Бесплатные места во дворе для пациентов клиники" />
            </div>
          </div>
        </div>
      </section>

      {/* APPOINTMENT FORM */}
      <section id="zapis" className="py-16 lg:py-24 bg-card border-t border-border">
        <div className="container max-w-3xl">
          <SectionHead eyebrow="Запись" title="Запишитесь онлайн" subtitle="Перезвоним в течение 15 минут и подтвердим удобное время." />
          <form onSubmit={handleSubmit} className="mt-10 grid sm:grid-cols-2 gap-4 p-6 sm:p-8 bg-background rounded-2xl border border-border shadow-card">
            <Field label="Ваше имя">
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" placeholder="Как к вам обращаться" />
            </Field>
            <Field label="Телефон">
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} type="tel" className="input" placeholder="+7 (___) ___-__-__" />
            </Field>
            <Field label="Услуга">
              <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="input">
                {services.map((s) => <option key={s.name}>{s.name}</option>)}
                <option>Консультация / план лечения</option>
              </select>
            </Field>
            <Field label="Удобное время">
              <select value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="input">
                <option>Сегодня вечером</option>
                <option>Завтра утром</option>
                <option>Завтра днём</option>
                <option>На выходных</option>
                <option>Готов выбрать с администратором</option>
              </select>
            </Field>
            <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4 mt-2">
              <Button type="submit" size="lg" className="h-12 px-7 text-base font-semibold">Записаться онлайн</Button>
              <p className="text-xs text-muted-foreground">Нажимая «Записаться», вы соглашаетесь с обработкой персональных данных.</p>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border">
        <div className="container flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Клиника Профессиональной Стоматологии</div>
          <div className="flex gap-6">
            <a href={PHONE_HREF} className="hover:text-primary">{PHONE}</a>
            <a href="#zapis" className="hover:text-primary">Запись</a>
          </div>
        </div>
      </footer>

      <style>{`
        .input { width: 100%; height: 2.75rem; padding: 0 0.875rem; border-radius: 0.625rem; background: hsl(var(--background)); border: 1px solid hsl(var(--border)); font: inherit; outline: none; transition: border-color .15s; }
        .input:focus { border-color: hsl(var(--primary)); box-shadow: 0 0 0 3px hsl(var(--primary) / 0.15); }
      `}</style>
    </div>
  );
}

function SectionHead({ eyebrow, title, subtitle, align = "center" }: { eyebrow: string; title: string; subtitle?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <div className="text-sm font-semibold text-primary uppercase tracking-wider">{eyebrow}</div>
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-2">{title}</h2>
      {subtitle && <p className="text-muted-foreground mt-3 whitespace-pre-line">{subtitle}</p>}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium mb-1.5 block">{label}</span>
      {children}
    </label>
  );
}

function InfoRow({ icon, title, text, href }: { icon: React.ReactNode; title: string; text: string; href?: string }) {
  const Content = (
    <div className="flex gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors">
      <span className="text-primary mt-0.5">{icon}</span>
      <div>
        <div className="text-xs uppercase tracking-wide font-semibold text-muted-foreground">{title}</div>
        <div className="text-[15px] mt-0.5 whitespace-pre-line">{text}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{Content}</a> : Content;
}

function ToothPulseSvg() {
  return (
    <svg width="180" height="180" viewBox="0 0 180 180" className="drop-shadow-xl">
      <defs>
        <radialGradient id="tg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="hsl(var(--primary-soft))" />
          <stop offset="100%" stopColor="hsl(var(--primary))" />
        </radialGradient>
      </defs>
      <circle cx="90" cy="90" r="70" fill="hsl(var(--background))" stroke="hsl(var(--border))" />
      <circle cx="90" cy="90" r="30" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" className="animate-ring" />
      <circle cx="90" cy="90" r="30" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" className="animate-ring-2" />
      <g className="animate-tooth" style={{ transformOrigin: "90px 90px" }}>
        <path
          d="M90 55c-12 0-22 6-22 18 0 8 3 12 5 22 2 9 4 22 10 22 5 0 5-12 7-12s2 12 7 12c6 0 8-13 10-22 2-10 5-14 5-22 0-12-10-18-22-18z"
          fill="url(#tg)"
        />
        <path d="M82 70c4-3 12-3 16 0" stroke="hsl(var(--background))" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
      </g>
      <circle cx="90" cy="90" r="68" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" className="animate-dash" opacity="0.5" />
    </svg>
  );
}
