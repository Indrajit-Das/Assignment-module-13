import { NextResponse } from "next/server";

export function middleware(req,res){
    if(req.nextUrl.pathname.startsWith("/api/authorization")){
        const reqHeader = new Headers(req.headers);
        const token = reqHeader.get('token');
        const response = NextResponse.next();
        response.headers.set('Bearer_token',token);
        return response;
    }
}
export const config={
    matcher:['/api/:path*']
}