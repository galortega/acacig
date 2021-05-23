import React from "react";

const NewsLetter = (props) => {
    return(
        <section class="newsletter">
                    <div class="container">
                        <div class="row center-xs">
                            <div class="col-md ">
                                <h2>Our newsletter</h2>
                                <form class="flex center-xs">
                                    <input placeholder="Enter Your Email" type="email" required="" name="" aria-label="Ingresar su Email"/>
                                    <button>SUBSCRIBE</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
    )
}

export default NewsLetter;