import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components';

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
        <div className='lg:col-span-8 col-span-1'>
        {posts.map((post) => <PostCard post={post} key={post.title} />)}
        </div>   
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

