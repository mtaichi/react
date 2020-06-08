import React from "react";

export default function Item({img}){
	return (
		<div className="gallery-item">
		 <img src={img.url} alt={img.name} className="item-img" />
                        <a href={img.url} className="item-link">
                            <h2>taichi moment</h2>
                        </a>
		</div>
		
	)
	
}