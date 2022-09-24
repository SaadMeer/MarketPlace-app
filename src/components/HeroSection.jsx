import React from 'react';

const HeroSection = () => {
    return (
        <div className='overflow-hidden'>
            <div className='ss overflow-hidden'>
                <div class="container col-xxl-8 py-5">
                    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div class="col-10 col-sm-8 col-lg-6">
                            <img className='shadow' src="https://img.freepik.com/free-photo/girls-laughing-while-they-look-laptop_1153-2003.jpg?w=740&t=st=1663938877~exp=1663939477~hmac=742e75ea81727b1712d2d720793ae4248f6f2a02b9e504266f699d3d0d60c556" class="d-block mx-lg-auto img-fluid" alt="" loading="lazy" />
                        </div>
                        <div class="col-lg-6">
                            <div class="lc-block mb-3">
                                <div editable="rich">
                                    <h2 class="fw-bold display-5">Hire the best <span className='italic-span' style={{}}>Freelancer</span> for your Business</h2>
                                </div>
                            </div>

                            <div class="lc-block mb-3">
                                <div editable="rich">
                                    <p class="lead">
                                        Access global talent on the freelancer website trusted by over 1 million businesses worldwide.
                                    </p>
                                </div>
                            </div>

                            <div class="get-btns lc-block d-grid gap-2 d-md-flex justify-content-md-start"><a class="btn btn-primary px-4 me-md-2" href="#" role="button">Get Client</a>
                                <a class="btn btn-outline-secondary px-4" href="#" role="button">Get Freelancer</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row overflow-hidden freelancer-card">
                <h1 className='pb-3'>Popular Categories</h1>
                <div class="col-sm-4">
                    <div class="card shadow-lg">
                        <div class="card-body">
                            <h5 class="card-title">Get PhotoGrapher</h5>
                            <p class="card-text">Hire the perfect PhotoGrapher that will done your service.</p>
                            <a href="#" class="btn btn-primary">Hire FreeLancer</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card shadow-lg">
                        <div class="card-body">
                            <h5 class="card-title">Get VideoGrapher</h5>
                            <p class="card-text">Hire the perfect VideoGrapher that will done your service.</p>
                            <a href="#" class="btn btn-primary">Hire FreeLancer</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card shadow-lg">
                        <div class="card-body">
                            <h5 class="card-title">Team</h5>
                            <p class="card-text">Hire the perfect Team that will done your service.</p>
                            <a href="#" class="btn btn-primary">Hire FreeLancer</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;

{/* <div class="container">
	<div class="row align-items-center">
		<div class="col-lg-7">
			<div class="lc-block mb-3">
				<div editable="rich">
					<h2 class="fw-bold display-4">Border hero with cropped image and shadows&nbsp;<p></p>
						<p></p>
					</h2>
				</div>
			</div>

			<div class="lc-block mb-3">
				<div editable="rich">
					<p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
					</p>
				</div>
			</div>

			<div class="lc-block d-grid gap-2 d-md-flex justify-content-md-start"><a class="btn btn-primary px-4 me-md-2" href="#" role="button">Click me, I'm a button</a>
				<a class="btn btn-outline-secondary px-4" href="#" role="button">Click me, I'm a button</a>
			</div>
		</div>
		<div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
			<div class="lc-block"><img class="rounded-start" src="https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8M3x8d2Vic2l0ZXxlbnwwfDF8fHwxNjIxNDQ4NTEw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080" alt="Photo by Diego PH" width="720" /></div>
		</div>
	</div>
</div> */}
{/* <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src="https://images.unsplash.com/photo-1530435460869-d13625c69bbf?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTB8fHdlYnNpdGV8ZW58MHwwfHx8MTYyMTQ0NjkyNg&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=768" class="d-block mx-lg-auto img-fluid" alt="" loading="lazy" />
                    </div>
                    <div class="col-lg-6">
                        <div class="lc-block mb-3">
                            <div editable="rich">
                                <h2 class="fw-bold display-5">Responsive left-aligned hero with image</h2>
                            </div>
                        </div>

                        <div class="lc-block mb-3">
                            <div editable="rich">
                                <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                                </p>
                            </div>
                        </div>

                        <div class="lc-block d-grid gap-2 d-md-flex justify-content-md-start"><a class="btn btn-primary px-4 me-md-2" href="#" role="button">Click me, I'm a button</a>
                            <a class="btn btn-outline-secondary px-4" href="#" role="button">Click me, I'm a button</a>
                        </div>

                    </div>

                </div>
            </div> */}