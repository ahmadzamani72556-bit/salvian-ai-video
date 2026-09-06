import { NextResponse } from "next/server";
export async function POST(){ return NextResponse.json({ok:false, status:"engine_not_connected", message:"Script engine is not connected yet."},{status:501}); }
