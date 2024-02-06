export interface AuthStoreProps {
  userData: any;
  userLogIn: (data: object) => void;
  userLogOut: () => void;
}

export interface SetBusinessDetailsProps {
  businessName: string;
  businessAddress: string;
  businessHouseNumber: string;
  businessState: string;
  businessLga: string;
  businessCity: string;
  businessAddressIsRestaurantAddress: boolean;
  businessOpeningHours: Array<object>;
}
export interface VendorStoreProps {
  isCreatingBusiness: boolean;
  businessId: string;
  onboarding: {
    businessLogo: any;
    businessCategories: Array<string>;
    businessName: string;
    businessAddress: string;
    businessHouseNumber: string;
    businessState: string;
    businessLga: string;
    businessCity: string;
    businessAddressIsRestaurantAddress: boolean;

    phoneNumber: string;

    businessTradingLicense: string;
    aboutBusiness: string;
    deliveryOrderPhoneNumber: string;
    numberOfLocations: string;
    businessTimeZone: string;
    businessOpeningHours: Array<object>;
    businessLinks: any;
    businessLocations: Array<object>;
  };

  setBusinessCategories: (data: Array<string>) => void;
  setBusinessDetails: (data: any) => void;
  resetBusinessDetails: () => void;
  setIsCreatingBusiness: (status: boolean) => void;
  setBusinessId: (id: string) => void;
}
