import React from 'react'



function AboutPage() {
  return (
    <div className="relative h-screen">
      <div className="relative h-full z-10 flex flex-col justify-center items-center leading-none mx-3 lg:mt-0 md:mt-0">
        <div className="lg:text-[180px] md:text-[100px] sm:text-[40px] font-archivio">WHAT</div>
        <div className="lg:text-[180px] md:text-[100px] sm:text-[40px] font-archivio">IS</div>
        <div className="mt-5 lg:text-[180px] md:text-[100px] sm:text-[40px] font-archivio bg-gradient-to-r from-bermuda to-amber-200 text-transparent bg-clip-text">LINDEN</div>
      </div> 
      <div className="relative h-full flex flex-col justify-center align-center z-10 bg-teal-50">
        <div className="w-1/2  font-poppins-700 text-xl lg:text-3xl mx-auto">
          <p className="mb-12">In the heart of my grandmother's garden stood Linden, a tree that blossomed with memories. Every bloom brought forth an enchanting aroma, reminiscent of the stories grandma shared. In Romania, we cherished its leaves, brewing them into medicinal teas, grounding us in tradition and health.</p>
          <p className="mb-12">As the years passed, my grandmother began her battle with dementia. Instead of anchoring her to the present, I learned to journey with her into her past, cherishing her tales. Those moments of reflection inspired the creation of "Linden," an app dedicated to those navigating the labyrinth of Alzheimer's.</p>
          <p className="mb-12">With Linden, users can delve into the vast archives of The New York Times, offering reading material from as far back as 1908—the birth year of the oldest person in America, and extending to the present day, 2023. Reading isn't just a gateway to the past; studies reveal its power to slow the progression of Alzheimer's.</p>
          <p>Linden is more than just an app; it's a bridge to yesteryears and a testament to the power of stories, embodying the essence of my grandmother's legacy and the strength of memories.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
