const URL = `https://earninggway.com/wp-json/wp/v2/posts/`;

export const getLatestBlogs = async () => {
  try {
    const response = await fetch(URL + "?per_page=6");
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("error", error);
  }
};



export const getBlogs = async () => {
  try {
    const response = await fetch(URL + "?per_page=100");
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("error", error);
  }
};


export const getSingleBlog = async (id) => {
  try {
    const response = await fetch(URL +id );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("error", error);
  }
};