import React from 'react'
import { useChannelStore } from '../store/useChannelStore'
import Category from '../compoents/category/Category'
import Advertisement from '../compoents/advertisement/Advertisement'
import ScrollNotice from '../compoents/scrollnotice/ScrollNotice'
const Home = () => {
  const { categories, isChannelLoading } = useChannelStore()
  return (
    <div>
      {
        isChannelLoading ? <div className='min-h-[95vh] flex justify-center items-center'>
          <span className="loading loading-spinner text-primary"></span>
        </div>
          :
          <div>
            <section>
              <Advertisement />
            </section>
            <section className='pt-5 px-3 max-w-7xl mx-auto'>
              <ScrollNotice />
            </section>

            <section className='pt-5 px-3 max-w-7xl mx-auto'>
              <div className="mb-6">
                <h2 className="text-3xl font-bold">Explore Your Favorite Channels</h2>
                <p className="text-gray-600 mt-2">
                  Scroll through the categories below and pick any channel to start watching instantly.
                </p>
              </div>
              {
                categories.map((cat, i) => <Category cat={cat} key={i} />)
              }
            </section>
          </div>
      }
    </div>
  )
}

export default Home
