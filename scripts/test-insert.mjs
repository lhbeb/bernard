import { createClient } from '../node_modules/@supabase/supabase-js/dist/index.mjs'

const supabase = createClient(
  'https://mxporkdsuqamzrqdmkbb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14cG9ya2RzdXFhbXpycWRta2JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk5NTAxMjAsImV4cCI6MjEwNTUyNjEyMH0.dEk2Rx-wV7dyoTVi0CnRQwDRtYxZL5Y2w7_poeXlaGA'
)

console.log('Testing product insert with anon key...\n')

const { data, error } = await supabase
  .from('products')
  .insert({
    title: 'Rolling Ball 3D — Unity Source Code',
    description: 'Complete Unity 3D rolling ball game. Physics controller, levels, collectibles, AdMob.',
    price: 19,
    thumbnail_url: null,
    images: [],
    file_url: null,
  })
  .select()
  .single()

if (error) {
  console.error('FAILED:', error.message)
  console.error('Code:', error.code)
  console.error('Hint:', error.hint)
  console.error('Details:', error.details)
} else {
  console.log('SUCCESS!')
  console.log('ID:', data.id)
  console.log('Title:', data.title)
  console.log('Price: $' + data.price)

  const { error: delError } = await supabase.from('products').delete().eq('id', data.id)
  if (delError) console.warn('Could not clean up:', delError.message)
  else console.log('\nTest record cleaned up.')
}
