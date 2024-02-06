// Auth endpoints
const signInUrl = "/auth/sign-in";
const signUpUrl = "/auth/sign-up";
const verifyEmailUrl = "/user/verify";

// Utility enpodints
const getStatesUrl = "/states";
const getLgaUrl = "/states/lgas";
const imageUploadUrl = "/images/upload";
const imagesUploadUrl = "/images/array-upload";

// Vendor endpoints
const createBusinessEndpoint = "/business";
const updateBusinessEndpoint = "/business";
const checkBusinessEndpoint = "/business/business-check";
const getBusinessLocationsEndpoint = "/business/business-location";
const createRestaurantEndpoint = "/restaurant";

// Tags endpoints
const tagsEndpoint = "/tag";
const menuTagsEndpoint = "/tag/menu";
const restaursntTagsEndpoint = "/tag/restaurant";

const categoryEndpoint = "/category";
const subCategoryEndpoint = "/category/sub";
const getSubCategoryEndpoint = "/category/sub-category";

// Menu endpoits
const createMenuEndpoint = "/menu";
const menuEndpoint = "/menu";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  // Auth endpoints
  signUpUrl,
  signInUrl,
  verifyEmailUrl,

  // Vendor
  createBusinessEndpoint,
  checkBusinessEndpoint,
  getBusinessLocationsEndpoint,
  updateBusinessEndpoint,
  createRestaurantEndpoint,

  // Tags
  tagsEndpoint,
  restaursntTagsEndpoint,
  menuTagsEndpoint,

  // Category
  categoryEndpoint,
  subCategoryEndpoint,
  getSubCategoryEndpoint,

  // Utility enpodints
  getStatesUrl,
  getLgaUrl,
  imageUploadUrl,
  imagesUploadUrl,

  // Menu endpoits
  createMenuEndpoint,
  menuEndpoint,
};
