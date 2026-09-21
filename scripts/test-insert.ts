/**
 * Test inserting a placeholder product exactly as the admin dashboard does
 * Run: npx tsx scripts/test-insert.ts
 */
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://mxporkdsuqamzrqdmkbb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14cG9ya2RzdXFhbXpycWRta2JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk5NTAxMjAsImV4cCI6MjEwNTUyNjEyMH0.dEk2Rx-wV7dyoTVi0CnRQwDRtYxZL5Y2w7_poeXlaGA'
)

async function main() {
  console.log('🧪 Testing product insert (anon key — same as admin dashboard)...\n')

  // 1. Insert a placeholder product
  const { data, error } = await supabase
    .from('products')
    .insert({
      title: 'Rolling Ball 3D — Unity Source Code',
      description: 'Complete Unity 3D rolling ball game source code. Includes physics-based ball controller, level system, collectibles, UI, and AdMob integration. Ready to build for Android and iOS.',
      price: 19,
      thumbnail_url: null,
      images: [],
      file_url: null,
    })
    .select()
    .single()

  if (error) {
    console.error('❌ Insert failed:', error.message)
    console.error('   Code:', error.code)
    console.error('   Details:', error.details)
    console.error('   Hint:', error.hint)
    return
  }

  console.log('✅ Product inserted successfully!')
  console.log('   ID:', data.id)
  console.log('   Title:', data.title)
  console.log('   Price: $' + data.price)

  // 2. Read it back
  const { data: fetched, error: fetchError } = await supabase
    .from('products')
    .select('*')
    .eq('id', data.id)
    .single()

  if (fetchError) {
    console.error('❌ Read back failed:', fetchError.message)
    return
  }

  console.log('\n✅ Read back confirmed!')
  console.log('   Record:', JSON.stringify(fetched, null, 2))

  // 3. Clean up — delete the test record
  const { error: deleteError } = await supabase
    .from('products')
    .delete()
    .eq('id', data.id)

  if (deleteError) {
    console.warn('⚠️  Could not delete test record:', deleteError.message)
  } else {
    console.log('\n🧹 Test record cleaned up')
  }
}

main().catch(console.error)
