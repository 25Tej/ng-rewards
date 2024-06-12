export interface MockRewardDetailsRepository {
   
    getRewardDetailsById: (customerId: string) => Promise<any>;
  }

