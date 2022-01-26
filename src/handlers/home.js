import { fetchView } from "../handlerUtilities.js";

export const metaTitle = "Home";
export const getView = async () => await fetchView("home");
