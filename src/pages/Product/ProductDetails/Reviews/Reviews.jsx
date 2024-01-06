import { Rating, Button } from "@mui/material";

function Reviews() {
  const reviewData = [{ rating: 5 }, { rating: 4.7 }];

  return (
    <div className="">
      <div className="flex">
        <div className="flex flex-col w-[50%]">
          <div className="">
            <h3 className="inline mb-4">Customer questions & answers</h3>

            <div className="flex flex-col justify-evenly ">
              {reviewData.map((item, index) => {
                return (
                  <div
                    className="p-4 border1 flex mb-[25px] w-[95%%] rounded-2xl"
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

          <form className="reviewForm">
            <h4 className="mb-4 text-xl">Add a review</h4>
            <div className="col-md-6">
              <div className="form-group">
                <Rating name="rating" value={5} precision={0.5} />
              </div>
            </div>
            <div className="form-group my-4">
              <textarea
                className="bg1 py-3 px-4 w-[95%] h-[200px] rounded-xl border1"
                placeholder="What did you like or dislike?"
                name="review"
              ></textarea>
            </div>
            <div className="row">
              <div className="flex">
                <div className="form-group">
                  <input
                    type="text"
                    className="bg1 py-1 px-2 w-[340px] text-lg rounded-xl border1"
                    placeholder="Your name"
                    name="userName"
                  />
                </div>
                <div className="form-group ml-2">
                  <input
                    type="Email"
                    className="bg1 py-1 px-2 w-[340px] text-lg rounded-xl border1"
                    placeholder="example@xyz.com"
                    name="email"
                  />
                </div>
              </div>
            </div>
            <div className="form-group my-3 ">
              <Button
                type="submit"
                className="buttonbg1 color1 buttonhoverbg1 px-8"
              >
                Submit Review
              </Button>
            </div>
          </form>
        </div>
        <div className="progressBarBox flex  w-[50%]">
          <span className="mr-3">5 star</span>
          <div
            class="progress"
            style={{ width: "85%", height: "20px" }}
            className="w-[90%]  h-[20px]"
          >
            <div
              class="progress-bar bg-success"
              style={{ width: "75%", height: "20px" }}
            >
              75%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
