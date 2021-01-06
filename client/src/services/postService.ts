import HTTPMethod from "./index";

class PostService {
	fetchPostList = () => HTTPMethod.get("/");
}

export default new PostService();
