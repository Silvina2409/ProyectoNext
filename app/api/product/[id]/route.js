import {doc, getDoc} from "firebase/firestore"
import { NextResponse } from "next/server";
import {db} from "@/firebase/config"

export async function GET(_, {params}) {
    const {id} = params
    const docRef = doc(db, "productos", id)
    const docSnap = await getDoc (docRef)
    return NextResponse.json(docSnap.data())
  
}
