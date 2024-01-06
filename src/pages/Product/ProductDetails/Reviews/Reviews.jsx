import { Rating, Button } from "@mui/material";
import { useState } from "react";
function Reviews() {
  const reviewData = [
    { rating: 5 },
    { rating: 4.7 },
    { rating: 5 },
    { rating: 4.7 },
    { rating: 5 },
    { rating: 4.7 },
  ];
  const [reviews, setReviews] = useState([
    ...Array(11).fill({ rating: 1 }),
    ...Array(2).fill({ rating: 2 }),
    ...Array(3).fill({ rating: 3 }),
    ...Array(40).fill({ rating: 4 }),
    ...Array(100).fill({ rating: 5 }),
  ]);
  // Calculate the count of each rating
  const countByRating = reviews.reduce((acc, review) => {
    const rating = review.rating;
    acc[rating] = (acc[rating] || 0) + 1;
    return acc;
  }, {});

  // Calculate the total number of reviews
  const totalReviews = reviews.length;
  // Calculate the total sum of ratings
  const totalSum = reviews.reduce((sum, review) => sum + review.rating, 0);

  // Calculate the average rating
  const averageRating = totalSum / totalReviews;

  return (
    <div className="">
      <div className="flex ">
        <div className="flex flex-col w-[50%]">
          <div className="">
            <h3 className=" inline-block mb-4">Customer questions & answers</h3>
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
        <div className="mt-10 ml-5 border1 h-max p-4 rounded-xl w-[50%] ">
          <h2 className="text-xl font-bold mb-2">Reviews Progress Bar</h2>
          <div className="my-3">
            <p>Total Reviews: {totalReviews}</p>
            <p>Average Rating: {averageRating.toFixed(2)} out of 5</p>
          </div>
          <div>
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center mb-1">
                <span className="mr-2 text-lg">{rating} star:</span>
                <progress
                  value={countByRating[rating] || 0}
                  max={totalReviews}
                  className="bg-blue-500 h-4 w-[80%]"
                ></progress>
                <span className="ml-2">{countByRating[rating] || 0}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
