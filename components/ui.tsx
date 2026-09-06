export function Card({children,className=""}:{children:React.ReactNode,className?:string}) {
  return <div className={`glass rounded-3xl p-5 ${className}`}>{children}</div>
}
export function Button({children,primary=false,className="",...props}:{children:React.ReactNode,primary?:boolean,className?:string} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={`${primary?"bg-white text-black hover:bg-zinc-200":"bg-white/5 text-white hover:bg-white/10 border border-white/10"} rounded-xl px-4 py-2.5 text-sm font-semibold transition disabled:opacity-40 ${className}`}>{children}</button>
}
export function Pill({children}:{children:React.ReactNode}) {
  return <span className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-zinc-300">{children}</span>
}