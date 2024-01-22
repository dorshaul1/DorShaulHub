import moment from "moment";

export const formatDate = (dateString: number | undefined) => {
  return moment(dateString).format("MMM DD, YYYY");
};
