import { RewardDetails } from "../model/RewardDetails";
import { RewardDetailsRepository } from "../repository/rewardDetails-repository"

export class RewardDetailsService {
    private rewardDetailsRepository: RewardDetailsRepository;

    constructor(rewardDetailsRepository: RewardDetailsRepository) {
        this.rewardDetailsRepository = rewardDetailsRepository;
    }

    async getRewardDetailsById(customerId: string): Promise<any> {
        console.log(customerId)
        return await this.rewardDetailsRepository.getRewardDetailsById(customerId);
    }

}