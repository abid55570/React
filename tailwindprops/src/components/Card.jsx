import React from 'react'

// function Card(props) {
    // or we can use direct the userName 
function Card({username, btnText="visit here..."}) {
// then there is no need to add props.userame eventually
    // console.log(props, "props");
    // console.log(username);
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div className="text-slate-700 dark:text-slate-500"> 
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
<div className="w-[300px] rounded-md border">
  <img
    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="Laptop"
    className="h-[200px] w-full rounded-md object-cover"
  />
  <div className="p-4">
    <h1 className="text-lg font-semibold">About Macbook</h1>
    <p className="mt-3 text-sm text-gray-600">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button
      type="button"
      className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      {btnText}
    </button>
  </div>
</div>


    </div>
  )
}

export default Card
