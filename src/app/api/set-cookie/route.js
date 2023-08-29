import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json(
            {msg: 'hello set-cookie'},
            {
                status:200,
                headers:{
                    "Set-Cookie":[
                        "user_preference=theme_dark; Expires=Sat, 28 Aug 2023 06:02:00 GMT; Max-Age=120; Path=/; Secure; HttpOnly; SameSite=Strict",
                        "language=en; Expires=Sat, 28 Aug 2023 06:02:00 GMT; Max-Age=120; Path=/; Secure; HttpOnly; SameSite=Strict"
                    ]
                }
            }
        );
}