import { NextResponse } from "next/server";
export async function POST(){ return NextResponse.json({ok:false, status:"engine_not_connected", message:"Video renderer is not connected yet."},{status:501}); }
