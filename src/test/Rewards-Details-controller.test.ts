import { RewardDetailsController } from '../controller/reward-details-controller';
import { RewardDetailsService } from "../service/reward-details-service"
import { mockRewardDetailsRepository } from "../mock/mock-repository";

describe('RewardDetailsController', () => {
  let controller: RewardDetailsController;
  let service: RewardDetailsService;
  const mockCustomerId = '3678905';

  beforeEach(() => {
    // Create an instance of RewardDetailsService with the mock repository
    service = new RewardDetailsService(mockRewardDetailsRepository as any);
    // Initialize the controller with the service before each test
    controller = new RewardDetailsController(service);
  });

  it('should return reward details for a given customer ID from the controller', async () => {
    // Arrange
    const expectedRewardDetails = {
      customerId: mockCustomerId,
      activities: [
        {
          activityCompletionDate: '2024-05-31',
          activityName: 'Quiz',
          activityStartDate: '2024-05-21',
          pointsEarned: '50',
          rewardsEarned: '5'
        }
      ]
    };

    // Act
    const rewardDetails = await controller.getRewardDetailsById(mockCustomerId);

    // Assert
    expect(rewardDetails).toEqual(expectedRewardDetails);
    expect(service.getRewardDetailsById).toHaveBeenCalledWith(mockCustomerId);
  });


});































// import { RewardDetailsController } from "../controller/reward-details-controller";
// import { RewardDetailsService } from "../service/reward-details-service";
// import { mockRewardDetailsRepository } from '../mock/mock-repository';

// describe('RewardDetailsController Tests', () => {
//     let controller: RewardDetailsController;
//     let service: RewardDetailsService;

//     // Set up the RewardDetailsController instance before each test
//     beforeEach(() => {
//         // Initialize the RewardDetailsService with the mock repository
//         service = new RewardDetailsService(mockRewardDetailsRepository);
//         // Create an instance of RewardDetailsController with the service
//         controller = new RewardDetailsController(service);
//     });

//     // Test to verify if the getRewardDetailsById method returns the correct reward details
//     it('should return the correct reward details for a given customer ID', async () => {
//         // Define the customer ID and the expected reward details
//         const customerId = '3678905';
//         const expectedData = {
//             "customerId": "3678905",
//             "activities": [
//                 {
//                     "activityCompletionDate": "2024-05-31",
//                     "activityName": "Quiz",
//                     "activityStartDate": "2024-05-21",
//                     "pointsEarned": "50",
//                     "rewardsEarned": "5"
//                 }
//             ]
//         };

//         // Mock the service method to return the expected data
//         jest.spyOn(service, 'getRewardDetailsById').mockResolvedValue(expectedData);

//         // Call the controller method with the test customer ID
//         const rewardDetails = await controller.getRewardDetailsById(customerId);

//         // Assert that the service method was called correctly
//         expect(service.getRewardDetailsById).toHaveBeenCalledWith(customerId);

//         // Assert that the returned reward details match the expected data
//         expect(rewardDetails).toEqual(expectedData);
//     });
// });
