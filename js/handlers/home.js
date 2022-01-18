import { fetchView } from "../handlerUtilities.js";

export const getTitle = () => "Home";
export const getView = async () => await fetchView("home");
