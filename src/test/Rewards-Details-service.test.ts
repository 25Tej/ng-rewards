import { RewardDetailsService } from "../service/reward-details-service"
import { mockRewardDetailsRepository } from "../mock/mock-repository";

describe('RewardDetailsService', () => {
  let service: RewardDetailsService;
  //let mockRepo : typeof mockRewardDetailsRepository;
  const mockCustomerId = '3678905';

  beforeEach(() => {
    // Initialize the service with the mock repository before each test
    service = new RewardDetailsService(mockRewardDetailsRepository as any);
  });

  it('should return reward details for a given customer ID', async () => {
    // Arrange
    const expectedRewardDetails = {
        "customerId": "mockCustomerId",
        "activities": [
            {
                "activityCompletionDate": "2024-05-31",
                "activityName": "Quiz",
                "activityStartDate": "2024-05-21",
                "pointsEarned": "50",
                "rewardsEarned": "5"
            }
        ]
    };

    // Act
    const rewardDetails = await service.getRewardDetailsById(mockCustomerId);

    // Assert
    expect(rewardDetails).toEqual(expectedRewardDetails);
    expect(mockRewardDetailsRepository.getRewardDetailsById).toHaveBeenCalledWith(mockCustomerId);
  });

 
});
