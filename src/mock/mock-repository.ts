// // Create a mock for RewardDetailsRepository
// class MockRewardDetailsRepository {
//     async getRewardDetailsById(customerId: string): Promise<any> {
//         // Mock implementation (return a sample RewardDetails object)
//         return {
//             "Item": {
//                 "customerId": "3678905",
//                 "activities": [
//                     {
//                         "activityCompletionDate": "2024-05-31",
//                         "activityName": "Quiz",
//                         "activityStartDate": "2024-05-21",
//                         "pointsEarned": "50",
//                         "rewardsEarned": "5"
//                     }
//                 ]
//             }
//         };
//     }
// }

import { MockRewardDetailsRepository } from "./mock-repository-interface";

export const mockRewardDetailsRepository: MockRewardDetailsRepository = {
     
    getRewardDetailsById: jest.fn((customerId: string) => {
        // Return your mock data here
        return Promise.resolve({
            "customerId": customerId,
            "activities": [
                {
                    "activityCompletionDate": "2024-05-31",
                    "activityName": "Quiz",
                    "activityStartDate": "2024-05-21",
                    "pointsEarned": "50",
                    "rewardsEarned": "5"
                }
            ]
        });
    })
};