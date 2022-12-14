import axios from "axios";
import Cookies from "js-cookie";
export let endpoints = {
   //upload cloudinary
   upload_cloudinary: "/upload/cloudinary",
   // user API
   register: "/user/register",
   user: (userID) => `/user/${userID}`,
   change_password: (userID) => `/user/change-password/${userID}`,
   user_all: `/user/all`,
   reset_password: `/user/reset-password`,
   confirm_code: `/user/send-confirm`,
   // sale post API
   get_all_salePost: "sale-post/all",
   search_salePost: "/sale-post/search",
   publish_salePost: (postID) => `/sale-post/published/${postID}`,
   unpublish_salePost: (postID) => `/sale-post/un-published/${postID}`,
   salePost: (postID) => `/sale-post/${postID}`,
   create_salePost: (agencyID) => `/sale-post/create/${agencyID}`,
   add_item_salepost: (postID) => `/item/create/${postID}`,
   star_avg_post: (postID) => `/sale-post/get-star-average-rate/${postID}`,
   revenue_by_year: (agencyID) =>
      `/sale-post/stats-revenue-by-year/${agencyID}/`,
   revenue_by_month: (year, agencyID) =>
      `/sale-post/stats-revenue-month-by-year/${agencyID}/${year}`,
   revenue_by_quarter: (year, agencyID) =>
      `/sale-post/stats-revenue-quarter-by-year/${agencyID}/${year}`,
   count_comment_post: (postID) => `/action/comment/${postID}/count-comment`,
   create_piture: `/picture-post/create`,
   picture_post: (picID) => `/picture-post/${picID}`,
   like_post: (postID) => `/action/like/${postID}`,
   check_like: (postID) => `/action/like/state/${postID}`,
   wishlist: (userID) => `/sale-post/wish-list/${userID}`,
   //cart API
   add_to_cart: "cart/add-to-cart",
   get_cart_by_id: (userID) => `/cart/get-cart/${userID}`,
   get_total: (userID) => `/cart/get-total-price-in-cart/${userID}`,
   payment_cart: (paymentTypeID) => `/cart/payment-cart/${paymentTypeID}`,
   clear_cart: `/cart/clear-cart`,
   delete_item_in_cart: (itemID) => `/cart/remove-item/${itemID}`,
   //order API
   order_user: (userID) => `/order/orders-agency/user/${userID}`,
   order_agency: (agencyID) => `/order/orders-agency/agency/${agencyID}`,
   change_state: (orderAgencyID, stateID) =>
      `/order/orders-agency/${orderAgencyID}/${stateID}`,
   //comment
   comment_post: (postID) => `/action/comment/create/${postID}`,
   comment_all: `action/comment/all`,
   comment_all_post: (postID) => `/action/comment/${postID}/all`,
   //agency
   register_agency: `/agency/register`,
   all_agency: `/agency/all`,
   agency_info: (agencyID) => `/agency/${agencyID}`,
   uncensored_agency: `/censorship/uncensored`,
   accept_agency: (censorshipID) => `/censorship/accepted/${censorshipID}`,
   deny_agency: (censorshipID) => `/censorship/denied/${censorshipID}`,
   //category
   category_all: `/category/all`,
   //stat
   stat_post_category: `/sale-post/stats-by-category`,
   //item
   item: (itemID) => `/item/${itemID}`,
};
export const authAxios = () =>
   axios.create({
      baseURL: "http://localhost:8080/ou-ecommerce/api",
      headers: {
         Authorization: `Bearer ${Cookies.get("accessToken")}`,
      },
   });

export default axios.create({
   baseURL: "http://localhost:8080/ou-ecommerce/api",
});
