import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useToast } from '../../hooks/use-toast'
import { supabase } from '../../integrations/supabase/client'

interface Message {
    id: string,
    user_id: string,
    message: string,
    username: string | null,
    created_at: string
}

const LiveChat = () => {
    const [messages, setMessages] = useState<Message[]>([])
    const [newMessage, setNewMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const {user} = useAuth()
    const {toast} = useToast()
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior:'smooth'})
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    useEffect(() => {
        const fetchMessages = async () => {
            const {data, error} = await supabase
            .from("messages")
            .select("*")
            .order("created_at", {ascending: true})
            .limit(50)

            if (error) {
                console.error("Error fetching messages", error)
                toast({
                    title: "Error",
                    description: "Failed to load messages",
                    variant: "destructive"
                })
                return
            }
            setMessages(data || [])
        }

        fetchMessages()
    }, [toast])
  return (
    <div>LiveChat</div>
  )
}

export default LiveChat