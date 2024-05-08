"use client"

export default function GlobalError ({error, reset}) {
    return (
        <html>
            <body>
                <h2> Página con error</h2>
                <button onClick={()=> reset()}> Volver a cargar</button>
            </body>
        </html>
    )
}