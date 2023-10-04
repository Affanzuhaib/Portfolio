
const Contact = () => {
  return (
    <section id='contact'
      className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'
    >
      <p className='font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide'>
        04. what's Next?
      </p>
      <h2 className='font-titleFont text-5xl font-semibold'>Get In Touch</h2>
      <p className='max-w-[600px] text-center text-textDark '>
      "The future belongs to those who learn more skills and combine them in creative ways." – Robert Greene
      </p>
        <a href="mailto:mohammed.affan.1024@gmail.com">
          <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
            Say Hello!
          </button>
        </a>
    </section>
  )
}

export default Contact