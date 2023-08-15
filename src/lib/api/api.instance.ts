import axios from "axios";
import { ApiUrl } from "./constants";

const fetcher = axios.create({
  url: ApiUrl,
});

export default fetcher;
