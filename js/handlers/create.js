import { fetchView } from "../handlerUtilities.js";

export const getTitle = () => "Create Post";
export const getView = async () => await fetchView("create");
