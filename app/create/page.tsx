"use client";
import { useState } from "react";
import { Sparkles, Wand2, CheckCircle2 } from "lucide-react";
import { Card, Button, Pill } from "@/components/ui";

export default function Create(){
 const [duration,setDuration]=useState(7); const [loading,setLoading]=useState(false);
 const generate=()=>{setLoading(true);setTimeout(()=>setLoading(false),1800)};
 return <div className="space-y-6">
  <div><Pill>CREATE VIDEO</Pill><h1 className="mt-3 text-4xl font-black">Start with an idea.</h1><p className="mt-2 text-zinc-500">Everything else can be automated.</p></div>
  <div className="grid xl:grid-cols-[1fr_360px] gap-5">
   <Card className="space-y-6">
    <div><label className="text-sm font-semibold">Video topic / idea</label><textarea placeholder="Contoh: Rahasia Zikir Qolbi dalam kajian tasawuf..." className="mt-2 w-full min-h-40 rounded-2xl bg-black/20 border border-white/10 p-4 outline-none focus:border-violet-400/60"/></div>
    <div><label className="text-sm font-semibold">Content type</label><select className="mt-2 w-full rounded-xl bg-black/20 border border-white/10 p-3"><option>Ceramah / Tasawuf</option><option>Storytelling</option><option>Edukasi</option><option>Motivasi</option><option>Informasi</option><option>Music Video</option></select></div>
    <div><label className="text-sm font-semibold">Duration</label><div className="mt-2 grid grid-cols-4 gap-2">{[5,6,7,8].map(n=><button key={n} onClick={()=>setDuration(n)} className={`rounded-xl border p-3 ${duration===n?"border-violet-400 bg-violet-500/15":"border-white/10 bg-white/5"}`}>{n} min</button>)}</div></div>
    <div className="grid md:grid-cols-2 gap-4">
     <div><label className="text-sm font-semibold">Voice</label><select className="mt-2 w-full rounded-xl bg-black/20 border border-white/10 p-3"><option>Pria Dewasa — Tenang</option><option>Pria Dewasa — Tegas</option><option>Wanita Dewasa — Natural</option></select></div>
     <div><label className="text-sm font-semibold">Visual style</label><select className="mt-2 w-full rounded-xl bg-black/20 border border-white/10 p-3"><option>Cinematic</option><option>Realistic</option><option>Documentary</option><option>Islamic</option></select></div>
    </div>
    <div className="grid sm:grid-cols-2 gap-2 text-sm">{["Auto subtitle","Background music","AI thumbnail","YouTube SEO","Intro / Outro","Logo watermark"].map(x=><label key={x} className="flex gap-3 items-center rounded-xl bg-white/[.03] border border-white/5 p-3"><input type="checkbox" defaultChecked/>{x}</label>)}</div>
    <Button primary className="w-full py-4 text-base" onClick={generate} disabled={loading}>{loading?"Preparing project...":<><Sparkles size={18} className="mr-2"/> Generate Video</>}</Button>
   </Card>
   <Card><h2 className="font-bold">Pipeline</h2><p className="text-sm text-zinc-500 mt-1">Your final production flow</p><div className="mt-5 space-y-3">{["AI Script","Voice-over","Scenes & Visuals","Subtitles","Video Render","Thumbnail","YouTube SEO"].map((x,i)=><div key={x} className="flex items-center gap-3 p-3 rounded-xl bg-white/[.03]"><div className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center text-xs">{i+1}</div><span className="text-sm">{x}</span><CheckCircle2 size={15} className="ml-auto text-zinc-600"/></div>)}</div></Card>
  </div>
 </div>
}