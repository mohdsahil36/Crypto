"use client"

import { ModeToggle } from "@/app/context/mode-toggle"

export default function Navbar(){
    return(
        <div className="p-4 text-end">
            <ModeToggle/>
        </div>
    )
}