import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    'https://mxporkdsuqamzrqdmkbb.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14cG9ya2RzdXFhbXpycWRta2JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk5NTAxMjAsImV4cCI6MjEwNTUyNjEyMH0.dEk2Rx-wV7dyoTVi0CnRQwDRtYxZL5Y2w7_poeXlaGA'
)

export const supabaseAdmin = createClient(
    'https://mxporkdsuqamzrqdmkbb.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14cG9ya2RzdXFhbXpycWRta2JiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTk1MDEyMCwiZXhwIjoyMTA1NTI2MTIwfQ.lFyptb5WNELuulN1qz5xj52FrUz1mnZd3noj9qTy8RM'
)

export type Product = {
    id: string
    title: string
    description: string | null
    price: number
    thumbnail_url: string | null
    images: string[] | null
    file_url: string | null
    created_at: string
}

// Keep legacy Track type for backwards compatibility during migration
export type Track = Product
