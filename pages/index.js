import Head from 'next/head'
const posts = [
  {
    title: '10 Back stretches you need', excerpt: 'learn these effective back stretching movements'
  },
  {
    title: 'Learn to sleep better', excerpt: 'Effective ways for a better sleep quality every night'
  }
];

export default function home (){
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        {posts.map((post, index) => (
            <div>
              {post.title}
              {post.excerpt}
            </div>
          ))}
      </div>


    </div>
  )
}

