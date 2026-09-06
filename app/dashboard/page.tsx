import Link from "next/link";
import { Sparkles, Film, Clock3, Coins, ArrowUpRight } from "lucide-react";
import { Card, Button, Pill } from "@/components/ui";

const projects=[["Rahasia Zikir Qolbi","7:32","Completed"],["Kisah Perjalanan Sang Pencari","6:18","Rendering"],["Makna Sholat Dalam Tasawuf","5:44","Draft"]];

export default function Dashboard(){
 return <div className="space-y-7">
  <section className="relative overflow-hidden rounded-[2rem] p-7 lg:p-10 glass">
   <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl"/>
   <Pill>AI YOUTUBE VIDEO GENERATOR</Pill>
   <h1 className="mt-5 text-4xl lg:text-6xl font-black tracking-tight">Ubah ide menjadi<br/><span className="gradient-text">video YouTube.</span></h1>
   <p className="mt-4 max-w-xl text-zinc-400">Buat naskah, voice-over, visual, subtitle, thumbnail dan metadata YouTube dari satu ide.</p>
   <Link href="/create" className="inline-flex mt-7"><Button primary><Sparkles size={17} className="mr-2"/> Create New Video</Button></Link>
  </section>
  <div className="grid md:grid-cols-3 gap-4">
   {[[Film,"Videos Created","24"],[Clock3,"Watch Time Generated","3h 42m"],[Coins,"Credits Remaining","120"]].map(([I,l,v])=><Card key={l as string}><I size={20}/><div className="mt-5 text-2xl font-bold">{v as string}</div><div className="text-sm text-zinc-500">{l as string}</div></Card>)}
  </div>
  <Card><div className="flex items-center justify-between mb-5"><div><h2 className="text-xl font-bold">Recent Projects</h2><p className="text-sm text-zinc-500">Your latest video projects</p></div><Link href="/projects" className="text-sm text-cyan-300 flex items-center gap-1">View all <ArrowUpRight size={15}/></Link></div>
   <div className="space-y-2">{projects.map(p=><div key={p[0]} className="rounded-2xl bg-white/[.03] border border-white/5 p-4 flex items-center gap-4"><div className="h-12 w-20 rounded-xl bg-gradient-to-br from-violet-900 to-cyan-900"/><div className="flex-1"><div className="font-semibold">{p[0]}</div><div className="text-xs text-zinc-500">{p[1]}</div></div><Pill>{p[2]}</Pill><Button>Open</Button></div>)}</div>
  </Card>
 </div>
}