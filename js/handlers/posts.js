import { fetchView } from "../handlerUtilities.js";

export const getTitle = () => "Your Posts";
export const getView = async () => await fetchView("posts");
