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
          const { data, error } = await supabase
            .from('messages')
            .select('*')
            .order('created_at', { ascending: true })
            .limit(50);
    
          if (error) {
            console.error('Error fetching messages:', error);
            toast({
              title: "Error",
              description: "Failed to load messages",
              variant: "destructive",
            });
            return;
          }
    
          setMessages(data || []);
        };
    
        fetchMessages();
      }, [toast]);

      useEffect(() => {
        const channel = supabase
          .channel('messages-channel')
          .on(
            'postgres_changes',
            {
              event: 'INSERT',
              schema: 'public',
              table: 'messages'
            },
            (payload) => {
              const newMessage = payload.new as Message;
              setMessages(prev => [...prev, newMessage]);
            }
          )
          .subscribe();
    
        return () => {
          supabase.removeChannel(channel);
        };
      }, []);

      const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault()

        if(!user) {
            toast({
                title: "Authentication Required",
                description: "Please sign in to send messages",
                variant: "destructive"
            })
            return
        }

        if(!newMessage.trim()) return;

        setIsLoading(true)

        try {
            const {error} = await supabase
                .from("messages")
                .insert({
                    user_id: user.id,
                    message: newMessage.trim(),
                    username: user.email?.split("@")[0] || "Anonymous"
                })
            if (error) throw error

            setNewMessage("")
        } catch(error) {
            console.error("Error sending messages: ", error)
            toast({
                title: "Error",
                description: "Failed to send message",
                variant: "destructive"
            })
        } finally {
            setIsLoading(false)
        }
      }
      const formatTime = (timestamp: string) => {
        return new Date(timestamp).toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit' 
        });
      };
  return (
    <div>LiveChat</div>
  )
}

export default LiveChat