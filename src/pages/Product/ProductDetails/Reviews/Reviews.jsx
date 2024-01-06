import { Rating } from "@mui/material";

function Reviews() {
  const reviewData = [
    { rating: 4 },
    { rating: 5 },
    { rating: 4.5 },
    { rating: 4.6 },
    { rating: 4.8 },
    { rating: 4.7 },
  ];
  return (
    <div className="">
      <div className="tabContent">
        <div className="row">
          <div className="col-md-8">
            <h3>Customer questions & answers</h3>
            <br />
            <div className="flex flex-wrap justify-evenly">
              {reviewData.map((item, index) => {
                return (
                  <div
                    className="p-4 border1 flex mb-[25px] w-[45%] rounded-2xl"
                    key={index}
                  >
                    <div className="image w-[16%]">
                      <div className="rounded-[50%]">
                        <img
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"
                          className="w-[100px]"
                        />
                      </div>
                      <span className="text-g d-block text-center font-weight-bold"></span>
                    </div>

                    <div className="info pl-5 w-[84%]">
                      <div className="d-flex align-items-center w-100">
                        <h5 className="text-light"></h5>
                        <div className="ml-auto">
                          <Rating
                            name="half-rating-read"
                            value={item.rating}
                            precision={0.5}
                            readOnly
                          />
                        </div>
                      </div>

                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis culpa esse nobis explicabo eligendi,
                        provident sed perspiciatis, aspernatur dolore sequi
                        deleniti quos, consequuntur id. Ratione tempora
                        accusamus ab quod officia molestias placeat debitis sint
                        totam?
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <form className="reviewForm" onSubmit={submitReview}>
              <h4>Add a review</h4> <br />
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Write a Review"
                  name="review"
                  value={reviewFields.review}
                  onChange={(e) => changeInput(e.target.name, e.target.value)}
                ></textarea>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      value={reviewFields.userName}
                      className="form-control"
                      placeholder="Name"
                      name="userName"
                      onChange={(e) =>
                        changeInput(e.target.name, e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <Rating
                      name="rating"
                      value={rating}
                      precision={0.5}
                      onChange={(e) =>
                        changeInput(e.target.name, e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="form-group">
                <Button type="submit" className="btn-g btn-lg">
                  Submit Review
                </Button>
              </div>
            </form>
          

          <div className="col-md-4 pl-5 reviewBox">
            <h4>Customer reviews</h4>

            <div className="d-flex align-items-center mt-2">
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
              <strong className="ml-3">4.8 out of 5</strong>
            </div>

            <br />

            <div className="progressBarBox d-flex align-items-center">
              <span className="mr-3">5 star</span>
              <div class="progress" style={{ width: "85%", height: "20px" }}>
                <div
                  class="progress-bar bg-success"
                  style={{ width: "75%", height: "20px" }}
                >
                  75%
                </div>
              </div>
            </div>

            <div className="progressBarBox d-flex align-items-center">
              <span className="mr-3">4 star</span>
              <div class="progress" style={{ width: "85%", height: "20px" }}>
                <div
                  class="progress-bar bg-success"
                  style={{ width: "50%", height: "20px" }}
                >
                  50%
                </div>
              </div>
            </div>

            <div className="progressBarBox d-flex align-items-center">
              <span className="mr-3">3 star</span>
              <div class="progress" style={{ width: "85%", height: "20px" }}>
                <div
                  class="progress-bar bg-success"
                  style={{ width: "55%", height: "20px" }}
                >
                  55%
                </div>
              </div>
            </div>

            <div className="progressBarBox d-flex align-items-center">
              <span className="mr-3">2 star</span>
              <div class="progress" style={{ width: "85%", height: "20px" }}>
                <div
                  class="progress-bar bg-success"
                  style={{ width: "35%", height: "20px" }}
                >
                  35%
                </div>
              </div>
            </div>

            <div className="progressBarBox d-flex align-items-center">
              <span className="mr-3">1 star</span>
              <div class="progress" style={{ width: "85%", height: "20px" }}>
                <div
                  class="progress-bar bg-success"
                  style={{ width: "25%", height: "20px" }}
                >
                  25%
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
