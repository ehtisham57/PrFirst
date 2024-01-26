import Image from 'next/image'
import myImg from "../images/freelance.png"
export default function HeroSection(){
    return(
        <>
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    <Image
    
    alt="Picture of the author"
      className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
      src={myImg}
    />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
          Syed Ehtisham
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
          Web Developer | Teacher | Content Creator
        </h1>


        
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-secondaryColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text- text-secondaryColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text- text-secondaryColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text- text-secondaryColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4  text-secondaryColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed">
        👋 Hello, World! I'm Syed Ehtisham, a passionate web developer with a knack for turning ideas into digital reality. Welcome to my virtual playground, where lines of code come together to create seamless and visually stunning online experiences.</p>
        <br/>
        <p>
        🚀 My journey in the world of web development has been nothing short of exhilarating. With a keen eye for design and a love for problem-solving, I specialize in creating websites that not only look good but also function flawlessly. Whether it's building responsive and user-friendly interfaces or delving into the intricacies of backend development, I thrive on the challenges that come with crafting exceptional online solutions.</p>
        <br/>
        <p>💻 Armed with a diverse skill set that spans HTML, CSS, JavaScript, and a variety of modern frameworks and libraries, I'm dedicated to staying at the forefront of technology. I believe in the power of clean code, intuitive user experiences, and staying ahead of the curve in an ever-evolving digital landscape.</p>
        <br/>
        <p>🛠️ From conceptualization to deployment, I approach each project with enthusiasm and attention to detail. Whether you're a startup looking to establish your online presence or an established business in need of a digital facelift, I'm here to turn your vision into a reality.</p>
        <br/>
        <p>🌐 Take a stroll through my portfolio, and you'll discover a collection of projects that showcase my commitment to excellence. Let's collaborate and bring your ideas to life. The web is my canvas, and together, we can paint something extraordinary.</p>
        <br/>
        <p className='text-secondaryColor font-bold'>Ready to embark on a digital journey? Let's build something amazing together!</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
        </div>
        <div className="flex">
          <button className="flex ml-auto text-defualtcolor bg-secondaryColor border-0 py-2 px-6 focus:outline-none hover:bg-primaryColor rounded">
            My All Projects
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}