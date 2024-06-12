import { RewardDetails } from "../model/reward-details";
import { RewardDetailsRepository } from "../repository/reward-details-repository"

export class RewardDetailsService {
    private rewardDetailsRepository: RewardDetailsRepository;

    constructor(rewardDetailsRepository: RewardDetailsRepository) {
        this.rewardDetailsRepository = rewardDetailsRepository;
    }

    async getRewardDetailsById(customerId: string): Promise<RewardDetails> {
        return await this.rewardDetailsRepository.getRewardDetailsById(customerId);
    }

}
