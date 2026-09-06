"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Sparkles, FileText, Mic2, Image, Film, FolderOpen,
  Wand2, Youtube, CreditCard, Settings, ShieldCheck, Menu, X, Coins
} from "lucide-react";
import { useState } from "react";

const groups = [
  { title: "WORKSPACE", items: [
    ["Dashboard","/dashboard",LayoutDashboard],
    ["Create Video","/create",Sparkles],
    ["Scripts","/scripts",FileText],
    ["Voice Studio","/voice",Mic2],
    ["Visual Studio","/visuals",Image],
    ["Video Editor","/editor",Film],
    ["My Projects","/projects",FolderOpen],
  ]},
  { title: "PUBLISH", items: [
    ["Thumbnail AI","/thumbnails",Wand2],
    ["YouTube SEO","/youtube",Youtube],
  ]},
  { title: "ACCOUNT", items: [
    ["Pricing","/pricing",CreditCard],
    ["Billing","/billing",CreditCard],
    ["Settings","/settings",Settings],
    ["Admin","/admin",ShieldCheck],
  ]},
];

export function AppShell({children}:{children:React.ReactNode}) {
  const path = usePathname();
  const [open,setOpen] = useState(false);

  return <div className="min-h-screen grid-bg">
    <aside className={`fixed z-50 inset-y-0 left-0 w-72 p-4 transition-transform lg:translate-x-0 ${open?"translate-x-0":"-translate-x-full"}`}>
      <div className="glass h-full rounded-3xl p-4 flex flex-col">
        <div className="flex items-center justify-between px-2 py-3">
          <Link href="/dashboard" className="flex items-center gap-3" onClick={()=>setOpen(false)}>
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center font-black">S</div>
            <div><div className="font-bold">SALVIAN</div><div className="text-xs text-zinc-500">AI VIDEO</div></div>
          </Link>
          <button className="lg:hidden" onClick={()=>setOpen(false)}><X size={20}/></button>
        </div>
        <nav className="mt-5 space-y-6 overflow-auto">
          {groups.map(g=><div key={g.title}>
            <div className="px-3 mb-2 text-[10px] tracking-[.2em] text-zinc-500">{g.title}</div>
            <div className="space-y-1">{g.items.map(([label,href,Icon])=>{
              const active=path===href || (href!=="/dashboard" && path.startsWith(href));
              return <Link key={href as string} href={href as string} onClick={()=>setOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${active?"bg-white/10 text-white":"text-zinc-400 hover:bg-white/5 hover:text-white"}`}>
                <Icon size={17}/><span>{label as string}</span>
              </Link>
            })}</div>
          </div>)}
        </nav>
        <div className="mt-auto glass rounded-2xl p-3">
          <div className="flex items-center gap-2 text-sm"><Coins size={16}/><span>Credits</span><b className="ml-auto">120</b></div>
          <div className="mt-2 h-1.5 rounded-full bg-white/10"><div className="h-full w-2/3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"/></div>
          <Link href="/pricing" className="mt-3 block rounded-xl bg-white text-center py-2 text-xs font-bold text-black">Upgrade Plan</Link>
        </div>
      </div>
    </aside>
    {open && <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={()=>setOpen(false)}/>}
    <main className="lg:pl-72">
      <header className="sticky top-0 z-30 px-4 lg:px-8 pt-4">
        <div className="glass rounded-2xl h-14 px-4 flex items-center gap-3">
          <button className="lg:hidden" onClick={()=>setOpen(true)}><Menu/></button>
          <div className="text-sm text-zinc-400">{path.replace("/","").replaceAll("-"," ") || "dashboard"}</div>
          <div className="ml-auto flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-xs"><Coins size={14}/> 120 credits</div>
            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">RS</div>
          </div>
        </div>
      </header>
      <div className="p-4 lg:p-8 max-w-[1500px] mx-auto">{children}</div>
    </main>
  </div>
}