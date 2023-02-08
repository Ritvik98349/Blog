import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import './blog.css';
import {BsPencilSquare} from 'react-icons/bs';
import { useParams } from "react-router-dom";

export default function Blog() {
    const id = useParams();
    const[Article, setArticle] = useState("");
    const getArticlesDetails = async() =>{
        const requestArticle = await axios.get("http://localhost:3333/Artciles/"+id.id);
        setArticle(requestArticle.data);
    }
    useEffect(()=>{
        getArticlesDetails();
    },[]) 
    // console.log(Article);   
    return(
        <>  
            <div className="container">
                <div className="blogr1">
                    <div className="blogr1col1">
                        <img className="frontimg"src="/images/image2.png"/>
                    </div>
                    <div className="blogr1col2">
                        <div className="blogr1col2r1">
                            <div className="blogr1col2r1cont">
                                <div className="blogr1col2r1head">
                                    <div className="blogr1col2r1head1">
                                         {Article.Title},{Article.Location}
                                    </div>
                                    <div className="blogr1col2r1head2">
                                       {Article.Intro}
                                    </div>
                                    <div className="authicon">
                                        <BsPencilSquare></BsPencilSquare>
                                        <div style={{marginLeft:'1rem'}}>{Article.Author}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{size:'10rem'}}></hr>
                <div className="blogr2">
                    <div className="details">
                        <h1 className="blogr1col2r1head1" style={{display:'flex',justifyContent:'center'}}>{Article.Title}</h1>
                        <p className="blogr1col2r1head2">{Article.Content} </p>
                    </div>
                </div>
            </div>

        </>
    )
}

