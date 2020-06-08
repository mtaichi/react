import React from "react";
import {galleryImgs} from "../data.js";
import Item from "./gallery/item";

export default function Gallery(){
	console.log(galleryImgs);
	return (
		<section id="gallery" className="gallery">
		<h1 class="section-title">gallery</h1>
		 {galleryImgs.map((img,index)=>{
			return <Item img={img} index={index}/>
		})}
		  
		</section>
	);
}