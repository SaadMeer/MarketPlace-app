import React from 'react';

const Footer = () => {
    return (
        <div>

            <footer class="nb-footer mt-5">
                <div class="container footer">
                    <div class="row footer-color">
                        <div class="col-sm-12">
                            <div class="about">
                                <img src="images/logo.png" class="img-responsive center-block" alt="" />
                                    <div class="social-media">
                                        <ul class="list-inline">
                                            <li class="mx-1"><a href="" title=""><i class="fa-brands fa-facebook"></i></a></li>
                                            <li class="mx-1"><a href="" title=""><i class="fa-brands fa-twitter"></i></a></li>
                                            <li class="mx-1"><a href="" title=""><i class="fa-brands fa-google-plus"></i></a></li>
                                            <li class="mx-1"><a href="" title=""><i class="fa-brands fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="footer-info-single">
                                <h2 class="title">Help Center</h2>
                                <ul class="list-unstyled">
                                    <li><a href="" title=""><i class="fa fa-angle-double-right"></i> How to Pay</a></li>
                                    <li><a href="" title=""><i class="fa fa-angle-double-right"></i> FAQ's</a></li>
                                    <li><a href="" title=""><i class="fa fa-angle-double-right"></i> Sitemap</a></li>
                                    <li><a href="" title=""><i class="fa fa-angle-double-right"></i> Delivery Info</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="footer-info-single">
                                <h2 class="title">Customer information</h2>
                                <ul class="list-unstyled">
                                    <li><a href="" title=""><i class="fa fa-angle-double-right"></i> About Us</a></li>
                                    <li><a href="" title=""><i class="fa fa-angle-double-right"></i> FAQ's</a></li>
                                    <li><a href="" title=""><i class="fa fa-angle-double-right"></i> Sell Your Items</a></li>
                                    <li><a href="" title=""><i class="fa fa-angle-double-right"></i> Contact Us</a></li>
                                    <li><a href="" title=""><i class="fa fa-angle-double-right"></i> RSS</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="footer-info-single">
                                <h2 class="title">Security & privacy</h2>
                                <ul class="list-unstyled">
                                    <li><a href="" title=""><i class="fa fa-angle-double-right"></i> Terms Of Use</a></li>
                                    <li><a href="" title=""><i class="fa fa-angle-double-right"></i> Privacy Policy</a></li>
                                    <li><a href="" title=""><i class="fa fa-angle-double-right"></i> Return / Refund Policy</a></li>
                                    <li><a href="" title=""><i class="fa fa-angle-double-right"></i> Store Locations</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="footer-info-single">
                                <h2 class="title">Payment</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat sit amet quis enim.</p>

                            </div>
                        </div>
                    </div>
                </div>

                <section class="copyright">
                    <div class="container footer">
                        <div class="row">
                            <div class="col-sm-6 footer-color">
                                <p style={{"color":"#524e4e"}}>Copyright © 2017. Your Company.</p>
                            </div>
                            <div class="col-sm-6 footer-color"></div>
                        </div>
                    </div>
                </section>
            </footer>

        </div>
    );
}

export default Footer;
