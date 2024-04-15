import { mockData } from "@/data/mockDat";
import { NextResponse } from "next/server";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer))
}
export async function GET(_, {params}) {
    const {description} = params
    const data = mockData.find(product => product.description === description)

    await sleep(1000)
    return NextResponse.json(data)
}
