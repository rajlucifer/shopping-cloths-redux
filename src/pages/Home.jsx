
import React, { useState, useEffect } from "react";

import Spinner from "../components/Spinner"
import Product from "../components/Product";

const Home = () => {
    const API = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
    async function fetchProductData() {
        setLoading(true);
        try {

            const req = await fetch(API);
            const data = await req.json();
            console.log(data);
            setPost(data);


        }
        catch (error) {
            console.log("getting error in api");
            setPost([]);


        }
        setLoading(false);

    }
    useEffect(() => {
        fetchProductData()
    }, []);
    return (
        <div>
            {loading ? <Spinner /> :
                post.length > 0 ?
                //using the grid is better option here  this is the main home page thatswhy we do it here this home container
                    <div className="grid xs:grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto space-y-10 space-x-5 p-2 min-h-[80vh] ">
                        {
                            post.map((post) => (
                                //props is created 
                                <Product key={post.id} post={post} />
                            ))
                        }
                    </div>
                    : <div className="flex items-center justify-center">NO DATA IS FOUND</div>
            }
        </div>
    )
}

export default Home;