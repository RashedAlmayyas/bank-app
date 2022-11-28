import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<section
		class="overflow-hidden bg-gray-50 
		Light:bg-gray-900 sm:grid sm:grid-cols-2 sm:items-center"
	  >
		<div class="p-8 md:p-12 lg:px-16 lg:py-24">
		  <div class="mx-auto max-w-xl text-center sm:text-left">
			<h2 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
			R-M Islamic Bank			</h2>
	  
			<p class="hidden text-gray-500 dark:text-gray-400 md:mt-4 md:block">
			R-M Islamic Bank of Jordan for financing and financial solutions within Sharia controls "Interest 4.3 by God's command" and
			Dinars come out of our banks "veiled"		</p>
	  
			
		  </div>
		</div>
	  
		<img
		  alt="Violin"
		  width="50px"
		  src="https://th.bing.com/th/id/OIP.bInaIMDmjkUotkT4Wz8YcgHaEK?pid=ImgDet&rs=1"
		  class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
		/>
	  </section>
		  
	);
}
