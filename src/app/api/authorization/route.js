import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function GET(){
    let headerList = headers();
    let token = headerList.get('Bearer_token');
    return NextResponse.json({msg:"Bearer_token received",token});
}