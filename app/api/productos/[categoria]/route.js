import { NextResponse } from "next/server";
import { collection, getDocs, query } from "firebase/firestore";
import {db} from '@/firebase/config'


export async function GET (_, {params}) {
    
    const {categoria} = params
    const productosRef = collection (db, "productos")
    
    const q = categoria === "todos"
         ? productosRef 
         :query (productosRef, where ('category', '==', categoria))
    
    const querySnap = await getDocs(q)
    const docs = querySnap.map(doc => doc.data())
    return NextResponse.json(docs)
}

