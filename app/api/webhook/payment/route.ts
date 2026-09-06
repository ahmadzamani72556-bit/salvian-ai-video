import { NextResponse } from "next/server";
export async function POST(){ return NextResponse.json({ok:false, status:"webhook_not_connected"} ,{status:501}); }
