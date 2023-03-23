import {useEffect,useState,Fragment} from "react";

function EventList(){
    return (
        <Fragment>
            <div className="wrapper row3">
                <main className="hoc container clear">

                    <div className="content">
                        <div id="gallery">
                            <figure>
                                <header className="heading">제주 이벤트 & 행사</header>
                                <ul className="nospace clear">
                                    <li className="one_quarter first"><a href="#"><img src="../images/demo/gallery/01.png"
                                                                                       alt="/"/></a></li>
                                    <li className="one_quarter"><a href="#"><img src="../images/demo/gallery/01.png" alt=""/></a>
                                    </li>
                                    <li className="one_quarter"><a href="#"><img src="../images/demo/gallery/01.png" alt=""/></a>
                                    </li>
                                    <li className="one_quarter"><a href="#"><img src="../images/demo/gallery/01.png" alt=""/></a>
                                    </li>
                                    <li className="one_quarter first"><a href="#"><img src="../images/demo/gallery/01.png"
                                                                                       alt=""/></a></li>
                                    <li className="one_quarter"><a href="#"><img src="../images/demo/gallery/01.png" alt=""/></a>
                                    </li>
                                    <li className="one_quarter"><a href="#"><img src="../images/demo/gallery/01.png" alt=""/></a>
                                    </li>
                                    <li className="one_quarter"><a href="#"><img src="../images/demo/gallery/01.png" alt=""/></a>
                                    </li>
                                    <li className="one_quarter first"><a href="#"><img src="../images/demo/gallery/01.png"
                                                                                       alt=""/></a></li>
                                    <li className="one_quarter"><a href="#"><img src="../images/demo/gallery/01.png" alt=""/></a>
                                    </li>
                                    <li className="one_quarter"><a href="#"><img src="../images/demo/gallery/01.png" alt=""/></a>
                                    </li>
                                    <li className="one_quarter"><a href="#"><img src="../images/demo/gallery/01.png" alt=""/></a>
                                    </li>
                                </ul>
                            </figure>
                        </div>

                        <nav className="pagination">
                            <ul>
                                <li><a href="#">&laquo; Previous</a></li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><strong>&hellip;</strong></li>
                                <li><a href="#">6</a></li>
                                <li className="current"><strong>7</strong></li>
                                <li><a href="#">8</a></li>
                                <li><a href="#">9</a></li>
                                <li><strong>&hellip;</strong></li>
                                <li><a href="#">14</a></li>
                                <li><a href="#">15</a></li>
                                <li><a href="#">Next &raquo;</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="clear"></div>
                </main>
            </div>
        </Fragment>
    )
}

export  default  EventList;