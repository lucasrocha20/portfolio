export function Home() {
  return (
    <>
    <section style={{height: '650px'}} id="section1" className='mt-16 w-full p-16 flex items-start justify-between'>
      <div className='flex flex-col gap-11 max-w-3xl'>
        {/* Foto redonda */}
        <div className='flex w-20 h-20 bg-[#1E293B] rounded-full'></div>

        <div className='flex items-center gap-16 flex-col'>
          <h1 className='text-white'>Hello, I'm Lucas Rocha, a Fullstack web and mobile app developer!</h1>

          <div className='flex items-center justify-center gap-4'>
            <button className='bg-[#1E293B] p-4 rounded-full text-white'>
              <span className='text-lg'>Download CV</span>
            </button>

            <button className='bg-[#1E293B] w-16 h-16 rounded-full'>
              <span className='text-lg'></span>
            </button>

            <button className='bg-[#1E293B] w-16 h-16 rounded-full'>
              <span className='text-lg'></span>
            </button>
          </div>
        </div>
      </div>

      <div className='flex w-80 h-80 rounded-3xl bg-[#1E293B]  rotate-6 mt-28'></div>
    </section>
  </>
)
}