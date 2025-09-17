import { NextResponse, NextRequest } from "next/server";

export const GET = () => {
    const data = {name: "Lazizbek"}
    return NextResponse.json(data)
}