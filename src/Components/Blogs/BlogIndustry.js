import React from "react";
import img_4 from "./BlogsImages/img_4.png";
import img_5 from "./BlogsImages/img_5.png";
import img from "./BlogsImages/img.png";
import img_3 from "./BlogsImages/img_3.png";
const BlogIndustry=()=>{
    return<div className={"container"}>
        <div className={"events-container"}>
            {
                [
                    {
                        image: img_3,
                        title: <>Don’t underestimate the lorem<br/>
                            ipsum dolor amet</>,
                        text: "Industry-October 20, 2020"
                    },
                    {
                        image: img_4,
                        title: <>Don’t underestimate the lorem<br/>
                            ipsum dolor amet</>,
                        text: "Industry-October 20, 2020"
                    },
                    {
                        image: img_5,
                        title: <>Don’t underestimate the lorem<br/>
                            ipsum dolor amet</>,
                        text: "Industry-October 20, 2020"
                    },

                ].map((value, index) => {
                    return <div key={index}>
                        <img className={"blogs-images"} src={value.image} alt={".."}/>
                        <h5 className={"blogs-title"}> {value.title}</h5>
                        <p className={"blogs-text"}> {value.text}</p>
                    </div>
                })
            }

        </div>
    </div>
}
export default BlogIndustry