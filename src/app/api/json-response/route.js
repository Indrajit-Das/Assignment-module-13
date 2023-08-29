import { NextResponse } from 'next/server';

export async function GET(){
    return NextResponse.json({message: "Welcome to out API!",version:"1.0"},{statue:201});
}