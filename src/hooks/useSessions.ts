import { useState } from "react"
import type { Enrollment } from "../types/enrollment"

export const useSessions = () => {
    const [sessions, setSessions] = useState<Enrollment[]>([])

    return { sessions, setSessions }
}
