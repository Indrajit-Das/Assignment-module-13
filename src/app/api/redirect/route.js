import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function GET(){
    return redirect('/');
}