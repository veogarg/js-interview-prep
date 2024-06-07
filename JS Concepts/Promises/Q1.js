/**
 * Input:
 * retry(asyncFn, retries=3, delay=50, finalError='failed')
 *
 * Output:
 * attempt1 -> failed
 * attempt2 -> retry after 50ms -> failed
 * attempt3 -> retry after 50ms -> failed
 * Failed
 *
 * Create a retry function that keeps on retrying until the promise resolved with delay and max retries
 *
 */

const retry = async (
  asyncFn,
  retries = 3,
  delay = 50,
  finalError = "Failed"
) => {
  let attempt = 0;
  while (attempt < retries) {
    attempt++;
    try {
      return await asyncFn();
    } catch (error) {
      console.log(`attempt ${attempt} -> Failed`);
      if (attempt < retries) {
        console.log(`retrying in ${delay}ms...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  console.log(finalError);
};

const mockAsyncFunction = async () => {
  if (Math.random() > 0.7) {
    return "Success";
  } else {
    throw new Error("Random failure");
  }
};

retry(mockAsyncFunction, 3, 1000, "Failed to complete after 3 attempts")
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
